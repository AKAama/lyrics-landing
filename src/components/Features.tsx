import type { ReactNode } from 'react'

function FeatureRow({ title, body, visual, reverse }: { title: ReactNode; body: string; visual: ReactNode; reverse?: boolean }) {
  return (
    <div className={reverse ? 'feature-row reverse' : 'feature-row'}>
      <div className="feature-text"><h2>{title}</h2><p>{body}</p></div>
      <div className="feature-visual">{visual}</div>
    </div>
  )
}

const configSample = `{
  "show_emoji": true,
  "emoji": "♪",
  "offset_ms": 350,
  "slot_width": 18
}`

export default function Features() {
  return (
    <section id="features" className="novu-section">
      <FeatureRow
        title={<>Just play music.<br />We'll show the lyrics.</>}
        body="Open Apple Music and start playing. lyrics-display reads the track via AppleScript, prefers Music's built-in TTML lyrics, then falls back to NetEase and LRCLIB — and shows the current line in your menu bar every 500ms."
        visual={
          <div className="menubar-demo">
            <div className="menubar-line">
              <span className="mb-item">File</span>
              <span className="mb-item">Edit</span>
              <span className="mb-item">View</span>
              <span className="mb-lyrics">♪ 在电线杆上多嘴</span>
              <span className="mb-right">Mon 9:41</span>
            </div>
          </div>
        }
      />
      <FeatureRow
        reverse
        title={<>Precise sync.<br />Fixed slot width.</>}
        body="LRC / TTML timestamps match your playback position. Tweak offset_ms for headphone latency, and set slot_width so mixed Chinese/English lines keep a stable menu bar width while scrolling."
        visual={<div className="code-block"><pre>{configSample}</pre></div>}
      />
      <FeatureRow
        title={<>Built-in first.<br />Switch & reload.</>}
        body={`Prefer Music's official lyrics when they have a timeline. Switch to online candidates with "改用在线歌词" / "换下一个歌词源", or hit "重新获取歌词" to reload the current track.`}
        visual={
          <div className="menu-demo">
            <div className="menu-item">状态：播放中</div>
            <div className="menu-item">歌曲：七里香 — 周杰伦</div>
            <div className="menu-item">歌词源：Music 内置</div>
            <div className="menu-sep" />
            <div className="menu-item">改用在线歌词</div>
            <div className="menu-item">重新获取歌词</div>
            <div className="menu-item">打开配置文件</div>
            <div className="menu-sep" />
            <div className="menu-item">退出</div>
          </div>
        }
      />
    </section>
  )
}
