# 开发者导航站

一个简洁、轻量级的开发者资源导航网站，为网站开发者提供精选工具与资源。

## 主要功能

- **分类导航**：按照需求调研、上站工具、竞品调研、上站模板和资讯五大类别组织资源
- **搜索功能**：快速查找所需工具和资源
- **响应式设计**：适配桌面和移动设备
- **简洁界面**：专注于内容，提供良好的用户体验

## 快速开始

1. 克隆或下载此仓库
2. 在本地使用浏览器打开 `index.html` 文件
3. 或者将文件部署到任何静态网站托管服务（GitHub Pages、Vercel、Netlify等）

## 技术栈

- 纯原生技术：HTML + CSS + JavaScript
- 无需任何构建工具或后端服务
- 使用Font Awesome图标库

## 自定义

如果你想添加或修改导航资源，只需编辑 `script.js` 文件中的 `sitesData` 数组：

```javascript
{
    title: "网站名称",
    url: "https://example.com",
    description: "网站描述",
    category: "分类" // research, tools, competitor, templates, info
}
```

## 项目结构

- `index.html` - 主页面HTML结构
- `styles.css` - 所有样式定义
- `script.js` - 网站数据和交互功能

## 许可

MIT许可证 - 详情请见LICENSE文件 