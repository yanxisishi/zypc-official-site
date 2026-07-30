# 智邮普创工作室官网

基于 Astro 构建的纯静态官网。内容以 Markdown 和 JSON 维护，不需要数据库或后台服务。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:4321`。

生产构建与预览：

```bash
npm run check
npm run build
npm run preview
```

## 常用内容位置

- 文章：`src/content/articles/`
- 成员：`src/data/members.json`
- 荣誉：`src/data/honors.json`
- 常驻纳新群、二维码与阶段状态：`src/data/recruitment.json`
- 团队名称、地点、邮箱：`src/data/site.json`
- 图片：`public/images/`

详细操作见 [CONTENT_GUIDE.md](./CONTENT_GUIDE.md)，宝塔部署见 [DEPLOYMENT_BT.md](./DEPLOYMENT_BT.md)。
