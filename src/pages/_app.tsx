import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import 'tailwindcss/tailwind.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)
