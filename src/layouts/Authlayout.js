import Head from 'next/head';
import { useSession } from 'next-auth/client';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import styles from '../styles/Home.module.css';

export default function AuthLayout({ children, title = 'Login' }) {
  const [session, loading] = useSession();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
}
