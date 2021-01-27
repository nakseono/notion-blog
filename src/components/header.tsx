import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import { useTheme } from 'next-themes'
import { Switch } from 'antd'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'About Me', page: '/' },
  { label: 'Posts', page: '/blog' },
  { label: 'Timeline', page: '/timeline' },
]

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
    if (theme === 'dark') {
    }
  }

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} NakSeo's Tech Blog</title>
      </Head>
      <button className="absolute right-7" onClick={switchTheme}>
        다크모드
      </button>
      <div>
        <div className="left-1/2">This is Avator Space</div>
      </div>
      <ul className="left-1/2">
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
      <Switch className="w-5 h-5" onClick={switchTheme} />
    </header>
  )
}
