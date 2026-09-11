# UI 作品集网站从零到一完整总结

> 项目：王颖 UI/UX 作品集网站  
> 域名：wangying.online（备案中）  
> 临时访问：https://ui-design-d5guvqrft29296773-1465022720.tcloudbaseapp.com

---

## 一、网站是怎么做的

### 1. 技术栈

| 层级 | 技术 |
|---|---|
| 框架 | React 18 |
| 构建工具 | Vite |
| 类型 | TypeScript |
| 样式 | Tailwind CSS |
| 路由 | React Router DOM |
| 部署 | 腾讯云 CloudBase 静态网站托管 |

### 2. 项目结构

```
portfolio/
├── src/
│   ├── components/        # 公共组件
│   │   ├── Carousel.tsx      # 首页轮播图（已隐藏）
│   │   ├── ProjectCard.tsx   # 作品卡片
│   │   ├── SmartImage.tsx    # 图片懒加载组件
│   │   └── Reveal.tsx        # 滚动显示动画
│   ├── pages/             # 页面
│   │   ├── Home.tsx          # 首页
│   │   ├── Works.tsx         # 作品列表
│   │   ├── About.tsx         # 关于我（含头像）
│   │   └── ProjectDetail.tsx # 作品详情
│   ├── data/
│   │   └── defaultContent.ts # 默认网站内容数据
│   ├── context/
│   │   └── ContentContext.tsx # 内容上下文
│   └── types.ts           # TypeScript 类型定义
├── public/
│   └── cases/             # 4 个独立作品案例网页
│       ├── case-1/
│       ├── case-2/
│       ├── case-3/
│       └── case-4/
├── dist/                  # 构建产物
├── vite.config.ts
├── tailwind.config.js
├── package.json
└── portfolio-content.json # 管理后台导出的内容
```

### 3. 核心设计

- 整体风格：极简、留白、卡片式、圆角
- 主色调：浅色背景 + 强调色
- 响应式：桌面 / 平板 / 手机三端适配
- 动效：滚动渐显、卡片悬停、图片缩放
- 图片比例：轮播图和作品卡片统一为 21:9（桌面）/ 16:9（移动端）

### 4. 内容管理

- 网站内容集中在 `src/data/defaultContent.ts`
- 提供了 JSON 文件 `portfolio-content.json` 用于批量更新
- 支持修改：首页文案、作品列表、关于页信息、轮播图、标签等

---

## 二、网站是怎么部署到腾讯云的

### 1. 选择腾讯云 CloudBase

- 进入腾讯云控制台 → 云开发 CloudBase
- 创建环境：`ui-design-d5guvqrft29296773`
- 开通「静态网站托管」服务

### 2. 本地构建

```bash
cd /workspace/portfolio
npm install
npm run build
```

构建产物输出到 `dist/` 目录。

### 3. 使用 CloudBase CLI 登录

```bash
npx tcb login --apiKeyId <SecretId> --apiKey <SecretKey>
```

### 4. 部署到 CloudBase

```bash
npx tcb hosting deploy dist/ -e ui-design-d5guvqrft29296773
```

部署成功后，腾讯云会分配一个默认访问地址：

```
https://ui-design-d5guvqrft29296773-1465022720.tcloudbaseapp.com
```

### 5. 后续更新流程

每次修改内容后：

```bash
npm run build
npx tcb hosting deploy dist/ -e ui-design-d5guvqrft29296773
```

---

## 三、自定义域名与备案

### 1. 购买域名

- 平台：腾讯云 DNSPod
- 域名：`wangying.online`
- 首年价格：¥11

### 2. 域名实名认证

- 提交身份证信息
- 等待「域名命名审核」通过

### 3. ICP 备案（已完成）

因为使用腾讯云国内服务，必须 ICP 备案：

1. 购买腾讯云轻量应用服务器作为备案资源
2. 进入 https://console.cloud.tencent.com/beian
3. 提交首次备案申请
4. 等待腾讯云电话核实
5. 管局审核（1-20 个工作日）
6. 备案通过，获得备案号

### 4. 绑定自定义域名（待完成）

备案通过后：

1. 打开 CloudBase → 静态网站 → 域名管理
2. 添加域名 `wangying.online`
3. DNSPod 添加 CNAME 解析
4. 配置 SSL 证书
5. 等待 DNS 生效
6. 通过 `https://wangying.online` 访问

### 5. 公安联网备案（待完成）

ICP 备案通过后 30 天内，需完成公安联网备案。

---

## 四、已完成的优化

1. 移除 Google Fonts
2. 首屏轮播图第一张预加载
3. 非首屏图片延迟加载
4. 精选案例卡片封面和作品列表卡片比例统一为 21:9
5. 分类标签从图片上移到了文字区域
6. 隐藏首页轮播图
7. 4 个作品案例打包放入 `public/cases/`，支持点击跳转

---

## 五、后续计划

### 短期

1. 完成 `wangying.online` 自定义域名绑定
2. 完成公安联网备案
3. 在网站底部添加 ICP 备案号和公安网备号
4. 恢复 `/workspace/portfolio` 源码目录（当前缺失）

### 中期：升级为个人主站

规划结构：

```
wangying.online/
├── /              # 个人主页
├── /ui/           # UI 作品集
├── /notes/        # 学习记录
├── /interests/    # 兴趣爱好
├── /about/        # 关于我
└── /now/          # 现在在做什么
```

参考案例：
- Maggie Appleton（数字花园）
- Bruno Simon（交互式作品集）
- Josh Comeau（交互式博客）
- anniew.xyz（简洁数字名片）

### 长期

- 持续发布学习笔记
- 增加「设计系统」公开页
- 增加 /uses 工具箱页面
- 增加 Now 页面
- 探索访客留言墙等互动形式

---

## 六、重要管理链接

| 资源 | 链接 |
|---|---|
| CloudBase 控制台 | https://console.cloud.tencent.com/tcb |
| 轻量服务器 | https://console.cloud.tencent.com/lighthouse |
| 域名管理 | https://console.cloud.tencent.com/domain |
| DNS 解析 | https://console.cloud.tencent.com/cns |
| ICP 备案 | https://console.cloud.tencent.com/beian |
| SSL 证书 | https://console.cloud.tencent.com/ssl |
| 工信部查询 | https://beian.miit.gov.cn/ |

---

## 七、注意事项

1. 源码目录 `/workspace/portfolio` 当前不在工作区，如需修改网站内容，需先恢复源码
2. 服务器到期后续费，否则备案可能失效
3. 免费 SSL 证书有效期 90 天，CloudBase 会自动续期
4. 每次修改内容后都要重新 build + deploy
