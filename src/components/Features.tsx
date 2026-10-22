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
  "offset_ms": 350
}`

export default function Features() {
  return (
    <section id="features" className="novu-section">
      <FeatureRow
        title={<>Just play music.<br />We'll show the lyrics.</>}
        body="Open Apple Music and start playing. lyrics-display reads the current track via AppleScript, fetches synced lyrics from NetEase Cloud Music, and displays them in your menu bar — updated every 500ms."
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
        title={<>Precise sync.<br />Adjustable offset.</>}
        body="LRC timestamps are parsed and matched to your playback position. If your headphones add latency, tweak the offset in the config file until it feels right."
        visual={<div className="code-block"><pre>{configSample}</pre></div>}
      />
      <FeatureRow
        title={<>Cached lyrics.<br />Switch sources.</>}
        body={`Lyrics are cached per song to reduce API calls. If the match isn't perfect, click "Next source" in the menu to try another candidate from the search results.`}
        visual={
          <div className="menu-demo">
            <div className="menu-item">♪ 七里香 — 周杰伦</div>
            <div className="menu-sep" />
            <div className="menu-item">换下一个歌词源</div>
            <div className="menu-item">打开配置文件</div>
            <div className="menu-sep" />
            <div className="menu-item">退出</div>
          </div>
        }
      />
    </section>
  )
}
