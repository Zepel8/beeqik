# Beeqik 站点 — 项目上下文文档

> 用途:供下一次对话快速恢复完整上下文。包含已完成内容、设计哲学、颜色系统、关键决策、待办事项。

---

## 一、项目一句话

**单页 Next.js 14 站点**,服务于 Beeqik(中国采购代理服务,目标客户是海外 B2B 买家)。基于 [`MVP Website Implementation Plan.md`](MVP%20Website%20Implementation%20Plan.md) 文档构建,目标是**快速上线 + 验证 SEO + 验证询盘**,而非完整功能平台。

---

## 二、技术栈

- **Next.js 14.2.15**(App Router,全站静态预渲染)
- **TypeScript 5.4** + **Tailwind 3.4**
- **Web3Forms**(免费表单收信,key 已验证有效)
- **Vercel** 计划部署目标
- 域名规划:`beeqik.com`

无后端、无数据库、无 CMS — 完全符合 MVP 规划文档"不要建造"的原则。

---

## 三、目录与关键文件

```
q:\beeqik\
├── app/
│   ├── layout.tsx              # SEO metadata + JSON-LD + GA4 占位
│   ├── page.tsx                # 单页主体,组装 5 个 section
│   ├── globals.css             # 全局样式 + scroll-margin-top
│   ├── sitemap.ts              # 自动生成 sitemap.xml
│   ├── robots.ts               # 自动生成 robots.txt
│   ├── icon.png                # 浏览器 tab favicon(自动注册)
│   ├── apple-icon.png          # iOS 主屏图标
│   └── opengraph-image.tsx     # 动态生成的 1200×630 社交分享卡(用户提供的静态 PNG 已删除)
├── components/
│   ├── Nav.tsx                 # 顶部导航,使用 logo-main.png
│   ├── Hero.tsx                # H1 + 副标 + 双 CTA + 4 trust highlights
│   ├── WhyBeeqik.tsx           # 创始人故事 + 4 advantage 卡
│   ├── SupplierNetwork.tsx     # 6 张产品卡容器
│   ├── ProductCard.tsx         # 单卡组件,支持 image / 纯色占位 / highlightTags 高亮
│   ├── HowItWorks.tsx          # 5 步流程
│   ├── Contact.tsx             # 表单(走 Web3Forms 或 mailto fallback)
│   └── Footer.tsx              # 使用 logo-footer.png
├── content/
│   ├── site.ts                 # 联系方式常量(WhatsApp / 邮箱 / 微信)
│   └── products.ts             # 6 张产品卡数据 + Product 接口定义
├── public/
│   ├── logo-main.png           # 408×127,Nav 用,深色版
│   └── logo-footer.png         # 357×85,Footer 用,纯黄白版
├── tailwind.config.ts          # 3 个色板:brand / accent / forest
├── .env.local                  # Web3Forms key + GA_ID(gitignored)
├── .env.example                # 示例配置
└── README.md                   # 安装/部署指南
```

---

## 四、设计哲学(**最重要,不要忘记**)

用户在多轮讨论后,确立了以下品牌定位逻辑,**所有视觉决定都必须服从于此**:

### 4.1 核心命题

> "我提供的是服务,信赖是第一位的。**兴奋反而是危险的**。"

- 客户决策周期长、客单价高(动辄 $5 万+ 的集装箱货)
- 鲜艳色彩在这种心理状态下**反向触发警觉**("这家是不是太想成单了?")
- 克制 = 专业 = 信赖

### 4.2 品牌架构 — "活泼 logo + 安静环境"

> "我的 logo 是黄色蜜蜂,已经注入活泼元素。所以网站可以做安静的对位。"

参照系:**Heinz / Bloomberg / Penguin Books** —— 一个鲜明商标 + 严肃克制环境,**对比本身就是品牌张力**。

**严禁**:用整个网页的颜色去强化 logo 的"活泼"。logo 本身已经够亮。

### 4.3 色彩纪律

> "未来 1-2 个非常特殊的 chip 才会用黄色。"

**黄色作为稀缺资源**。每出现一次,都必须**有特定信号意图**(featured / 重大卖点)。日常陈述、信息描述、装饰边框 — **不要用黄色**。

### 4.4 颜色必须"在系统里有依据"

用户拒绝任何"不在 brand / accent / forest 三个色板里的孤立色"。增色之前必须问:这个色和已有色板有什么色相关系?

---

## 五、颜色系统

### 5.1 三个 Tailwind 色板(在 `tailwind.config.ts`)

```ts
brand: { 50-500: 沙绿(色相 76°), 600-950: 暗黄褐(色相 49°)}
  // 50-500 是温和过渡色(背景、边框、辅助文字)
  // 600-950 是深色调(原计划 H1 用,但偏黄褐被否)
  // 注:500→600 有色相跳跃(76°→49°),这是已知的妥协

accent: { 50-950: 黄色系(色相 49°)}
  // 主色:#fed72a(logo 黄)在 accent-400 附近
  // 用于:logo 视觉延伸(已大幅减少)

forest: { 50-950: 绿橄榄(色相 76°)}
  // 用户后期添加,核心是 forest-600 = #597f00
  // 设计逻辑:与 brand 50-500 同色相(76°),但饱和度更高
  // 修正了 brand 自身 500→600 的色相跳跃问题
  // 用途:H1 强调词等"安静的内容强调"
```

### 5.2 当前各位置颜色映射

| 位置 | 颜色 | 文件 |
|---|---|---|
| H1 强调词"Without the Alibaba Headache" | `text-forest-600` (#597f00) | Hero.tsx |
| Hero 顶部 radial 光晕 | `rgba(254,215,42,0.20)`(黄,氛围) | Hero.tsx |
| Hero trust badge 圆点 | accent 黄 | Hero.tsx |
| "From the founder" 小标 | `text-accent-700` 深琥珀 | WhyBeeqik.tsx |
| 故事区 5 个 ✓ checkmark | `text-accent-500` 亮黄 | WhyBeeqik.tsx |
| 故事区右侧 4 advantage 图标方块 | `bg-brand-50 text-brand-600`(沙绿) | WhyBeeqik.tsx |
| 产品卡 hover 边框 | `hover:border-brand-300` 沙绿 | ProductCard.tsx |
| 产品 tag chips(默认) | `border-brand-300 text-brand-700` outline | ProductCard.tsx |
| 产品 tag chips(highlightTags) | `bg-accent-200` 黄填充(预留,**目前无产品启用**) | ProductCard.tsx |
| HowItWorks 步骤号 01-05 | `text-accent-600`(用户手动改回的) | HowItWorks.tsx |
| 主 CTA 按钮(Hero "Get a Free Quote", Contact "Send Inquiry") | `bg-slate-900` 实心 | Hero.tsx, Contact.tsx |
| Nav WhatsApp 按钮 | `border-slate-900` 描边 | Nav.tsx |
| Footer 底色 | `bg-slate-900` | Footer.tsx |

### 5.3 黄色"使用脉络"原则

```
✅ 允许:logo / OG 图 / Hero 氛围光晕 / 极少数 H1 重点
✅ 允许:HowItWorks 步骤号(用户保留判断)
✅ 允许:故事区 ✓ 和小标(用户保留)
⚠️ 预留:产品卡 highlightTags(将来标记 1-2 个特殊 chip)
❌ 禁止:卡片边框 / 默认 tag chips / 普通图标 / hover 强调
```

**黄色出现的总数应该可以用一只手数出来**。

---

## 六、Product 数据结构(支持未来扩展)

```ts
// content/products.ts
export interface Product {
  slug: string;
  name: string;
  description: string;
  location: string;
  moq?: string;
  leadTime?: string;
  tags: ProductTag[];
  highlightTags?: ProductTag[];  // ⭐ 列在这里的 tag 会以黄填充呈现,其他用 brand outline
  image?: string;                 // 有图就显示图,没图显示纯色占位 + 首字母
  bg: string;                     // 占位色,例如 "bg-slate-500"
}
```

**目前 6 张产品卡都没有启用 highlightTags**(全部默认 outline)。要标记某 tag 为 featured 黄色,只需:

```ts
{
  slug: "fitfaith-oximeters",
  // ...
  tags: ["Sample Available", "Custom Packaging", "Low MOQ", "Export Experience"],
  highlightTags: ["Sample Available"],  // ← 加这一行,Sample Available 变黄填充
}
```

---

## 七、联系方式与外部服务

### 7.1 联系方式(`content/site.ts`)

- WhatsApp / Tel / WeChat: `+86 186 6591 8576`
- Email: `lu@beeqik.com`
- Domain: `beeqik.com`

### 7.2 Web3Forms

- **Access key**:`b4e30777-7b0a-4a8d-a148-08f9a4607ee0`(已验证有效,在 `.env.local`)
- 已发测试邮件至 `lu@beeqik.com` 验证通过
- 注意:Web3Forms 拒绝纯 server-side 请求(无 Origin 头),浏览器端正常
- 表单 fallback:无 key 时自动 mailto

### 7.3 GA4

- `NEXT_PUBLIC_GA_ID` 占位但**未配置**(用户尚未提供测量 ID)
- 已埋 `data-cta` 属性供后续 GTM/GA4 配事件:`hero-quote` / `hero-whatsapp` / `nav-whatsapp` / `contact-whatsapp` / `contact-email` / `form-submit`
- 表单提交成功时已经在 `Contact.tsx` 里调用了 `gtag('event', 'inquiry_submit')`

### 7.4 OG 分享卡(动态生成)

- `app/opengraph-image.tsx` 用 Next.js `ImageResponse` API 动态渲染 1200×630
- 用户原本上传过静态 PNG,被替换成动态版本
- **注意**:动态版本目前用 emoji 🐝 + 文字,**没有用真实 logo 文件** —— 因为 ImageResponse 需要从 fs 读图或 base64 嵌入,做了简化。如果用户后续想用真实 logo,需要在文件里改成 fs.readFileSync 方案

---

## 八、Git / 部署状态

### 8.1 当前 Git 状态(对话结束时)

- 本地仓库:`q:\beeqik`
- 远程:`origin = https://github.com/Zepel8/beeqik`(已配置)
- 分支:`main`
- 已 commit:`3ab882f mvp` —— **只是最初的规划文档**
- **所有代码都还没 commit、没 push**

### 8.2 待执行 push 流程(下次对话首要任务)

```bash
# 1. 添加所有文件
git add .

# 2. 提交
git commit -m "Build single-page MVP site

- Next.js 14 + Tailwind, fully static
- 5 sections per MVP plan: Hero / WhyBeeqik / SupplierNetwork / HowItWorks / Contact
- Web3Forms-powered contact form with mailto fallback
- 3 color palettes: brand (sage), accent (logo yellow), forest (#597f00 trust green)
- Brand logo wired in Nav and Footer; favicon, apple-icon, dynamic OG image
- 6 products with brand-outline tags + highlightTags hook for future featured chips"

# 3. 推送
git push -u origin main
```

### 8.3 Vercel 部署待办

- 还没在 Vercel 创建项目
- 流程:vercel.com → New Project → import `Zepel8/beeqik` → Deploy
- **环境变量必须在 Vercel 设置**:
  - `NEXT_PUBLIC_WEB3FORMS_KEY = b4e30777-7b0a-4a8d-a148-08f9a4607ee0`
  - `NEXT_PUBLIC_GA_ID = ` (待用户提供)
- 自定义域名:`beeqik.com` + `www.beeqik.com`

### 8.4 上线后 SEO 待办

- Google Search Console 验证站点 + 提交 `https://beeqik.com/sitemap.xml`
- 测试:Facebook Debugger / LinkedIn Post Inspector / Twitter Card Validator
- WhatsApp 链接预览测试(把 `https://beeqik.com` 发给自己看卡片)

---

## 九、开发服务器

- 命令:`npm run dev`(后台运行在 task `bctaivghe`,但很可能已退出 — 重启用同命令)
- 默认端口:`3000`
- 端口被占用时:先 `netstat -ano | grep :3000` 找 PID,`taskkill //F //PID <pid>`
- 改 Tailwind 配置或添加新 class:可能需要 `rm -rf .next` 强制刷新缓存
- 浏览器端调试:DevTools → Network → 勾选 Disable cache,然后 `Ctrl+Shift+R`

---

## 十、6 张产品卡当前状态

| 产品 | 描述 | 占位色 | 注意 |
|---|---|---|---|
| Fitfaith Oximeters | Stable and reliable, CE/FDA certified | bg-slate-500 | |
| DIDA Musical Instruments | Quality musical instruments with factory-direct pricing | bg-stone-500 | ⚠️ 用户原始描述是分类列表,我做了改写,**用户上线前可能想确认** |
| AIDPEK Outdoor Power Stations | Sine wave AC output, stable and without damage | bg-zinc-700 | |
| Electronic Components | High quality and stable supply | bg-slate-700 | |
| Flashlights | High lumen and long lasting, customization supported | bg-stone-600 | |
| Home Care Series | Factory direct supply with high cost performance | bg-zinc-500 | |

所有产品图都是纯色占位,等用户后期替换为真实产品照片(放到 `public/products/<slug>.webp` 然后在 `products.ts` 加 `image: "/products/<slug>.webp"`)。

---

## 十一、被否决/反复讨论过的方案(避免下次重提)

| 方案 | 否决原因 |
|---|---|
| 整个 brand 系换成 teal / emerald / indigo | 用户已在 tailwind.config 自定义了沙绿,不要再改 |
| H1 用 yellow 高亮笔块(`bg-accent-300`) | 未来 Hero 会加背景图,黄色块和图片打架 |
| H1 用 `text-accent-500` 亮黄 | 对比度 1.7:1,糊 |
| H1 用 `text-accent-700` 深琥珀 | 用户感觉沉,效果不如亮色 |
| H1 用 `text-brand-600` 暗橄榄 | 用户感觉传统、保守 |
| 产品卡 hover 用 `accent-400` 黄边 | 6 卡同时闪黄过吵 |
| 产品 tag chips 全部黄填充 | 26 个色块通胀,稀缺性归零 |
| WhyBeeqik 4 advantage 图标用 accent-100 | 信息层不需要抢注意力 |
| Footer logo 用 main 版 | 深色背景看不清,改用纯黄 footer 版 |

---

## 十二、用户偏好(沟通风格)

- 中文回复,直接、简洁,不要堆砌
- 喜欢看到**评估表 + 决策选项**,不喜欢直接被告知"我推荐 X"而无对比
- **质疑值得**:用户多次纠正我的判断(如 #597f00 isolation 论),展示了独立设计思维
- 倾向"先评估再动手",别仓促下手
- **重要**:用户用术语精准(色相、对比度、HSL),可以用专业词,不必通俗化

---

## 十三、下次对话快速启动 checklist

```
[ ] 检查 git 状态:git status -s
[ ] 启动 dev server:npm run dev
[ ] 浏览器打开:http://localhost:3000
[ ] 强制刷新清缓存:Ctrl+Shift+R
[ ] 查看产品图占位是否被替换
[ ] 查看真实 logo 是否已经放进 OG 图
[ ] 查看 GA4 ID 是否已经填入 .env.local
[ ] 查看是否已 push 到 GitHub + Vercel 部署
```

---

_文档生成时间:2026-05-10_
_所有路径以 `q:\beeqik\` 为根_
