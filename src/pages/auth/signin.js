import { getCsrfToken, providers, signIn } from 'next-auth/client';
import AuthLayout from 'src/layouts/Authlayout';

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  const theproviders = await providers();
  return {
    props: { csrfToken, providers: theproviders },
  };
}

export default function SignIn({ csrfToken, providers }) {
  return (
    <AuthLayout>
      <div>
        <button onClick={() => signIn(providers.google.id)}>Sign in with Google</button>
      </div>

      <form method='post' action='/api/auth/signin/email'>
        <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
        <label>
          Email address
          <input type='email' id='email' name='email' />
        </label>
        <button type='submit'>Sign in with Email</button>
      </form>
    </AuthLayout>
  );
}
