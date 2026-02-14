# soul-portrait

角色画像生成器（随机无限版）—— 基于七维人格问卷生成灵魂画像，支持部署到 GitHub Pages。

## 技术栈

- **Vite** + **React 18** + **TypeScript**
- 无 UI 库，纯 CSS（毛玻璃、渐变、动画）

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开 http://localhost:5173

## 构建与预览

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

1. 仓库 **Settings → Pages**：Source 选择 **GitHub Actions**。
2. 推送 `main` 分支后，Actions 会自动构建并部署。
3. 访问地址：`https://<你的用户名>.github.io/soul-portrait/`

## 项目结构

- `src/App.tsx` - 主应用与画像生成逻辑
- `src/components/Quiz.tsx` - 分页问卷与滑块
- `src/components/Result.tsx` - 画像结果展示
- `src/data/questions.ts` - 七维题目数据
- `src/data/textPool.ts` - 画像文案池
