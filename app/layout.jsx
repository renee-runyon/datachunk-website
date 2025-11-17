import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	title: "Datachunk Media Designs",

	description:
		"Web Design and Development and much more",

	author: "Datachunk Media Designs",
	siteUrl: "https://datachunkdesigns.com",
	applicationName: "Datachunk Media Designs",
	keywords: [
		"datachunk",
		"datachunk designs",
		"datachunk media",
		"datachunk media designs",
		"dmd",

	],

	openGraph: {
		type: "website",
		url: "https://datachunkdesigns.com",
		title: "Datachunk Media Designs | Portofolio",
		site_name: "Datachunk Media Designs",
		description: "",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/me.jpg",
				alt: "Datachunk Media Designs",
			},
		],
		site_name: "Datachunk Media Designs",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
