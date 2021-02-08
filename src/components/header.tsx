import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string }[] = [
  { label: 'About Me', page: '/' },
  { label: 'Posts', page: '/blog' },
  { label: 'Timeline', page: '/timeline' },
]

export default ({ titlePre = '', category = '' }) => {
  return (
    <div className="bg-dark1 h-2/6" id={styles.header}>
      {/* <div className="float-left">This is Avator Space</div> */}
      <header className="h-16 sm:w-11/12 md:w-9/12 xl:w-8/12 m-auto flex justify-center items-center">
        <Head>
          <title>{titlePre ? `${titlePre} |` : ''} NakSeo's Tech Blog</title>
        </Head>
        <div className="left-1/2 flex flex-row justify-center">
          {navItems.map(({ label, page }) => {
            const menuColor =
              label === category ? 'text-point' : ' text-bright1'
            return (
              <Link href={page} as={page}>
                <a className={`mx-3 text-xl` + menuColor}>{label}</a>
              </Link>
            )
          })}
        </div>
      </header>
    </div>
  )
}
