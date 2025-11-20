import Link from "next/link";

const Button = ({ children, variation, href, ...props }) => {
	const className = `title mr-3 rounded-xl text-lg text-center uppercase px-8 py-2 shadow-md transition duration-300 ease-in-out ${variation === "primary"
		? "bg-sky-950 hover:bg-transparent border-transparent hover:border-sky-950 border-2 text-gray-100 hover:text-sky-950 box-border"
		: "transparent border-2 border-sky-950 text-sky-950 hover:bg-sky-950 hover:text-gray-100 box-border"
		}`;

	if (href) {
		return (
			<Link href={href} className={className}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} className={className}>
			{children}
		</button>
	);
};

export default Button;