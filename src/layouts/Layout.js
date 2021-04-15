import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';

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

      {session && <main>{children}</main>}
      {!session && <Login />}
      <Footer />
    </>
  );
}
