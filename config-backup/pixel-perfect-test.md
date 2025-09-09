# 像素級精確測試案例

## 測試用萬能指令

```
執行像素級精確的設計還原：

來源：https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=68-40832

強制要求：
1. 先從MCP列出以下精確數據：
   - 每個元素的x/y座標 (例如: x:120px, y:240px)
   - 精確尺寸 (width: 280px, height: 44px)
   - 精確顏色值 (hex: #1F2937, rgba等)
   - 字體大小、行高、字重 (16px/24px, font-weight: 500)
   - 邊距和內距 (margin: 16px, padding: 12px 20px)

2. 複誦你看到的設計：
   "我看到一個 [具體描述] 位於 [位置]，尺寸為 [具體數值]..."

3. 生成程式碼前，詢問我：
   "以上理解是否正確？有任何遺漏的細節嗎？"

4. 僅在我確認後才開始編碼

禁止行為：
- 不可猜測任何數值
- 不可使用approximate values
- 不可跳過任何視覺元素
- 不可簡化設計結構

請開始第一步：數據提取和列表。
```

## 分段測試指令

### 階段1：數據提取測試
```
先只做數據提取，不要生成程式碼：

從 https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=68-40832 提取並列出：
- Layout container: 位置、尺寸、背景
- 每個子元素: 精確位置、樣式屬性  
- 文字內容: 字體、大小、顏色、對齊
- 圖片/圖標: 尺寸、位置、來源
- 間距關係: 元素間的precise spacing

請以表格形式列出所有數據，我需要先確認準確性。
```

### 階段2：結構確認測試
```
基於上述數據，描述HTML結構：
- 主容器和子容器的層級關係
- 每個元素的semantic標籤選擇
- CSS Grid/Flexbox的使用策略
- 響應式斷點和行為
- Twin3頁面結構的應用

等我確認結構正確後再繼續。
```

### 階段3：樣式實現測試
```
現在生成CSS，確保：
- 每個數值都來自之前列出的MCP數據
- 註明每個屬性的來源 (/* 來自Figma: x=120px */)
- 使用exact values，不要rounded numbers
- 包含hover、focus等交互狀態
- 應用Twin3設計系統token
```

## 診斷測試指令

### 顏色診斷測試
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

來源：https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=68-40832
```

### 間距診斷測試
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

來源：https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=68-40832
```

### 字體診斷測試
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

來源：https://www.figma.com/design/AJ58vJatMPOuKFFdYfo5g3/passport?node-id=68-40832
```

## 驗證成功標準

### 數據提取階段
- ✅ 所有元素的精確座標已列出
- ✅ 所有尺寸數據精確到1px
- ✅ 所有顏色值提供hex/rgb/hsl格式
- ✅ 所有字體屬性完整列出
- ✅ 所有間距關係精確測量

### 結構確認階段
- ✅ HTML結構語義正確
- ✅ 容器層級關係清晰
- ✅ CSS佈局策略合理
- ✅ 響應式設計考慮周全
- ✅ Twin3結構正確應用

### 樣式實現階段
- ✅ 每個CSS屬性都有來源標註
- ✅ 所有數值來自MCP數據
- ✅ 沒有使用近似值
- ✅ 互動狀態完整實現
- ✅ 設計系統token正確使用

## 品質檢查清單

### 像素級精確度
- [ ] 位置誤差：0px
- [ ] 尺寸誤差：0px
- [ ] 顏色匹配：100%
- [ ] 字體樣式：完全一致
- [ ] 間距精確：無誤差

### 設計系統一致性
- [ ] Twin3頁面結構正確
- [ ] 設計token正確使用
- [ ] 響應式行為符合規範
- [ ] 互動狀態完整
- [ ] 可訪問性符合標準

### 代碼品質
- [ ] HTML語義正確
- [ ] CSS結構清晰
- [ ] 來源標註完整
- [ ] 效能表現良好
- [ ] 跨瀏覽器相容
