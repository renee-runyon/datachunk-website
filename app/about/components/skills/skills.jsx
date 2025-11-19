"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Icon components
function ActivityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
		</svg>
	);
}

function CodepenIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
			<line x1="12" x2="12" y1="22" y2="15.5" />
			<polyline points="22 8.5 12 15.5 2 8.5" />
			<polyline points="2 15.5 12 8.5 22 15.5" />
			<line x1="12" x2="12" y1="2" y2="8.5" />
		</svg>
	);
}

function WebhookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
			<path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
			<path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
		</svg>
	);
}

function MobileIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
			<line x1="12" x2="12" y1="18" y2="18" />
		</svg>
	);
}

const skillCategories = {
	web: {
		title: "Web Development",
		icon: CodepenIcon,
		description: "Building modern, responsive web applications",
		languages: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"NextJS",
			"TailwindCSS",
			"Bootstrap",
			"NodeJS",
		],
		tools: ["Wordpress", "Elementor", "WooCommerce", "GeoDirectory", "Visual Studio Code", "Git", "Github", "Figma", "AWS", "Docker"],
	},
	api: {
		title: "Content Creation",
		icon: WebhookIcon,
		description: "Communicate your strategy with messaging tailored to your key audiences.",
		languages: [
			"NodeJS",
			"ExpressJS",
			"PHP",
			"Laravel",
			"Python",
			"FastAPI",
			"Flask",
			"Django",
			"MySQL",
			"PostgreSQL",
			"MongoDB",
			"Firebase",
		],
		tools: ["Postman", "Docker", "Kubernetes", "Swagger", "Git", "Github", "Google Cloud", "IBM Cloud"],
	},
	ai: {
		title: "Social Media",
		icon: ActivityIcon,
		description: "Planning, design, and execution to support your growth.",
		languages: [
			"Python",
			"TensorFlow",
			"PyTorch",
			"Scikit-learn",
			"Pandas",
			"NumPy",
			"Jupyter",
			"OpenAI API",
			"Gemini API",
			"LangChain",
		],
		tools: [
			"Jupyter Notebook",
			"Google Colab",
			"Google Cloud AI",
			"AWS SageMaker",
			"IBM Watson",
		],
	},
	mobile: {
		title: "Digital Products",
		icon: MobileIcon,
		description: "Exhibits, archives, templates, e-learning, and beyond.",
		languages: [
			"React Native",
			"JavaScript",
			"TypeScript",
			"Dart",
			"Flutter",
		],
		tools: [
			"Android Studio",
			"React Native CLI",
		],
	},
};

function SkillDetails({ selectedSkill }) {
	if (!selectedSkill) return null;

	return (
		<motion.div
			key={selectedSkill.title}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
			className="space-y-6">
			{/* Languages & Frameworks */}
			<div className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-6">
				<h3 className="text-xl font-semibold text-black mb-4 text-center">
					Languages & Frameworks
				</h3>
				<div className="flex flex-wrap justify-center gap-2">
					{selectedSkill.languages.map((lang, index) => (
						<motion.span
							key={lang}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.05 }}
							className="px-3 py-1.5 bg-gradient-to-r from-gray-200/60 to-white/40 
									 border border-gray-400/40 rounded-full text-black text-sm font-medium
									 backdrop-blur-sm hover:scale-105 transition-transform cursor-default">
							{lang}
						</motion.span>
					))}
				</div>
			</div>

			{/* Tools */}
			<div className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-6">
				<h3 className="text-xl font-semibold text-black mb-4 text-center">
					Tools & Technologies
				</h3>
				<div className="flex flex-wrap justify-center gap-2">
					{selectedSkill.tools.map((tool, index) => (
						<motion.span
							key={tool}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.05 }}
							className="px-3 py-1.5 bg-gradient-to-r from-gray-300/60 to-gray-100/40 
									 border border-gray-500/40 rounded-full text-black text-sm font-medium
									 backdrop-blur-sm hover:scale-105 transition-transform cursor-default">
							{tool}
						</motion.span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("web");

	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-12">
					<h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
						Services We Offer
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
						Select a category to explore our services
					</p>
				</motion.div>

				{/* Mobile: Horizontal Scrolling Tabs */}
				<div className="lg:hidden mb-6 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
					<div className="flex gap-3 min-w-max">
						{Object.entries(skillCategories).map(([key, skill]) => {
							const Icon = skill.icon;
							const isSelected = selectedCategory === key;

							return (
								<motion.button
									key={key}
									onClick={() => setSelectedCategory(key)}
									className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap
										transition-all duration-300 ${isSelected
											? "bg-sky-950 text-white shadow-lg"
											: "bg-white/20 text-black border border-gray-300/30"
										}`}
									whileTap={{ scale: 0.95 }}>
									<Icon className="w-5 h-5" />
									<span className="font-medium text-sm">{skill.title}</span>
								</motion.button>
							);
						})}
					</div>
				</div>

				{/* Desktop: Grid Cards */}
				<div className="hidden lg:grid grid-cols-4 gap-6 mb-8">
					{Object.entries(skillCategories).map(([key, skill], index) => {
						const Icon = skill.icon;
						const isSelected = selectedCategory === key;

						return (
							<motion.div
								key={key}
								onClick={() => setSelectedCategory(key)}
								className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${isSelected
										? "bg-white/20 border-black border-2 shadow-lg"
										: "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
									}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}>
								{!isSelected && (
									<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
								)}

								<div className="relative z-10 flex flex-col items-center text-center space-y-4">
									<div
										className={`p-4 rounded-xl transition-all duration-300 ${isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
											}`}>
										<Icon className="w-8 h-8 text-black" />
									</div>
									<div>
										<h3 className="font-semibold text-black text-lg mb-2">
											{skill.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{skill.description}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Mobile: Selected Category Header */}
				<motion.div
					key={selectedCategory}
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					className="lg:hidden mb-6 text-center"
				>
					<h3 className="text-2xl font-bold text-black mb-2">
						{skillCategories[selectedCategory].title}
					</h3>
					<p className="text-gray-600 text-sm">
						{skillCategories[selectedCategory].description}
					</p>
				</motion.div>

				{/* Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}