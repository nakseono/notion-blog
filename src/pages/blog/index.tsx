import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [], preview }) => {
  return (
    <>
      <Header titlePre="Posts" />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className="bg-dark2 pt-6 pb-2">
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>작성된 글이 없습니다.</p>
        )}
        {posts.map(post => {
          return (
            <div
              className="sm:w-11/12 md:w-9/12 xl:w-8/12 h-24 m-auto bg-dark1 rounded-lg shadow-lg mb-4 flex flex-col justify-around"
              key={post.Slug}
            >
              <div>
                <h3 className="text-2xl pl-4">
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <div className={blogStyles.titleContainer}>
                      {!post.Published && (
                        <span className={blogStyles.draftBadge}>Draft</span>
                      )}
                      <a>{post.Page}</a>
                    </div>
                  </Link>
                </h3>
              </div>
              {/* {post.Authors.length > 0 && (
                <div className="authors">By: {post.Authors.join(' ')}</div>
              )} */}
              <div className="pl-4">
                {post.Date && (
                  <div className="posted">
                    작성 날짜 : {getDateStr(post.Date)}
                  </div>
                )}
              </div>
              {/* <p>
                {(!post.preview || post.preview.length === 0) &&
                  'No preview available'}
                {(post.preview || []).map((block, idx) =>
                  textBlock(block, true, `${post.Slug}${idx}`)
                )}
                </p> */}
            </div>
          )
        })}
      </div>
    </>
  )
}
