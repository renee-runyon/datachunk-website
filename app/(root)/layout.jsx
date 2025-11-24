import Sidebar from "@/components/Sidebar";
import "../globals.css";

export const metadata = {
	title: "Your Site Name",
	description: "Your site description",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
			</head>
			<body>
				<Sidebar />
				{children}
			</body>
		</html>
	);
}