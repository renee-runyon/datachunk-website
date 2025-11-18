const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3  rounded-xl text-lg uppercase px-8 py-2 shadow-md transition duration-300 ease-in-out ${variation === "primary"
			? "bg-sky-950 hover:bg-transparent border-transparent hover:border-sky-950 border-2 text-gray-100 hover:text-sky-950 box-border"
			: "transparent border-2 border-sky-950 text-sky-950 hover:bg-sky-950 hover:text-gray-100 box-border"
			}`}>
		{children}
	</button>
);

export default Button;