import type { JSX, PropsWithChildren } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Box, Button } from '@mui/material';

export default function WithAuth(
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  props: PropsWithChildren<{}>,
): JSX.Element {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Box>
          Signed in as {session?.user?.email} <br />
          <Button
            sx={{
              backgroundColor: '#009900',
            }}
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </Box>

        {props.children}
      </>
    );
  }
  return (
    <Box>
      Not signed in <br />
      <Button
        sx={{
          backgroundColor: '#009900',
        }}
        onClick={() => signIn('github')}
      >
        Sign in
      </Button>
    </Box>
  );
}
