import Head from 'next/head';
import { signIn, useSession } from 'next-auth/client';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import styles from '../styles/Home.module.css';

export default function Layout({ children, title = 'Next JS Example with Authentication' }) {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />

      <main>
        {session && children}
        {!session && (
          <>
            <a
              href={`/api/auth/signin`}
              className={styles.buttonPrimary}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}>
              Log in
            </a>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
