// import { signIn, signOut, useSession } from 'next-auth/client';
import { signIn, signOut, useSession } from 'next-auth/client';
import Layout from 'src/layouts/Layout';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <Layout csrfToken>
      <main>
        <h1>Next Auth Example!</h1>
        {!session && (
          <>
            <span>You are not signed in</span>
            <a href={`/api/auth/signin`}>Sign in</a>
          </>
        )}
        {session && session.user.name && <p>Hello {session.user.name}</p>}
        {session && session.user.email && <p>Hello {session.user.email}</p>}
      </main>
    </Layout>
  );
}
