import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import Email from '../components/svgs/envelope'

export default () => (
  <>
    <footer className="footer">
      <div className="footer_L">NakSeoNo © 2021</div>
      <div className="footer_R">
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
    </footer>
  </>
)
