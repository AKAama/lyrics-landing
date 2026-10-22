// Marketing copy for the lyrics-display promo page.
// Keep Chinese+English mix consistent with the existing tone.
export const REPO_URL = 'https://github.com/AKAama/lyrics-display'
export const RELEASES_URL = 'https://github.com/AKAama/lyrics-display/releases'
export const APP_VERSION = 'v0.2.1'
export const BREW_COMMAND = 'brew tap AKAama/lyrics-display && brew install lyrics-display'

export interface Review { text: string; author: string }
export const reviews: Review[] = [
  { text: '终于有一个能完美适配 Apple Music 的歌词工具。不用切屏就能看到歌词，太方便了。', author: '音乐爱好者小王' },
  { text: '以前用 Apple Music 最痛苦的就是没有歌词，现在菜单栏直接显示，体验提升不止一个档次。', author: 'Apple Music 资深用户' },
  { text: '歌词偏移调整功能很实用，我的耳机延迟比较大，调一下就能完美同步了。', author: '发烧友阿杰' },
  { text: '作为一个重度音乐用户，这个工具解决了我最大的痛点 —— 边工作边听歌还能看歌词。', author: '程序员小李' },
  { text: 'Homebrew 安装超级方便，一行命令就搞定了。启动后菜单栏直接显示歌词，零学习成本。', author: '开发者小美' },
]

export interface FaqEntry { key: string; q: string; a: string }
export const faqs: FaqEntry[] = [
  { key: '1', q: '歌词显示不出来怎么办？', a: '请检查以下几点：1. 确认已授予自动化权限（系统设置 -> 隐私与安全性 -> 自动化）；2. 确认 Apple Music 正在播放歌曲；3. 尝试重启程序和 Apple Music；4. 检查菜单栏是否有足够的空间显示歌词。' },
  { key: '2', q: '支持哪些音乐 App？歌词从哪来？', a: '目前主要支持 Apple Music。优先读取「音乐」App 内置 TTML 歌词，没有时间轴时再匹配网易云，网易云不可用时回退到 LRCLIB。' },
  { key: '3', q: '会消耗很多电量吗？', a: '不会。本应用经过深度优化，500ms 刷新频率下几乎无额外电量消耗。不播放音乐时自动休眠。' },
  { key: '4', q: '歌词匹配不准怎么办？', a: '如果当前用的是 Music 内置歌词，可在菜单里点「改用在线歌词」。在线源不准时点「换下一个歌词源」切换候选，或点「重新获取歌词」重新拉取。也可以在配置文件中调整 offset_ms。' },
  { key: '5', q: '如何调整歌词偏移和菜单栏宽度？', a: '编辑配置文件 ~/Library/Application Support/lyrics-display/config.json：offset_ms 控制偏移（正数延后，负数提前），slot_width 控制菜单栏歌词槽宽（按汉字宽度，范围 8–40）。保存后重启程序即可。也可在菜单中点「打开配置文件」。' },
  { key: '6', q: '支持 iOS 吗？', a: '不支持。本项目是 macOS 菜单栏工具，依赖 macOS 的 systray API 和 AppleScript。' },
  { key: '7', q: '可以用 .app 安装吗？', a: '可以。从 GitHub Releases 下载 DMG，把 lyrics-display.app 拖进「应用程序」即可。通过 brew services 启动时，菜单会显示「停止后台服务」，点它会卸载 LaunchAgent。' },
]
