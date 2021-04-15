// import { signIn, signOut, useSession } from 'next-auth/client';
import Layout from '../layouts/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  // const [session, loading] = useSession();

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Next Auth Example!</h1>
          {/*
          {!session && (
            <>
              <span className={styles.notSignedInText}>You are not signed in</span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}>
                Sign in
              </a>
            </>
          )}
          {session && session.user.name && <p>Hello {session.user.name}</p>}
          {session && session.user.email && <p>Hello {session.user.email}</p>}
          */}
        </main>
      </div>
    </Layout>
  );
}
