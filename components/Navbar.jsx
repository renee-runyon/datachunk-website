"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ------------------------------------------- */
/* VARIANTS (outside component — stable)       */
/* ------------------------------------------- */
const navVariantsDesktop = {
	open: {
		clipPath: "circle(2400px at calc(100% - 40px) 40px)",
		transition: { type: "tween", duration: 0.45, ease: "easeOut" },
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 120px) 40px)",
		transition: { type: "tween", duration: 0.35, ease: "easeIn" },
	},
};

const navVariantsMobile = {
	open: {
		clipPath: "circle(1800px at calc(100% - 40px) 40px)",
		transition: { type: "tween", duration: 0.45, ease: "easeOut" },
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 35px) 35px)",
		transition: { type: "tween", duration: 0.35, ease: "easeIn" },
	},
};

const itemVariants = {
	open: (custom) => ({
		opacity: 1,
		x: 0,
		rotate: 0,
		transition: {
			delay: custom,
			type: "tween",
			duration: 0.3,
			ease: "easeOut",
		},
	}),
	closed: {
		opacity: 0,
		x: -80,
		rotate: 0,
		transition: {
			type: "tween",
			duration: 0.2,
			ease: "easeIn",
		},
	},
};

/* ------------------------------------------- */
/* NAV MENU COMPONENT                           */
/* ------------------------------------------- */
const NavItems = ({ isNavOpen, setIsNavOpen, isMobile }) => {
	const handleItemClick = () => {
		setIsNavOpen(false);
	};

	const navVariant = isMobile ? navVariantsMobile : navVariantsDesktop;

	return (
		<motion.div
			className="fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm overflow-hidden"
			variants={navVariant}
			animate={isNavOpen ? "open" : "closed"}
			initial={false}
		>
			<div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center min-h-[100vh] bg-gray-700 min-w-[100vw]">
				<div className="flex flex-col items-center space-y-8 my-auto z-50">
					<motion.h1
						variants={itemVariants}
						animate={isNavOpen ? "open" : "closed"}
						className="text-6xl font-bold text-white"
					>
						Menu
					</motion.h1>

					<Link href="/#home" onClick={handleItemClick}>
						<motion.h2
							className="text-2xl font-bold text-white"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.1}
						>
							Home
						</motion.h2>
					</Link>

					<Link href="/about" onClick={handleItemClick}>
						<motion.h2
							className="text-2xl font-bold text-white"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.2}
						>
							About
						</motion.h2>
					</Link>

					<Link href="/projects" onClick={handleItemClick}>
						<motion.h2
							className="text-2xl font-bold text-white"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.3}
						>
							Projects
						</motion.h2>
					</Link>

					<Link href="/#contact" onClick={handleItemClick}>
						<motion.h2
							className="text-2xl font-bold text-white"
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							custom={0.4}
						>
							Contact
						</motion.h2>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

/* ------------------------------------------- */
/* NAVBAR SHELL (REWRITTEN & FIXED)            */
/* ------------------------------------------- */
const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const pathname = usePathname();
	const isHome = pathname === "/";

	useEffect(() => {
		const checkScreen = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkScreen();
		window.addEventListener("resize", checkScreen);
		return () => window.removeEventListener("resize", checkScreen);
	}, []);

	const toggleNav = () => setIsNavOpen((prev) => !prev);

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-24 w-screen fixed transition-colors duration-500
        ${isNavOpen ? "bg-sky-950 bg-opacity-50" : "backdrop-blur-md"}
        inset-0 flex justify-between items-center h-16 z-50`}
			>
				{/* Hamburger stays always */}
				<button
					className="burger button flex flex-col justify-center items-center space-y-1.5 ml-auto cursor-pointer"
					onClick={toggleNav}
				>

					<div
						className={`w-10 h-1 bg-black rounded-full transition-all duration-300 
            ${isNavOpen ? "rotate-45 bg-white translate-y-[2px]" : ""}`}
					></div>
					<div
						className={`w-10 h-1 bg-black rounded-full transition-all duration-300 
            ${isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""}`}
					></div>
				</button>
			</nav>

			<NavItems
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
				isMobile={isMobile}
			/>
		</>
	);
};

export default Navbar;
