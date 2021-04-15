import { signIn, signOut, useSession } from 'next-auth/client';
import styles from '../styles/Home.module.css';

export default function Header() {
  const [session, loading] = useSession();

  return (
    <>
      <header>
        {session && (
          <>
            {session.user.image && (
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className={styles.avatar}
              />
            )}
            <span className={styles.signedInText}>
              <small>Signed in as</small>
              <br />
              <strong>{session.user.email || session.user.name}</strong>
            </span>
            <a
              href={`/api/auth/signout`}
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}>
              Sign out
            </a>
          </>
        )}
        <hr />
      </header>
    </>
  );
}
