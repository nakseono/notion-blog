import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { ThemeProvider } from 'next-themes'

export default ({ Component, pageProps }) => (
  <>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  </>
)

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }
