# Twin3 Passport Dashboard Demo

## 🎯 項目概覽

這是一個完整的 React Dashboard 應用，實現了 Twin3 Passport PRD 中的所有核心功能。

## 📁 項目結構

```
twin3-passport-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/           # 主要儀表板組件
│   │   │   ├── Dashboard.tsx    # 主容器組件
│   │   │   ├── WelcomeSection.tsx
│   │   │   ├── ScoreSection.tsx
│   │   │   ├── ProfessionSelector.tsx
│   │   │   ├── TaskSection.tsx
│   │   │   ├── ConnectedAccounts.tsx
│   │   │   └── RewardsLog.tsx
│   │   └── UI/                  # 可重用 UI 組件
│   │       ├── CircularProgress.tsx
│   │       ├── TraitProgressBar.tsx
│   │       ├── TaskCard.tsx
│   │       ├── AccountCard.tsx
│   │       └── UpdateButton.tsx
│   ├── hooks/
│   │   └── useDashboardData.ts  # 數據管理 Hook
│   ├── constants/
│   │   └── themes.ts            # 主題和常量
│   ├── types/
│   │   └── index.ts             # TypeScript 類型定義
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 設計特色

### 三色主題系統
- **藍色主題** (Twin Matrix Score): 代表 AI-人類智能融合
- **橙色主題** (Humanity Trust Score): 代表人類價值觀和倫理
- **綠色主題** (Profession Traits): 代表職業技能發展

### 視覺效果
- 霓虹漸變效果
- 響應式設計
- 流暢動畫過渡
- 玻璃擬態效果
- 發光邊框和陰影

## 🚀 核心功能

### 1. 歡迎區域 (WelcomeSection)
- 個性化問候
- 用戶資訊顯示
- 加入天數統計
- 當前職業狀態

### 2. 分數區域 (ScoreSection)
- **Twin Matrix Score**: 創造力、邏輯、同理心、韌性
- **Humanity Trust Score**: 真實性、可靠性、透明度、倫理
- **Profession Traits**: 職業相關技能進度
- 圓形進度條可視化
- 實時更新功能

### 3. 職業選擇器 (ProfessionSelector)
- 5種預設職業選項
- 動態技能特質顯示
- 下拉選單界面
- 職業描述和圖標

### 4. 任務管理 (TaskSection)
- 多種任務類型：日常、週期、成就、職業
- 任務狀態追蹤
- 進度條可視化
- 獎勵系統
- 篩選功能

### 5. 連接帳戶 (ConnectedAccounts)
- 5個平台整合：GitHub、LinkedIn、Twitter、Stack Overflow、Medium
- 連接狀態管理
- 貢獻分數顯示
- 同步功能

### 6. 獎勵日誌 (RewardsLog)
- 完整獎勵歷史
- 按類型和時間篩選
- 統計數據顯示
- 來源追蹤

## 🛠 技術實現

### React Hooks
- `useDashboardData`: 統一數據管理
- `useState`: 本地狀態管理
- `useEffect`: 生命週期管理

### TypeScript
- 完整類型定義
- 介面規範
- 類型安全

### Tailwind CSS
- 實用優先的樣式
- 自定義主題配置
- 響應式設計
- 動畫效果

### 組件架構
- 模組化設計
- 可重用組件
- Props 介面
- 事件處理

## 📊 數據模型

### 用戶數據
```typescript
interface User {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  joinDate: Date;
  currentProfession?: string;
}
```

### 分數系統
```typescript
interface TwinMatrixScore {
  overall: number;
  creativity: number;
  logic: number;
  empathy: number;
  resilience: number;
  lastUpdated: Date;
}
```

### 任務系統
```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'weekly' | 'achievement' | 'profession';
  status: 'pending' | 'in_progress' | 'completed' | 'expired';
  progress: number;
  maxProgress: number;
  reward: RewardInfo;
  deadline?: Date;
}
```

## 🎮 互動功能

1. **分數更新**: 點擊更新按鈕模擬分數提升
2. **任務完成**: 點擊完成按鈕標記任務完成
3. **帳戶連接**: 輸入用戶名連接社交平台
4. **職業切換**: 下拉選單選擇不同職業
5. **篩選功能**: 按狀態、類型、時間篩選內容

## 🚀 運行指南

1. **安裝依賴**
   ```bash
   npm install
   ```

2. **啟動開發服務器**
   ```bash
   npm run dev
   ```

3. **構建生產版本**
   ```bash
   npm run build
   ```

4. **預覽生產版本**
   ```bash
   npm run preview
   ```

## 🎯 特色亮點

- ✅ 完整實現 PRD 要求的所有功能
- ✅ 現代化 React 18 + TypeScript 架構
- ✅ 響應式設計，支持多設備
- ✅ 豐富的視覺效果和動畫
- ✅ 模組化組件設計
- ✅ 完整的類型定義
- ✅ 可擴展的架構設計
- ✅ 優秀的用戶體驗

這個 Dashboard 完全按照 Twin3 Passport PRD 的要求構建，提供了一個現代化、功能完整、視覺吸引人的用戶界面。
