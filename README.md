# 网站项目

一个基于 HTML/CSS/JavaScript 的静态网站项目，展示多个主题页面。

## 项目结构

```
website/
├── css/                    # 样式文件
│   ├── base/              # 基础样式
│   │   ├── reset.css      # 重置样式
│   │   ├── typography.css # 排版样式
│   │   └── variables.css  # CSS 变量
│   ├── components/        # 组件样式
│   │   ├── buttons.css    # 按钮样式
│   │   ├── decorations.css# 装饰元素
│   │   ├── logo.css       # Logo 样式
│   │   └── qrcode.css     # 二维码样式
│   ├── effects/           # 特效样式
│   │   ├── animations.css # 动画效果
│   │   ├── background.css # 背景效果
│   │   └── particles.css  # 粒子效果
│   ├── layout/            # 布局样式
│   │   └── container.css  # 容器布局
│   └── pages/             # 页面样式
│       ├── cards.css      # 卡片页样式
│       ├── detail.css     # 详情页样式
│       ├── home.css       # 首页样式
│       └── responsive.css # 响应式样式
├── js/                    # JavaScript 文件
│   ├── modules/           # 模块
│   │   ├── animations.js  # 动画模块
│   │   ├── interactions.js# 交互模块
│   │   ├── page-transitions.js # 页面过渡
│   │   └── particles.js   # 粒子效果
│   └── main.js            # 主入口
├── images/                # 图片资源
├── index.html             # 首页
├── course.html            # 课程页面
├── nest.html              # Nest 页面
├── spot.html              # Spot 页面
└── yummy.html             # Yummy 页面
```

## 页面说明

- **index.html** - 网站首页
- **course.html** - 课程展示页面
- **nest.html** - Nest 主题页面
- **spot.html** - Spot 主题页面
- **yummy.html** - Yummy 主题页面

## 本地启动

### 方式一：Python 内置服务器（推荐）

```bash
# Python 3
python -m http.server 8080

# 然后在浏览器访问
http://localhost:8080
```

### 方式二：Node.js http-server

```bash
# 安装 http-server
npm install -g http-server

# 启动服务
http-server -p 8080

# 访问
http://localhost:8080
```

### 方式三：VS Code Live Server

在 VS Code 中安装 Live Server 插件，右键点击 HTML 文件选择 "Open with Live Server"。

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式与动画
- **JavaScript** - 交互逻辑
- **模块化** - 按功能模块组织代码

## 特性

- 响应式设计，适配多种设备
- 丰富的动画效果
- 页面过渡动画
- 粒子背景效果
- 模块化 CSS 架构

## 浏览器支持

- Chrome / Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
