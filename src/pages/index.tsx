// pages/index.tsx
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dayly &mdash; Your Cozy Journaling Companion</title>
        <meta
          name="description"
          content="Capture daily thoughts, moods, and memories in a warm, inviting space."
        />
      </Head>

      <main className="container">
        <section className="hero">
          <h1>
            Welcome to <span className="accent">Dayly</span>
          </h1>
          <p className="subtitle">
            A cozy place to capture your thoughts, track moods, and build your journaling habit.
          </p>
          <Link href="/entries" className="cta">
            Get Started
          </Link>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Daily Prompts</h2>
            <p>Kickstart your writing with gentle, guided prompts.</p>
          </div>
          <div className="feature">
            <h2>Tag & Search</h2>
            <p>Easily find past entries by tag, date, or keyword.</p>
          </div>
          <div className="feature">
            <h2>Private & Secure</h2>
            <p>Your thoughts are yours alone. All data lives locally or in your chosen cloud.</p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 1rem;
          background-color: #faf5ee;
          color: #4a423a;
          font-family: 'Roboto', sans-serif;
        }
        .hero {
          text-align: center;
          margin-bottom: 3rem;
        }
        h1 {
          font-family: 'Pacifico', cursive;
          font-size: 3rem;
          margin: 0;
        }
        .accent {
          color: #a68e6f;
        }
        .subtitle {
          margin-top: 0.5rem;
          font-size: 1.25rem;
          font-weight: 300;
          max-width: 500px;
        }
        .cta {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #ebcb8b;
          color: #4a423a;
          text-decoration: none;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }
        .cta:hover {
          background-color: #d8b56a;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 800px;
        }
        .feature {
          background: #fff;
          padding: 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
        .feature h2 {
          margin-bottom: 0.5rem;
        }
        .feature p {
          font-size: 0.95rem;
          line-height: 1.4;
        }
      `}</style>
    </>
  )
}

export default Home
