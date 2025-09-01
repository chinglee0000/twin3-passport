#!/bin/bash

# 超級自動化部署腳本 - 包含自動創建 GitHub 倉庫
# 需要 GitHub Personal Access Token

set -e

# 顏色定義
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

print_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# 獲取參數
REPO_NAME=${1:-"twin3-passport"}
GITHUB_USERNAME=${2:-""}
GITHUB_TOKEN=${3:-""}

print_info "🚀 超級自動化部署開始..."

# 檢查必要文件
if [ ! -f "twin3-flow.html" ]; then
    print_error "找不到 twin3-flow.html 文件"
    exit 1
fi

# 獲取 GitHub 信息
if [ -z "$GITHUB_USERNAME" ]; then
    print_info "請輸入您的 GitHub 用戶名:"
    read -r GITHUB_USERNAME
fi

if [ -z "$GITHUB_TOKEN" ]; then
    print_warning "需要 GitHub Personal Access Token 來自動創建倉庫"
    echo "1. 前往 https://github.com/settings/tokens"
    echo "2. 點擊 'Generate new token (classic)'"
    echo "3. 勾選 'repo' 權限"
    echo "4. 複製生成的 token"
    echo ""
    print_info "請輸入您的 GitHub Token (輸入時不會顯示):"
    read -s GITHUB_TOKEN
    echo ""
fi

# 初始化 Git
print_info "📦 初始化 Git 倉庫..."
if [ ! -d ".git" ]; then
    git init
fi

# 配置 Git
if [ -z "$(git config user.name)" ]; then
    git config user.name "$GITHUB_USERNAME"
fi
if [ -z "$(git config user.email)" ]; then
    git config user.email "$GITHUB_USERNAME@users.noreply.github.com"
fi

# 添加和提交文件
print_info "📝 添加和提交文件..."
git add .
if ! git diff --staged --quiet; then
    git commit -m "🚀 Initial commit: Twin3 Passport

✨ Features:
- Complete user onboarding flow
- Professional identity verification
- Dynamic career-based messaging
- Unified design system
- Task and rewards management
- Account approval workflow
- Global Identity Score tracking

🎨 Design:
- Consistent color scheme
- Responsive layout
- Modern UI components
- Professional typography

🔧 Technical:
- Pure HTML/CSS/JS
- No external dependencies
- Mobile-friendly
- Cross-browser compatible"
fi

# 自動創建 GitHub 倉庫
print_info "🏗️  自動創建 GitHub 倉庫..."
REPO_RESPONSE=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
    -H "Accept: application/vnd.github.v3+json" \
    -d "{\"name\":\"$REPO_NAME\",\"description\":\"Twin3 Passport - Professional Digital Identity Platform\",\"private\":false}" \
    https://api.github.com/user/repos)

if echo "$REPO_RESPONSE" | grep -q "\"name\":\"$REPO_NAME\""; then
    print_success "GitHub 倉庫創建成功！"
else
    print_warning "倉庫可能已存在或創建失敗，繼續推送..."
fi

# 設置遠程倉庫並推送
print_info "🚀 推送到 GitHub..."
git branch -M main
REPO_URL="https://$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git"

if git remote get-url origin &> /dev/null; then
    git remote set-url origin "$REPO_URL"
else
    git remote add origin "$REPO_URL"
fi

if git push -u origin main; then
    print_success "🎉 部署完全成功！"
    echo ""
    echo "🌐 您的項目地址:"
    echo "📱 GitHub: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "🔗 Raw HTML: https://raw.githubusercontent.com/$GITHUB_USERNAME/$REPO_NAME/main/twin3-flow.html"
    echo ""
    
    # 自動啟用 GitHub Pages
    print_info "🌍 自動啟用 GitHub Pages..."
    curl -s -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        -d '{"source":{"branch":"main","path":"/"}}' \
        "https://api.github.com/repos/$GITHUB_USERNAME/$REPO_NAME/pages" > /dev/null
    
    echo "📄 GitHub Pages: https://$GITHUB_USERNAME.github.io/$REPO_NAME/twin3-flow.html"
    echo ""
    print_success "✨ 完全自動化部署完成！"
else
    print_error "推送失敗，請檢查 token 權限"
fi
