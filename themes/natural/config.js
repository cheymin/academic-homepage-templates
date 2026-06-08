// ─────────────────────────────────────────────────────────────────────────────
// config.js — Fly (Cheymin) 的个人主页配置
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Fly",
  initials:   "FL",
  role:       "初中生 / 硬核技术爱好者",
  university: "江北中学",
  email:      "",  // 可选填写
  bio:        "14岁重庆初中生，硬核白帽破解者，维护近20个自建服务。热爱嵌入式破解、网络技术、服务自托管。全部 Docker 服务托管于 Hugging Face 免费算力平台。",
  photo:      "",

  stats: [
    { value: "20+",  label: "自建服务" },
    { value: "5+",   label: "编程语言" },
    { value: "100+", label: "技术教程" },
  ],

  links: {
    scholar: "",
    github:  "https://github.com/",  // 可填写实际GitHub
    twitter: "",
    cv:      "",
    blog:    "https://blog.346247.xyz/",
    rss:     "https://blog.346247.xyz/atom.xml",
  },

  publications: [],  // 暂无学术论文

  projects: [
    {
      name: "AstrBot",
      desc: "QQ机器人框架，运行在 Hugging Face 免费算力平台",
      tags: ["Docker", "Python"],
      url:  "#",
    },
    {
      name: "NapCat",
      desc: "QQ机器人框架，运行在 Hugging Face",
      tags: ["Docker", "Node.js"],
      url:  "#",
    },
    {
      name: "Vaultwarden",
      desc: "密码管理服务（Bitwarden 第三方实现）",
      tags: ["Docker", "安全"],
      url:  "#",
    },
    {
      name: "Hexo Blog",
      desc: "个人技术博客，发布破解教程与技术文章",
      tags: ["Hexo", "博客"],
      url:  "https://blog.346247.xyz/",
    },
    {
      name: "Cloudreve",
      desc: "云盘系统，支持多存储后端",
      tags: ["Docker", "存储"],
      url:  "#",
    },
    {
      name: "ImgBed",
      desc: "图床服务，支持 WebDAV",
      tags: ["图床", "WebDAV"],
      url:  "#",
    },
    {
      name: "Uptime Kuma",
      desc: "服务监控面板，监控所有自建服务状态",
      tags: ["监控", "Docker"],
      url:  "#",
    },
    {
      name: "Alist",
      desc: "文件列表程序，支持多种网盘挂载",
      tags: ["Docker", "存储"],
      url:  "#",
    },
  ],

  news: [
    { date: "2026.06", badge: "更新", text: "学术主页模板上线" },
    { date: "2026.06", badge: "运维", text: "近20个自建服务稳定运行中" },
    { date: "2026.01", badge: "技术", text: "Hugging Face Spaces Docker 部署实践" },
  ],

  education: [
    { period: "2023–至今", degree: "初中", institution: "江北中学" },
    { period: "2017–2023", degree: "小学", institution: "金刀峡小学" },
  ],

  experience: [
    { period: "持续进行", role: "服务自托管", institution: "Docker / Hugging Face / Vercel / Netlify" },
    { period: "持续进行", role: "嵌入式破解", institution: "固件解包、OTA劫持、ADB调试" },
    { period: "持续进行", role: "技术博客作者", institution: "blog.346247.xyz" },
  ],

  skills: [
    { category: "编程语言", items: ["Python", "Node.js", "Shell", "Java", "JavaScript"] },
    { category: "服务自托管", items: ["Docker", "Hugging Face Spaces", "Vercel", "Netlify"] },
    { category: "嵌入式/破解", items: ["固件解包", "OTA劫持", "ADB调试", "MD5校验篡改"] },
    { category: "网络技术", items: ["DNS劫持", "反向代理", "抓包分析", "端口转发"] },
    { category: "系统运维", items: ["OpenWrt", "ImmortalWrt", "路由器刷机"] },
  ],
};
