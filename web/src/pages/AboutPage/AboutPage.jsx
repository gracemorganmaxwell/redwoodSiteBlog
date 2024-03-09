import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />
      <main>
        <Link to={routes.home()}>Return home</Link>
        <p>
          About us, this site was created to demonstrate my mastery of Redwood:
          Look on my works, ye mighty, and despair!
        </p>
      </main>
    </>
  )
}

export default AboutPage
