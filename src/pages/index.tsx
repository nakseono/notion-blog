import Link from 'next/link'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header />
    <div className="sm:w-11/12 md:w-9/12 xl:w-8/12 m-auto">
      <div className="text-7xl font-extralight">
        안녕하세요. <br />
        개발자 <strong>김선호</strong>입니다.
      </div>
    </div>
  </>
)
