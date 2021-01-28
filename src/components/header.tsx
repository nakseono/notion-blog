import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
// import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'About Me', page: '/' },
  { label: 'Posts', page: '/blog' },
  { label: 'Timeline', page: '/timeline' },
]

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <div className="bg-gray-200">
      <header>
        <Head>
          <title>{titlePre ? `${titlePre} |` : ''} NakSeo's Tech Blog</title>
        </Head>
        <div>
          <div className="left-1/2">This is Avator Space</div>
        </div>
        <ul className="left-1/2 flex flex-row justify-center">
          {navItems.map(({ label, page, link }) => (
            <li className="mx-3" key={label}>
              {page ? (
                <Link href={page}>
                  <a
                    className={
                      pathname === page
                        ? 'active to-right-underline'
                        : undefined
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
    </div>
  )
}
