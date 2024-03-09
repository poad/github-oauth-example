import type { PropsWithChildren } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Button } from "@mui/material";

// biome-ignore lint/complexity/noBannedTypes: reason
type WithAuthProps = {};

export default function WithAuth(
	props: PropsWithChildren<WithAuthProps>,
): JSX.Element {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Box>
					Signed in as {session?.user?.email} <br />
					<Button
						sx={{
							backgroundColor: "#009900",
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
					backgroundColor: "#009900",
				}}
				onClick={() => signIn("github")}
			>
				Sign in
			</Button>
		</Box>
	);
}
