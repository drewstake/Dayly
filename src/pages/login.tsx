import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login | Dayly</title>
        <meta name="description" content="Login to your Dayly account." />
      </Head>

      <main className="container">
        <section className="form-section">
          <h1>
            <Link
              href="/"
              className="accent"
              style={{ textDecoration: "none" }}
            >
              Welcome Back
            </Link>
          </h1>

          <p className="subtitle">
            Log in to continue your journaling journey.
          </p>

          <form className="form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>

          <p className="redirect">
            Don’t have an account? <Link href="/signup">Sign up</Link>
          </p>
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
          font-family: "Roboto", sans-serif;
        }
        .form-section {
          max-width: 400px;
          width: 100%;
          background: #fff;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
        h1 {
          font-family: "Pacifico", cursive;
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .subtitle {
          font-size: 1rem;
          font-weight: 300;
          margin-bottom: 2rem;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form input {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          font-size: 1rem;
        }
        .form button {
          padding: 0.75rem;
          background-color: #ebcb8b;
          color: #4a423a;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
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
        .redirect a {
          color: #a68e6f;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Login;
