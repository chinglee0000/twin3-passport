# 像素級精確驗證模板

## 步驟1：數據獲取驗證
```
先只做數據提取，不要生成程式碼：

從 [Figma連結] 提取並列出：
- Layout container: 位置、尺寸、背景
- 每個子元素: 精確位置、樣式屬性  
- 文字內容: 字體、大小、顏色、對齊
- 圖片/圖標: 尺寸、位置、來源
- 間距關係: 元素間的precise spacing

請以表格形式列出所有數據，我需要先確認準確性。
```

## 步驟2：結構確認
```
基於上述數據，描述HTML結構：
- 主容器和子容器的層級關係
- 每個元素的semantic標籤選擇
- CSS Grid/Flexbox的使用策略
- 響應式斷點和行為

等我確認結構正確後再繼續。
```

## 步驟3：樣式實現
```
現在生成CSS，確保：
- 每個數值都來自之前列出的MCP數據
- 註明每個屬性的來源 (/* 來自Figma: x=120px */)
- 使用exact values，不要rounded numbers
- 包含hover、focus等交互狀態
```

## 萬能精確指令
```
執行像素級精確的設計還原：

來源：[您的Figma連結]

強制要求：
1. 先從MCP列出以下精確數據：
   - 每個元素的x/y座標 (例如: x:120px, y:240px)
   - 精確尺寸 (width: 280px, height: 44px)
   - 精確顏色值 (hex: #1F2937, rgba等)
   - 字體大小、行高、字重 (16px/24px, font-weight: 500)
   - 邊距和內距 (margin: 16px, padding: 12px 20px)

2. 複誦我看到的設計：
   "我看到一個 [具體描述] 位於 [位置]，尺寸為 [具體數值]..."

3. 生成程式碼前，詢問我：
   "以上理解是否正確？有任何遺漏的細節嗎？"

4. 僅在我確認後才開始編碼

禁止行為：
- 不可猜測任何數值
- 不可使用approximate values
- 不可跳過任何視覺元素
- 不可簡化設計結構
```

## 專門診斷指令

### 顏色校正
```
使用get_variable_defs精確提取所有顏色：

檢查並列出：
1. Primary colors: 主色調的hex值
2. Text colors: 所有文字顏色的exact values  
3. Background colors: 背景和表面顏色
4. Border colors: 邊框和分隔線顏色
5. Status colors: success, error, warning, info

對每個顏色提供：
- Hex值 (例如: #1F2937)
- RGB值 (例如: rgb(31, 41, 55))  
- HSL值 (例如: hsl(220, 28%, 17%))
- Opacity/Alpha值 (如果適用)
```

### 間距測量
```
重新測量所有spacing和sizing：

使用MCP工具測量並報告：
1. 元素間的margin (上下左右分別多少px)
2. 元素內的padding (精確到1px)
3. 元素本身的width/height
4. Border width和radius
5. 字體的line-height和letter-spacing

以CSS格式輸出：
margin: 16px 24px 12px 24px; /* top right bottom left */
padding: 12px 20px; /* vertical horizontal */
```

### 字體匹配
```
從Figma提取完整的typography系統：

分析每個文字元素：
1. Font family: 精確的字體名稱
2. Font size: 以px為單位的大小
3. Font weight: 數值 (400, 500, 600等)
4. Line height: 精確值 (例如: 1.5 或 24px)
5. Letter spacing: 如果有設定
6. Text alignment: left/center/right/justify
7. Text color: 精確的hex值
```

## Twin3 專用驗證模板

### Twin3 頁面結構驗證
```
驗證Twin3統一頁面結構：

檢查以下結構是否正確應用：
1. page-container (min-h-screen) - 主容器
2. page-video-background - 背景視頻
3. page-content-container - 內容容器
4. page-unified-content - 統一內容區塊
5. page-left-content - 標題描述區域
6. page-right-action - 操作區域
7. 統一Footer - 頁腳樣式

確認每個區塊的：
- 精確尺寸和位置
- 響應式行為
- 與設計規格的一致性
```

### Twin3 設計系統驗證
```
驗證Twin3設計系統一致性：

檢查以下設計token：
1. 顏色系統：
   - primary: { bg: '#0A0A0A', surface: 'rgba(255, 255, 255, 0.05)' }
   - text: { primary: '#FFFFFF', secondary: '#A4A7AE' }
   - accent: { green: '#32D583', purple: '#D6BBFB' }

2. 字體系統：
   - Kanit: 標題和重要文字
   - Inter: 正文和說明文字

3. 間距系統：
   - 統一的margin和padding值
   - 響應式間距調整

4. 元件樣式：
   - 按鈕樣式一致性
   - 卡片樣式統一
   - 表單元件規範
```
