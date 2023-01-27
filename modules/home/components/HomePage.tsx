import { Button, ColorModeToggle, Logo, trpc } from '@common';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

export function HomePage() {
  const { data: session } = useSession();
  const hello = trpc.hello.useQuery({ text: 'client' });

  return (
    <>
      <Head>
        <title>awesome.saas</title>
      </Head>
      <div className="min-h-screen p-8 bg-blue-50 dark:bg-gray-800 dark:text-white">
        <Logo />

        {hello.isLoading && <p className="mt-4">Loading...</p>}
        {hello.data && <p className="mt-4">{hello.data.greeting}</p>}
        <p className="mt-4">Welcome to the home page.</p>

        <ColorModeToggle />

        {session ? (
          <>
            Signed in as {session.user.email} <br />
            <Button onClick={() => signOut()}>Sign out</Button>
          </>
        ) : (
          <>
            Not signed in <br />
            <Link href="/auth/signin">Sign in</Link>
          </>
        )}
      </div>
    </>
  );
}
