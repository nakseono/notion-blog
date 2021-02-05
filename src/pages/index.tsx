import Link from 'next/link'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header />
    <div className={sharedStyles.layout}>
      <h1>My Notion Blog</h1>
      <h2>Blazing Fast Notion Blog with Next.js' </h2>
    </div>
  </>
)
