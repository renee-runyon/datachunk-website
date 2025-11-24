"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
	{ id: "home", icon: faHome, label: "Home" },
	{ id: "about", icon: faUser, label: "About" },
	{ id: "projects", icon: faFolderOpen, label: "Projects" },
	{ id: "contact", icon: faEnvelope, label: "Contact" },
];

const Sidebar = () => {
	const [activeSection, setActiveSection] = useState("home");
	const pathname = usePathname();
	const router = useRouter();
	const isHomePage = pathname === "/";

	// Handle navigation
	const handleMoveToSection = (id) => {
		if (isHomePage) {
			// On home page: smooth scroll to section
			const el = document.getElementById(id);
			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "start" });
				// Immediately update active section when clicked
				setActiveSection(id);
			}
		} else {
			// On other pages: navigate to home page with hash, then scroll
			router.push(`/#${id}`);
		}
	};

	// Set active section based on current page route
	useEffect(() => {
		if (!isHomePage) {
			const routeMap = {
				"/about": "about",
				"/projects": "projects",
				"/contact": "contact",
			};
			setActiveSection(routeMap[pathname] || "home");
			return;
		}

		// On home page: track which section is in view
		const observers = [];
		sections.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
					}
				},
				{
					root: null,
					threshold: 0.3, // Lower threshold to trigger earlier
					rootMargin: "-20% 0px -20% 0px", // Trigger when section is more centered
				}
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, [pathname, isHomePage]);

	// Handle scrolling to section when navigating from other pages with hash
	useEffect(() => {
		if (isHomePage && window.location.hash) {
			const id = window.location.hash.substring(1);
			const el = document.getElementById(id);
			if (el) {
				// Small delay to ensure page is fully loaded
				setTimeout(() => {
					el.scrollIntoView({ behavior: "smooth", block: "start" });
					setActiveSection(id);
				}, 100);
			}
		}
	}, [isHomePage]);

	return (
		<div className="hidden md:flex fixed z-[9999] bg-sky-950 h-[50vh] w-16 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul className="flex flex-col justify-evenly items-center h-full text-gray-50">
				{sections.map(({ id, icon, label }) => (
					<li key={id}>
						<button
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								handleMoveToSection(id);
							}}
							className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${activeSection === id
									? "bg-amber-500 text-gray-900"
									: "bg-transparent hover:bg-gray-400 hover:text-gray-900"
								}`}
							aria-label={label}
							type="button"
						>
							<FontAwesomeIcon icon={icon} className="text-lg" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;