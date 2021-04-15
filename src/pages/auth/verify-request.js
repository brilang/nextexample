import Link from 'next/link';
import AuthLayout from 'src/layouts/Authlayout';

export default function verifyRequest() {
  return (
    <AuthLayout>
      <div className='verify-request'>
        <h1>Check your email</h1>
        <p>A sign in link has been sent to your email address.</p>
        <p>
          <Link href='/'>
            <a>Back to Login</a>
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
