import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Privacy from './components/Privacy'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Install from './components/Install'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="novu-app">
      <Nav /><Hero /><Features /><Privacy /><Reviews /><Faq /><Install /><Footer />
    </div>
  )
}
