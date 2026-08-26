import type { SiteContent } from '../types';

const img = (prompt: string, size = 'landscape_4_3') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt,
  )}&image_size=${size}`;

export const defaultContent: SiteContent = {
  site: {
    name: 'Portfolio',
    logoText: 'PX.',
    footerText: '© 2026 · 用设计解决问题',
  },
  hero: {
    eyebrow: 'UI / UX DESIGNER · INTERACTION',
    title: '你好，我是品萱。\n一名专注于体验细节的 UI/UX 设计师。',
    subtitle:
      '聚焦移动端产品界面、交互设计与设计系统，用清晰的层级、克制的视觉和细腻的微交互，把复杂的问题变简单。',
    ctaPrimary: '查看作品',
    ctaSecondary: '关于我',
    slides: [
      {
        id: 's1',
        image: img(
          'Clean minimal mobile banking app UI design mockup on soft light gray background, floating phone screens showing dashboard with cards and charts, modern fintech interface, white and blue color scheme, professional product shot, soft shadows, high quality',
        ),
        title: '轻氧金融 APP',
        subtitle: '移动端 · 金融产品体验重构',
        link: '/cases/case-1/index.html',
      },
      {
        id: 's2',
        image: img(
          'Minimal tea culture mini program interface design, elegant mobile UI screens with soft beige and green tones, e-commerce product pages, clean typography, floating iPhone mockups on light background, professional UI portfolio presentation',
        ),
        title: '山月茶事小程序',
        subtitle: '小程序 · 新中式茶饮电商',
        link: '/cases/case-2/index.html',
      },
      {
        id: 's3',
        image: img(
          'Design system component library presentation, UI kit with buttons cards color palette typography scale organized in clean grid, blue and white design tokens, Figma style interface documentation, minimal professional layout on light gray background',
        ),
        title: 'Nebula 设计系统',
        subtitle: '设计系统 · 组件库与规范',
        link: '/cases/case-3/index.html',
      },
    ],
  },
  home: {
    featuredEyebrow: 'SELECTED WORKS',
    featuredTitle: '精选案例',
    featuredDesc: '四个完整项目，覆盖 APP、小程序、设计系统与交互动效。',
    introTitle: '设计于我，是在约束中寻找最优解。',
    introText:
      '从业五年，我持续在 C 端产品与工具型产品之间穿梭，习惯从用户路径与业务目标出发，用原型验证想法，用系统沉淀效率。我相信好的界面是“看不见设计”的——信息自然流动，操作顺理成章。',
    introCta: '了解更多',
  },
  worksPage: {
    title: '全部作品',
    description: '每一个项目都是一次完整的设计旅程：从问题定义到方案落地。',
  },
  about: {
    name: '品萱',
    role: 'UI/UX 设计师 · 交互设计',
    avatar: img(
      'Professional portrait of a young Asian female UI designer in a bright minimal studio, soft natural light, clean white background, friendly confident expression, modern casual style, high quality photography',
      'square',
    ),
    bio: [
      '我是一名base 在深圳的 UI/UX 设计师，目前专注于移动端产品体验与设计系统建设。',
      '过去几年里，我先后负责过金融、电商与效率工具类产品的主线设计，擅长在模糊的需求中建立信息架构，也享受把一个按钮的反馈打磨到“刚刚好”的过程。',
      '工作之外，我持续关注交互细节与动效表现，偶尔写设计复盘，相信长期主义。',
    ],
    skills: [
      '交互设计',
      'UI 设计',
      '设计系统',
      'Figma',
      'Sketch',
      'Principle',
      'ProtoPie',
      '用户研究',
      '设计走查',
      'AIGC 辅助设计',
    ],
    timeline: [
      {
        id: 't1',
        period: '2023 — 至今',
        title: '高级 UI/UX 设计师',
        org: '某科技公司 · 体验设计部',
        description: '负责核心 APP 的体验迭代与设计系统搭建，推动组件化落地。',
      },
      {
        id: 't2',
        period: '2021 — 2023',
        title: 'UI 设计师',
        org: '某互联网公司 · 电商业务线',
        description: '主导小程序商城从 0 到 1 的视觉与交互设计。',
      },
      {
        id: 't3',
        period: '2017 — 2021',
        title: '视觉传达设计 · 本科',
        org: '某美术学院',
        description: '系统学习版式、色彩与品牌设计，大三起转入交互方向。',
      },
    ],
  },
  contact: {
    title: '联系我',
    description: '无论是工作机会、项目合作，还是单纯想聊聊设计，都欢迎来信。',
    email: 'hello@pinxuan.design',
    wechat: 'pinxuan_design',
    socials: [
      { id: 'so1', label: 'Behance', url: 'https://www.behance.net/' },
      { id: 'so2', label: 'Dribbble', url: 'https://dribbble.com/' },
      { id: 'so3', label: '站酷', url: 'https://www.zcool.com.cn/' },
    ],
  },
  projects: [
    {
      id: 'p1',
      title: '轻氧金融 APP',
      subtitle: '让记账和理财像呼吸一样轻',
      category: 'APP 设计',
      year: '2025',
      tags: ['移动端', '金融产品', '体验重构', '设计系统'],
      description:
        '对一款理财工具的主路径进行信息架构重构：合并冗余入口、重写资产总览的首屏层级，并建立统一的卡片语言。改版后核心路径步长缩短，新用户上手成本显著降低。',
      cover: img(
        'Clean minimal mobile banking app UI design mockup on soft light gray background, floating phone screens showing dashboard with cards and charts, modern fintech interface, white and blue color scheme, professional product shot, soft shadows, high quality',
      ),
      link: '/cases/case-1/index.html',
      featured: true,
    },
    {
      id: 'p2',
      title: '山月茶事小程序',
      subtitle: '新中式茶饮的线上仪式感',
      category: '小程序',
      year: '2024',
      tags: ['小程序', '电商', '品牌视觉'],
      description:
        '从 0 到 1 完成茶饮品牌小程序的购物体验设计：以“山、月、茶”三个意象构建视觉系统，用节气运营位衔接内容与转化，下单路径压缩到三步以内。',
      cover: img(
        'Minimal tea culture mini program interface design, elegant mobile UI screens with soft beige and green tones, e-commerce product pages, clean typography, floating iPhone mockups on light background, professional UI portfolio presentation',
      ),
      link: '/cases/case-2/index.html',
      featured: true,
    },
    {
      id: 'p3',
      title: 'Nebula 设计系统',
      subtitle: '一套会生长的组件语言',
      category: '设计系统',
      year: '2024',
      tags: ['Design Token', '组件库', 'Figma', '规范文档'],
      description:
        '为多端业务搭建统一设计系统：从 Design Token 分层、60+ 核心组件到配套使用规范与走查清单，设计与研发的还原纠纷下降了约七成。',
      cover: img(
        'Design system component library presentation, UI kit with buttons cards color palette typography scale organized in clean grid, blue and white design tokens, Figma style interface documentation, minimal professional layout on light gray background',
      ),
      link: '/cases/case-3/index.html',
      featured: true,
    },
    {
      id: 'p4',
      title: '微交互动效集',
      subtitle: '藏在细节里的生命力',
      category: '动效',
      year: '2023',
      tags: ['交互动效', 'Lottie', 'Principle', '情感化设计'],
      description:
        '一组针对移动端高频场景的微交互方案：加载、转场、成功反馈与空状态。用 150–300ms 的克制动效，让状态变化“被看见但不被打扰”。',
      cover: img(
        'Mobile app micro interaction motion design showcase, smooth animation frames of UI transitions and loading states, playful toggle switches and success checkmark animations, blue accent on white interface, clean minimal presentation',
      ),
      link: '/cases/case-4/index.html',
      featured: true,
    },
  ],
};
