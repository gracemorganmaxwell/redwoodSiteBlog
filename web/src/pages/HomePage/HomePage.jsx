import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <main>
        <p>
          Welcome to the Redwood blog. This is a super simple blog built with
          Redwood. It has a homepage, an about page, and a blog post page.
        </p>
      </main>
    </>
  )
}

export default HomePage
