import Head from "next/head";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Dayly</title>
        <meta
          name="description"
          content="Create your Dayly account to start journaling."
        />
      </Head>

      <main className="container">
        <section className="form-section">
          <h1>
            Join <span className="accent">Dayly</span>
          </h1>
          <p className="subtitle">
            Create an account to begin your journaling journey.
          </p>

          <form className="form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>

          <p className="redirect">
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </section>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #faf5ee;
          font-family: "Roboto", sans-serif;
          color: #4a423a;
        }
        .form-section {
          text-align: center;
          background: #fff;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          width: 100%;
          max-width: 400px;
        }
        h1 {
          font-family: "Pacifico", cursive;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .accent {
          color: #a68e6f;
        }
        .subtitle {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        .form input {
          width: 100%;
          padding: 0.75rem;
          margin: 0.5rem 0;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          font-size: 1rem;
        }
        .form button {
          width: 100%;
          padding: 0.75rem;
          background-color: #ebcb8b;
          color: #4a423a;
          border: none;
          border-radius: 0.5rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .form button:hover {
          background-color: #d8b56a;
        }
        .redirect {
          margin-top: 1rem;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
};

export default Signup;
