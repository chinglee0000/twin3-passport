# Twin3 Passport - 組件系統

基於 Figma MCP 數據的像素級精確組件庫，提供完整的可重用 UI 組件。

## 特點

- ✅ **像素級精確**：所有尺寸、間距、顏色完全匹配 Figma 設計稿
- ✅ **Tailwind CSS**：使用 Tailwind 處理所有樣式，無硬編碼值
- ✅ **Kanit 字體**：使用設計稿指定的 Kanit 字體系列
- ✅ **精確顏色**：使用 Figma 中的確切 RGBA 值
- ✅ **完整結構**：包含所有 4 個主要 Section

## 組件結構

### Section 1: Profile Bar (1000×64px)
- 用戶頭像 (64×64px) 帶編輯圖標
- 用戶名稱 "Hi, Alex!" 
- 獎勵顯示區域 ($0.274 +0.01)

### Section 2: Score Cards (1000×197px)
- **Humanity Index 卡片** (488×197px)
  - 分數：204/265
  - 進度條：70% (#D6BBFB)
  - 改善按鈕
- **twin3 Airdrop Score 卡片** (488×197px)
  - 分數：187/265
  - 進度條：73% (#D6BBFB)
  - 指標網格 (Bi, Di, Si, H)

### Section 3: Account Connected (1000×756px)
- 標題："Account Connected (3/13)"
- 描述文字
- "Refresh All Accounts" 按鈕
- 帳戶連接卡片容器

### Section 4: Social Contribution (1000×560px)
- 標題："twin3 Social Contribution (1/6)"
- 描述文字
- 任務列表卡片
- 範例任務項目

## 使用方法

```jsx
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
```

## 依賴項目

確保你的項目包含以下依賴：

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

## 字體設置

在你的 HTML 或 CSS 中添加 Kanit 字體：

```html
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600&display=swap" rel="stylesheet">
```

## 素材文件

組件需要以下素材文件：

- `/assets/img/figma/Avatar.png` - 用戶頭像圖片
- `/assets/img/figma/edit_icon.svg` - 編輯圖標

## Tailwind 配置

確保你的 `tailwind.config.js` 包含必要的自定義配置：

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
      colors: {
        text: {
          primary: '#FFFFFF',
          secondary: '#A4A7AE',
        },
        custom: {
          green: '#32D583',
          purple: '#D6BBFB',
          gray: '#414651',
        }
      }
    }
  }
}
```

## 設計規格

- **容器尺寸**：1440×3345px (最大寬度)
- **主要內容區域**：1000×2971px
- **背景色**：#0A0A0A
- **主要字體**：Kanit
- **玻璃效果**：backdrop-blur + 白色透明度
- **邊框**：白色 10% 透明度

## 響應式設計

目前組件針對桌面版本進行了優化。如需響應式版本，可以：

1. 使用 Tailwind 的響應式前綴 (sm:, md:, lg:, xl:)
2. 調整容器寬度和定位
3. 修改字體大小和間距

## 自定義

要自定義組件：

1. **顏色**：修改 Tailwind 配置中的自定義顏色
2. **尺寸**：調整組件中的寬度和高度類別
3. **內容**：修改文字內容和數值
4. **功能**：添加點擊處理程序和狀態管理

## 注意事項

- 所有尺寸都基於 Figma 的 absoluteBoundingBox 數據
- 使用了精確的 RGBA 顏色值
- 字體大小和行高完全匹配設計稿
- 組件使用絕對定位來確保像素級精確度
