# MCP 進階功能測試指令

## 基本連接測試
```
# 測試基本MCP連接
@figma-dashboard-v2.html 使用MCP工具分析這個文件的設計來源
```

## 進階工具測試

### 1. get_code 工具測試
```
使用get_code提取Dashboard主容器並生成React + Tailwind結構，包含TypeScript類型定義
```

### 2. get_variable_defs 工具測試
```
使用get_variable_defs提取Twin3 Passport的所有設計token（顏色、字體、間距）並創建完整的CSS變數檔案
```

### 3. get_assets 工具測試
```
使用get_assets提取所有Dashboard頁面的圖標和圖片，優化並保存到./assets/目錄
```

### 4. component_sync 工具測試
```
檢查Component Library是否有新的元件更新並列出變更清單，生成遷移指南
```

### 5. design_tokens 工具測試
```
同步所有設計tokens，驗證一致性並生成文檔
```

## 批次處理測試

### 批次元件生成
```
批次處理以下元件並生成對應的React元件：
1. Navigation Bar
2. Dashboard Cards
3. Action Buttons
4. Form Components
5. Footer

使用get_code工具為每個元件生成結構化代碼
```

### 批次設計變數提取
```
批次提取以下類別的設計變數：
1. 顏色系統 (primary, secondary, accent)
2. 字體系統 (Kanit, Inter)
3. 間距系統 (margins, paddings)
4. 陰影系統 (box-shadows)
5. 邊框系統 (border-radius, border-width)

生成統一的CSS自訂屬性檔案
```

## 自動監控測試

### Component Library 監控
```
設定自動監控我們的Figma設計系統：
1. 每小時檢查更新
2. 當有元件更新時通知我
3. 提供詳細的變更摘要
4. 生成自動遷移指南
```

### Design Tokens 監控
```
監控設計tokens變更：
1. 追蹤顏色變更
2. 監控字體更新
3. 檢查間距調整
4. 驗證新增的設計變數
```

## 整合測試

### 完整頁面轉換測試
```
執行完整的Dashboard頁面轉換：
1. 使用get_variable_defs提取所有設計變數
2. 使用get_assets獲取所有圖片資源
3. 使用get_code生成完整的頁面結構
4. 應用Twin3統一頁面模板
5. 確保像素級精確匹配
6. 生成完整的React + TypeScript + Tailwind代碼
```

### 設計系統同步測試
```
執行完整的設計系統同步：
1. 檢查所有Component Library更新
2. 同步最新的design tokens
3. 更新所有相關的本地元件
4. 驗證設計一致性
5. 生成更新報告和遷移指南
```

## 驗證清單

執行以下測試來確認進階MCP功能正常：

### ✅ 基本功能
- [ ] MCP連接正常
- [ ] 可以獲取基本設計數據
- [ ] 像素級精確匹配工作正常

### ✅ 進階工具
- [ ] get_code 生成結構化代碼
- [ ] get_variable_defs 提取設計變數
- [ ] get_assets 獲取圖片資源
- [ ] component_sync 檢查更新
- [ ] design_tokens 管理tokens

### ✅ 自動化功能
- [ ] 批次處理多個元件
- [ ] 自動監控Component Library
- [ ] 自動同步design tokens
- [ ] 生成遷移指南

### ✅ 整合功能
- [ ] Twin3頁面結構自動應用
- [ ] 響應式設計完全一致
- [ ] 所有樣式來源正確標註
- [ ] TypeScript類型定義完整

## 成功標準

如果以上所有測試都通過，表示進階MCP自動化設定成功：
1. ✅ 自動使用適當的 MCP 工具
2. ✅ 提取設計變數和 tokens
3. ✅ 批次處理多個元件
4. ✅ 監控設計系統更新
5. ✅ 生成結構化的 React 代碼
6. ✅ 確保像素級精確匹配
7. ✅ 自動應用Twin3頁面結構
