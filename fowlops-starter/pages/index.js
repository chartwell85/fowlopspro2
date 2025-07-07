import Head from 'next/head';
import { useEffect, useState } from 'react';
import { auth, provider } from '@/lib/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const handleSignIn = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <>
      <Head>
        <title>FowlOps - Waterfowl Hunting Intelligence</title>
      </Head>
      <main>
        {!user ? (
          <button onClick={handleSignIn}>Sign in with Google</button>
        ) : (
          <h1>Welcome, {user.displayName}</h1>
        )}
      </main>
    </>
  );
}
