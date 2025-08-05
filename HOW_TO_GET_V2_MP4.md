# 如何獲取 Twin3.ai 背景視頻 (v2.mp4)

## 🎯 目標
您需要將實際的 Twin3.ai 背景視頻文件放在 `assets/img/v2.mp4` 位置。

## 📁 方法 1: 從 Twin3.ai 官網獲取

### 步驟 1: 訪問 Twin3.ai 官網
1. 打開瀏覽器訪問 https://twin3.ai/
2. 打開開發者工具 (F12)
3. 切換到 "Network" 標籤
4. 刷新頁面

### 步驟 2: 尋找視頻文件
1. 在 Network 標籤中篩選 "Media" 或 "All"
2. 尋找 `.mp4`, `.webm`, 或其他視頻格式的文件
3. 通常文件名可能是：
   - `background.mp4`
   - `hero-video.mp4`
   - `particles.mp4`
   - `v2.mp4`
   - 或類似的名稱

### 步驟 3: 下載視頻
1. 右鍵點擊視頻文件
2. 選擇 "Open in new tab" 或 "Copy link address"
3. 下載視頻文件
4. 重命名為 `v2.mp4`
5. 放置在 `assets/img/v2.mp4`

## 📁 方法 2: 從源代碼獲取

### 如果您有 Twin3.ai 的源代碼訪問權限：
1. 尋找 `assets/`, `public/`, `static/` 或 `media/` 目錄
2. 查找視頻文件
3. 複製到我們的 `assets/img/v2.mp4`

## 📁 方法 3: 創建替代視頻

### 如果無法獲取原始視頻，您可以創建類似的背景視頻：

#### 建議規格：
- **格式**: MP4 (H.264 編碼)
- **解析度**: 1920x1080 或更高
- **長度**: 10-30秒 (循環播放)
- **幀率**: 30fps
- **文件大小**: < 10MB (為了快速加載)

#### 內容建議：
- 粒子網絡動畫
- 幾何圖形移動
- 抽象背景動畫
- 深色背景 (#0f0f0f) 配合藍色/橙色/綠色元素

#### 工具推薦：
- **After Effects**: 專業動畫製作
- **Blender**: 免費 3D 動畫軟件
- **Lottie**: Web 動畫
- **CSS 動畫**: 純代碼實現

## 🔧 當前狀態

目前 `assets/img/v2.mp4` 是一個佔位符文件。HTML 已經配置好：

```html
<video id="background-video" autoplay muted loop playsinline>
    <source src="assets/img/v2.mp4" type="video/mp4">
    <!-- 如果視頻加載失敗，會自動回退到 3D 粒子系統 -->
</video>
```

## ✅ 測試

替換視頻文件後：
1. 刷新瀏覽器
2. 檢查開發者工具的 Console
3. 應該看到 "Twin3.ai background video loaded successfully"
4. 如果看到錯誤，會自動回退到 3D 粒子系統

## 🚀 完成後

一旦您放置了正確的 `v2.mp4` 文件，twin3-flow.html 將：
- 自動播放背景視頻
- 循環播放
- 靜音播放
- 如果視頻加載失敗，自動回退到 3D 粒子動畫

這樣您就能獲得與 Twin3.ai 完全一致的背景動畫效果！
