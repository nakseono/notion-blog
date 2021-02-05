import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import Email from '../components/svgs/envelope'
// import '../styles/global.css'

export default () => {
  return (
    <footer className="w-8/12 h-10 m-auto text-xs flex flex-col justify-between align-center">
      <hr className="footer_hr" />
      <div className="italic flex flex-row justify-between">
        <div className="ml-3">NakSeoNo © 2021</div>
        <div className="mr-3 flex justify-between">
          <ExtLink
            className="mr-5"
            key={'https://github.com/nakseono'}
            href={'https://github.com/nakseono'}
            aria-label={'github icon'}
          >
            <GitHub height={25} />
          </ExtLink>
          <ExtLink
            key={'mailto:nakseono@gmail.com'}
            href={'mailto:nakseono@gmail.com'}
            aria-label={'email icon'}
          >
            <Email height={25} />
          </ExtLink>
        </div>
      </div>
    </footer>
  )
}
