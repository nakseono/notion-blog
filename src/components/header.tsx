import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'About Me', page: '/' },
  { label: 'Posts', page: '/blog' },
  { label: 'Timeline', page: '/timeline' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} NakSeo's Tech Blog</title>
      </Head>
      <div>This is Avator Space</div>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a
                  className={
                    pathname === page ? 'active to-right-underline' : undefined
                  }
                >
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
