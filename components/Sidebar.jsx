"use client";

import { useEffect, useState } from "react";
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

	// Smooth scroll to section
	const handleMoveToSection = (id) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Track which section is currently in view
	useEffect(() => {
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
					threshold: 0.5, // section is "active" when 50% visible
				}
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, []);

	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul className="flex flex-col justify-evenly items-center h-full text-gray-50">
				{sections.map(({ id, icon, label }) => (
					<li key={id}>
						<button
							onClick={() => handleMoveToSection(id)}
							className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${activeSection === id
									? "bg-gray-300 text-gray-900"
									: "bg-transparent hover:bg-gray-500"
								}`}
							aria-label={label}
						>
							<FontAwesomeIcon icon={icon} className="text-xl" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
