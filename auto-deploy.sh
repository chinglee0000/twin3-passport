#!/bin/bash

# Twin3 Passport 自動部署到 GitHub 腳本
# 使用方法: ./auto-deploy.sh [倉庫名稱] [GitHub用戶名]

set -e  # 遇到錯誤立即停止

# 顏色定義
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印彩色信息
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 獲取參數
REPO_NAME=${1:-"twin3-passport"}
GITHUB_USERNAME=${2:-""}

print_info "🚀 開始自動部署 Twin3 Passport 到 GitHub..."
print_info "📁 倉庫名稱: $REPO_NAME"

# 檢查是否在正確的目錄
if [ ! -f "twin3-flow.html" ]; then
    print_error "找不到 twin3-flow.html 文件，請確保在正確的目錄中運行此腳本"
    exit 1
fi

# 檢查 Git 是否安裝
if ! command -v git &> /dev/null; then
    print_error "Git 未安裝，請先安裝 Git"
    exit 1
fi

# 獲取 GitHub 用戶名
if [ -z "$GITHUB_USERNAME" ]; then
    print_info "請輸入您的 GitHub 用戶名:"
    read -r GITHUB_USERNAME
fi

print_info "👤 GitHub 用戶名: $GITHUB_USERNAME"

# 初始化 Git 倉庫
print_info "📦 初始化 Git 倉庫..."
if [ ! -d ".git" ]; then
    git init
    print_success "Git 倉庫初始化完成"
else
    print_warning "Git 倉庫已存在"
fi

# 配置 Git 用戶信息（如果未配置）
if [ -z "$(git config user.name)" ]; then
    print_info "請輸入您的 Git 用戶名:"
    read -r GIT_USERNAME
    git config user.name "$GIT_USERNAME"
fi

if [ -z "$(git config user.email)" ]; then
    print_info "請輸入您的 Git 郵箱:"
    read -r GIT_EMAIL
    git config user.email "$GIT_EMAIL"
fi

# 添加所有文件
print_info "📝 添加所有文件到 Git..."
git add .

# 檢查是否有文件需要提交
if git diff --staged --quiet; then
    print_warning "沒有文件需要提交"
else
    # 提交文件
    print_info "💾 提交文件..."
    git commit -m "Initial commit: Twin3 Passport complete flow

- Complete user flow from welcome to dashboard
- Professional identity verification system
- Dynamic career-based CTA messages
- Unified design with consistent colors
- Task management and rewards system
- Account approval workflow
- Global Identity Score tracking"
    print_success "文件提交完成"
fi

# 設置主分支
print_info "🌿 設置主分支..."
git branch -M main

# 添加遠程倉庫
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
print_info "🔗 添加遠程倉庫: $REPO_URL"

if git remote get-url origin &> /dev/null; then
    git remote set-url origin "$REPO_URL"
else
    git remote add origin "$REPO_URL"
fi

print_success "遠程倉庫配置完成"

# 提示用戶創建 GitHub 倉庫
print_warning "⚠️  請手動完成以下步驟:"
echo ""
echo "1. 前往 https://github.com/new"
echo "2. 倉庫名稱輸入: $REPO_NAME"
echo "3. 選擇 Public 或 Private"
echo "4. 不要勾選 'Initialize with README'"
echo "5. 點擊 'Create repository'"
echo ""
print_info "完成後按 Enter 繼續..."
read -r

# 推送到 GitHub
print_info "🚀 推送到 GitHub..."
if git push -u origin main; then
    print_success "🎉 部署成功！"
    echo ""
    echo "📱 您的項目已成功上傳到:"
    echo "🔗 https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo ""
    echo "📋 接下來您可以:"
    echo "   • 啟用 GitHub Pages 來託管網站"
    echo "   • 邀請協作者"
    echo "   • 設置自動部署"
    echo ""
else
    print_error "推送失敗，請檢查:"
    echo "   • GitHub 倉庫是否已創建"
    echo "   • 用戶名是否正確"
    echo "   • 是否有推送權限"
fi

print_info "✨ 腳本執行完成！"
