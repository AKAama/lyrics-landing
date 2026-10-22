import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// animal-island-ui global stylesheet (fonts, tokens, footer-sea/tree, critterpedia icons).
// The production CSS bundle shipped it in full even though no components were rendered.
import 'animal-island-ui/style'
import './styles/app.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
)
