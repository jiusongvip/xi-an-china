---
keyword: xi an china
plan_date: 2026-08-08
version: 2.0
references:
  - zhangjiajie-national-park
  - best-time-to-visit-china
  - dujiangyan-panda-base
  - forbidden-city-tour
  - 5000-year-old-chinese-tomb
---

# xi an china — 建站全流程框架 v2.0

> 基于四个同类参考项目的源码分析升级，补充组件级细节、交互工具规格和内容架构。

---

## 一、参考项目模式提炼

### 1.1 zhangjiajie-national-park（直接对标）

**源码特征**：
- Astro SSG，单 Layout（BaseLayout.astro），所有页面通过 props 传 title/description/schema
- 组件：TripPlanner.astro（纯 JS 交互，无 React），ParkMap.astro，SectionHeader.astro
- 首页 1250 行：Hero → Quick Facts 8格 → What Is段落 → At a Glance 3卡 → ParkMap → TripPlanner → Season Picker → Beyond Park attractions → Itineraries → FAQ → Recently Updated → Greater Route → Author → Timeline → CTA
- 行程页（itinerary.astro）：按天拆 schedule，每小时一个 table row，精确到分钟
- 每个景点独立页（avatar-mountains.astro 等）
- E-E-A-T 信号：20+ 次访问时间线 + 价格验证日期 + "无 AI 生成内容"声明
- TripPlanner 交互逻辑：三问题（天数/季节/兴趣）→ 个性化推荐页面

### 1.2 best-time-to-visit-china（交互最丰富）

**源码特征**：
- React Islands：ChinaMap.tsx，ComparisonTool.tsx，CostChart.tsx，HotelComparison.tsx，ScrollReveal.tsx
- 数据层：data/weather.ts（12个月温度/雨量/人群数据），data/regions.ts
- 12月 image wall 网格 → ComparisonTool 侧边对比 → CostChart SVG柱状图 → Crowd Calendar
- Daydream Stories：4段沉浸式场景描写 with 天气数据卡片
- Trust Signals：10年天气数据 + 航班价格追踪 + 20+ 城市亲历

### 1.3 dujiangyan-panda-base（小而精的单页站）

**源码特征**：
- QuickInfoCards：2x4 grid，含 Status 状态（alert 黄色高亮）
- ContentCard：可复用链接卡片组件（icon + title + desc + 箭头）
- Faq：可复用 accordion 组件

### 1.4 forbidden-city-tour（商业/预订向）

**源码特征**：
- tours.ts：完整数据模型（slug/name/category/priceFrom/rating/reviews/highlights/includes/excludes）
- Tour 卡片含星级/评论数/价格/预订链接
- Plan Your Visit 区域：Opening Hours / Ticket Prices / Getting There 三卡
- Nearby Attractions 编号列表（带距离标注）
- Where to Eat/Shop 标注距离+评语

---

## 二、站点架构升级

### 2.1 组件清单

| 组件 | 用途 | 参考来源 | 实现方式 |
|------|------|----------|----------|
| QuickFacts | 8格快速信息 | zhangjiajie | Astro 静态 grid |
| HeroSection | 全屏大图+标题+CTA | zhangjiajie | Astro + picture标签 |
| TripPlanner | 3步行程生成器 | zhangjiajie | Astro + 内联JS（无React依赖） |
| AttractionMap | 景点分布互动地图 | best-time ChinaMap改造 | React Island（client:visible） |
| ComparisonTool | 景点/季节对比器 | best-time ComparisonTool | React Island |
| CostChart | 旅行成本柱状图 | best-time CostChart | React Island（SVG） |
| ContentCard | 可复用链接卡片 | dujiangyan | Astro 组件 |
| FaqAccordion | FAQ折叠面板 | dujiangyan/zhangjiajie | Astro 组件 |
| DaydreamStories | 沉浸式场景描写 | best-time | Astro 静态内容 |
| TrustTimeline | E-E-A-T访问历史 | zhangjiajie | Astro 静态内容 |
| CrowdCalendar | 人群密度日历 | best-time | Astro 静态内容 |
| NearbyAttractions | 周边景点推荐 | forbidden-city | Astro 静态内容 |
| SeasonPicker | 四季切换展示 | zhangjiajie | Astro + 内联JS |

### 2.2 完整页面清单（30 页）

```
首页 (/) — xi an china, xian travel guide
├── 景点（12 页面）
│   ├── /attractions/ — xi an attractions
│   ├── /attractions/terracotta-warriors/ — terracotta warriors xian
│   ├── /attractions/city-wall/ — xian city wall
│   ├── /attractions/muslim-quarter/ — xian muslim quarter
│   ├── /attractions/big-wild-goose-pagoda/ — big wild goose pagoda
│   ├── /attractions/shaanxi-history-museum/ — shaanxi history museum
│   ├── /attractions/huaqing-pool/ — huaqing hot springs
│   ├── /attractions/bell-drum-tower/ — xian bell tower
│   ├── /attractions/han-yangling/ — han yangling mausoleum
│   ├── /attractions/mount-huashan/ — mount huashan hike
│   ├── /attractions/tang-paradise/ — tang paradise xian
│   └── /attractions/daming-palace/ — daming palace ruins
├── 工具（2 页面）
│   ├── /itinerary-planner/ — xian itinerary planner
│   └── /comparison/ — xian attractions comparison
├── 攻略（8 页面）
│   ├── /food/ — xi an food guide
│   ├── /transportation/ — xian transportation
│   ├── /itineraries/ — xian itinerary 3 days
│   ├── /best-time-to-visit/ — best time to visit xian
│   ├── /hotels/ — where to stay in xian
│   ├── /tickets/ — xian attraction tickets
│   ├── /day-trips/ — xian day trips from xi'an
│   └── /xian-chengdu-ancient-sites/ — xian chengdu route
├── 实用信息（3 页面）
│   ├── /faq/ — xian travel faq
│   ├── /china-sim-card-tourist/ — china sim card for tourists
│   └── /china-240-hour-transit-visa/ — china transit visa
├── 博客（4 页面）
│   ├── /blog/ — xian travel blog
│   ├── /blog/xian-4-seasons/ — xian in different seasons
│   ├── /blog/xian-hidden-gems/ — hidden gems in xian
│   └── /blog/terracotta-warriors-photography/ — photographing terracotta warriors
└── 基础页（3 页面）
    ├── /about/ — about us
    ├── /contact/ — contact
    └── /privacy/ — privacy policy
```

### 2.3 技术栈

| 层面 | 选择 | 对标项目 |
|------|------|----------|
| 框架 | Astro 5.x + SSG | 全部五个项目 |
| 样式 | Tailwind CSS | 全部项目 |
| 交互 | React Islands（仅需交互的组件） | best-time |
| 内容 | .astro 页面内联内容（无 CMS） | zhangjiajie, panda-base |
| 数据 | .ts 文件导出 objects | best-time (weather.ts), forbidden-city (tours.ts) |
| 部署 | Cloudflare Pages | 全部项目 |
| Schema | JSON-LD 内联 | 全部项目 |

---

## 三、首页组件级规格

### 3.1 Hero Section

图片: 西安城墙日落全景（hero-city-wall.webp）
H1: Discover Xi'an, China's Ancient Capital
副标题: Home of the Terracotta Warriors, best-preserved city wall, Silk Road starting point.
标签: Independent guide · Updated 2026
CTA: Plan Your Trip + Explore Attractions 双按钮
背景: gradient overlay from terracotta-900 to terracotta-700

### 3.2 Quick Facts 8格（stone-900 dark bg，对标 zhangjiajie）

| label | value | sub |
|-------|-------|-----|
| Chinese Name | 西安 (Xi'an) | "Western Peace" |
| Location | Shaanxi, China | Northwest China |
| History | 3,100+ years | 13 dynasties' capital |
| Population | 13 million | Largest in NW China |
| Silk Road | Starting Point | Since 2nd century BC |
| Nearest Airport | XIY | 40 min to city center |
| Best Season | Mar-May, Sep-Nov | Mild, low rain |
| Recommended | 3-5 days | For full experience |

### 3.3 What Is Xi'an — Featured Snippet Paragraph（对标 zhangjiajie）

大段描述文字：
- 一句话定义：UNESCO World Heritage / Silk Road starting point / Terracotta Warriors
- 详细历史：3100年建城、13朝古都、与罗马/雅典/开罗并称四大古都
- 地理描述：关中平原、秦岭北麓、渭河流域
- 现代描述：1300万人口、西北最大城市、一带一路枢纽
- 信任声明："All prices verified at site gates in 2026."

### 3.4 At a Glance 三卡（对标 zhangjiajie）

**卡1: Getting There**
- XIY 机场直飞航线列表
- Xi'an North Station 高铁信息
- 地铁线路指南
- 省钱技巧：Fly into Chengdu + train saves CNY 500-800

**卡2: Tickets & Costs**
- 兵马俑 ¥120 / 华清池 ¥120 / 城墙 ¥54
- 大雁塔 ¥40 / 钟鼓楼 ¥50 / 陕历博 Free（需预约）
- 华山 ¥160 + 索道 ¥80-140
- 日均预算：CNY 400-600 per person

**卡3: Top Districts**
- 碑林区：Inside the city wall, Bell Tower, Muslim Quarter
- 雁塔区：Big Wild Goose Pagoda, Shaanxi Museum, Tang Paradise
- 临潼区：Terracotta Warriors, Huaqing Pool (40 min east)
- 未央区：Han Yangling, Daming Palace ruins

### 3.5 TripPlanner 交互逻辑（纯JS，无React依赖，对标 zhangjiajie）

三个问题，每个四选一按钮：
Q1 How many days? [1 Day] [2 Days] [3 Days] [5+ Days]
Q2 When? [Spring] [Summer] [Autumn] [Winter]
Q3 Interest? [History] [Food] [Photography] [Family]

推荐数据结构（JS 内联）：
- history → 兵马俑早起入场 / 陕历博预约攻略 / 汉阳陵避人群 / 城墙傍晚骑行
- food → 回民街+洒金桥 / biangbiang面 / 羊肉泡馍 / 夜市路线
- photography → 城墙日落 / 兵马俑一号坑 / 大唐不夜城夜景 / 华山日出
- family → 城墙骑行 / 大雁塔喷泉 / 兵马俑雇讲解 / 曲江海洋馆

### 3.6 Season Picker（4季切换）

| 季节 | 温度 | 雨量 | 人群 | 推荐活动 |
|------|------|------|------|----------|
| Spring (Mar-May) | 12-24°C | 6-8天/月 | 3/5 | 青龙寺樱花, 城墙骑行 |
| Summer (Jun-Aug) | 25-35°C | 10-12天/月 | 4/5 | 华山避暑, 夜游大唐不夜城 |
| Autumn (Sep-Nov) | 10-22°C | 6-8天/月 | 3/5 | 兵马俑+红叶, 中秋赏月 |
| Winter (Dec-Feb) | -3-7°C | 2-3天/月 | 2/5 | 华清池温泉, 春节灯会 |

### 3.7 Attraction Deep Dive 卡片

12张卡片（对标 zhangjiajie "Beyond the Park"），每张含：
emoji + badge（Must See / Worth It / Hidden Gem）+ 标题 + 副标题 + 3 highlights + 链接

### 3.8 Daydream Stories（对标 best-time，4段沉浸叙事）

- 春天 4月 城墙：骑行14km，樱花，16°C
- 夏天 7月 回民街：夜市，羊肉串，biangbiang面
- 秋天 10月 兵马俑：金色阳光，第一批入场，零游客
- 冬天 1月 华清池：雪中温泉，-2°C，零人群

### 3.9 FAQ（10题，对标所有项目）

How much do tickets cost? / Best time to visit? / How to get to Xi'an? / One day enough? / English spoken? / How many days? / Where to stay? / Safe? / Need visa? / Day trip from Beijing?

### 3.10 Trust Timeline（对标 zhangjiajie，7年 E-E-A-T 信号）

2020-2026，逐年西安访问记录，左侧/右侧交替布局

### 3.11 Crowd Calendar（对标 best-time，8个时间段密度指示）

CNY 5/5 / Qing Ming 3/5 / Labor Day 4/5 / Dragon Boat 3/5 / Summer 4/5 / Mid-Autumn 3/5 / Golden Week 5/5 / Early Nov 1/5

### 3.12 Cost Chart（对标 best-time，SVG柱状图 React Island）

12个月 × 西安日均旅行花费（CNY），三色填充：<400 绿 / 400-500 琥珀 / >500 红

### 3.13 Learn More Hub（对标 best-time，8张 ContentCard）

Trip Planner / Attractions / Food / Transportation / Best Time / Hotels / Day Trips / FAQ

---

## 四、关键内页规格

### 4.1 行程规划器（/itinerary-planner/）

对标 zhangjiajie itinerary.astro，三类 preset：
- 1-Day Express：小时级表格（7:00AM兵马俑 → 9:30AM华清池 → ... → 5:00PM回民街晚餐）
- 3-Day Classic：Day1兵马俑+华清池，Day2城墙+回民街，Day3陕历博+大雁塔+大唐不夜城
- 5-Day Deep Explorer：含华山一日游 + 汉阳陵
每项附带预算估算

### 4.2 景点详情页统一模板

每个景点（12页）统一结构：
1. Hero 图片 + H1 + meta信息条
2. Overview 段落（3-4段）
3. Quick Info Box：门票/时间/游览时长/如何到达/最佳时段
4. What to Expect 分段（3-4段深度内容）
5. Insider Tips（避开人群/拍照最佳机位）
6. Nearby Food/Attractions
7. FAQ 折叠面板（3-5题）
8. CTA → TripPlanner 或下一景点

### 4.3 对比工具页（/comparison/）

对标 best-time ComparisonTool.tsx：
- 模式切换：Attractions / Seasons
- 两个下拉选择器
- 对比卡片：评分/门票/时长/最佳时段/人群密度
- 底部 verdict 区域

### 4.4 美食指南（/food/）

- 必吃菜品列表（中英文名 + 图片 + 口味描述 + 推荐去处）
- 美食街区地图：回民街 / 洒金桥 / 东新街 / 大皮院
- 按餐型分类：早餐 / 午餐 / 晚餐 / 夜宵
- 预算分级：街头 ¥10-30 / 中档 ¥50-100 / 高档 ¥150+
- 饮食注意事项：清真/素食

### 4.5 交互组件实现要点

**TripPlanner（对标zhangjiajie）**：
- 内联script标签，is:inline
- 三个button group，点击切换selected/unselected class
- selected存JS对象，showResult()动态渲染推荐链接

**ComparisonTool（对标best-time）**：
- React Island，useState管理两个选择值
- 下拉菜单onChange更新，从data对象取数据渲染

**CostChart（对标best-time）**：
- React Island，SVG bar chart，三色填充，无外部库

---

## 五、Schema Markup 策略

| 页面 | Schema 类型 |
|------|------------|
| 首页 | TouristDestination + FAQPage + BreadcrumbList + Article |
| 景点页 | TouristAttraction + FAQPage + BreadcrumbList |
| 行程页 | Article + BreadcrumbList |
| 工具页 | WebApplication |
| 美食页 | ItemList（Restaurant） |
| FAQ页 | FAQPage |
| 博客 | BlogPosting |
| Layout层 | Organization + Person（每页通用） |

---

## 六、内部链接矩阵

对标 5000-year-old-chinese-tomb 的 25 页密集交叉链接：

- 首页 Footer nav 6列 + Learn More Hub → 所有内页
- 景点页 "If you like this..." → 相邻景点页
- 行程页每行 schedule item → 景点详情页
- TripPlanner 结果 → 景点详情页
- 美食页 food street → nearby 景点
- 博客正文锚文本 → 景点页/攻略页
- 每页 breadcrumb → 父级页面

---

## 七、开发路线图

### Phase 1 — MVP（Week 1-2）
- Astro项目初始化 + Tailwind配置
- 首页（Hero / QuickFacts / WhatIs / AtAGlance / TripPlanner）
- 3个核心景点详情页（兵马俑 / 城墙 / 回民街）
- 行程规划器（3个preset itinerary）
- FAQ + About + Privacy
- Layout + Footer + 全局Schema

### Phase 2 — 内容丰富（Week 3-4）
- 剩余9个景点详情页
- 美食指南 + 交通指南
- TripPlanner交互完善
- AttractionMap + ComparisonTool（React Islands）
- 3篇博客

### Phase 3 — 交互深化 + 推广（Week 5-6）
- CostChart（React Island + SVG）
- Daydream Stories内容
- Trust Timeline
- Crowd Calendar + Season Picker
- Traveler Stories
- 持续博客更新 + 横向拓展

---

## 八、竞争超越策略总结

六个差异化武器 vs 当前SERP前10：

1. **TripPlanner**：纯JS零依赖行程生成器，前10无人提供
2. **ComparisonTool**：景点并排对比，用户不用开多个tab
3. **结构化信息库**：统一模板 + Quick Info Box = Google Featured Snippet 素材
4. **中国本地人视角**：E-E-A-T（访问次数/价格验证日期/真实经验叙事）
5. **密集内链网络**：30页形成知识图谱，爬虫2跳可达任何页面
6. **交互工具即壁垒**：TripPlanner + ComparisonTool + AttractionMap + CostChart = 竞品复制成本高

---

## 九、Checklist

- [ ] 谷歌趋势验证关键词趋势
- [ ] 谷歌搜索前10名实际搜索验证
- [ ] allintitle竞争检查
- [x] 站点架构规划完成 ✅（v2.0）
- [x] 组件级规格完成 ✅
- [ ] 域名注册（建议 xianchina.com）
- [ ] Phase 1 开发（2周）
- [ ] Phase 2 开发（2周）
- [ ] Phase 3 开发 + 推广（2周）
- [ ] 持续上新内页横向拓展

---

## 附录：参考项目文件对照

| 项目 | 源码路径 |
|------|----------|
| zhangjiajie | ../zhangjiajie-national-park/src/ |
| best-time | ../best-time-to-visit-china/src/ |
| panda-base | ../dujiangyan-panda-base/src/ |
| forbidden-city | ../forbidden-city-tour/src/ |
| 5000-tomb | ../5000-year-old-chinese-tomb/src/ |
