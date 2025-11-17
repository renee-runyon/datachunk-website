"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/me.jpg";
import Setup from "@/public/image/setup.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function MyPage() {
	return (
		<div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">

			{/* ================= HOME ================= */}
			<section id="home" className="snap-start h-screen flex items-center">
				<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
					{/* LEFT SIDE */}
					<motion.div
						className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
						initial={{ x: -80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "spring" }}
					>
						<div className="block md:hidden mx-auto my-10">
							<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all duration-300">
								<Image
									src={Me}
									width={500}
									height={500}
									className="rounded-full object-cover"
									alt="Portrait"
									placeholder="blur"
								/>
							</div>
						</div>

						<motion.h1
							className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
							initial={{ opacity: 0, y: -40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, type: "spring" }}
						>
							Datachunk Media Designs
						</motion.h1>

						{[
							"WEBSITE DESIGN & DEVELOPMENT",
							"CONTENT CREATION & STRATEGY",
							"SOCIAL MEDIA CAMPAIGNS & OUTREACH",
							"DIGITAL PRODUCT PLANNING & PRODUCTION",
						].map((text, i) => (
							<motion.p
								key={i}
								className={`title text-md 2xl:text-xl mt-2 tracking-wider ${i === 0 ? "text-sky-800 mt-4" : "text-gray-500"
									}`}
								initial={{ x: -60, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
							>
								{text}
							</motion.p>
						))}

						<motion.div
							className="flex space-x-4 mt-10"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.1, type: "spring" }}
						>
							<Button variation="primary">
								<a href="#about">Learn More</a>
							</Button>
							<Button variation="secondary">
								<a href="#contact">Contact Us</a>
							</Button>
						</motion.div>
					</motion.div>

					{/* RIGHT SIDE */}
					<motion.div
						className="hidden md:flex justify-center items-center"
						initial={{ x: 80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.6, type: "spring" }}
					>
						<div className="rounded-full lg:px-12 grayscale hover:grayscale-0 transition-all duration-300">
							<Image
								src={Me}
								width={400}
								height={550}
								placeholder="blur"
								alt="Portrait"
								className="rounded-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* ================= ABOUT ================= */}
			<section id="about" className="snap-start h-screen flex items-center">
				<div className="relative h-full w-full flex flex-col justify-center items-center overflow-hidden">

					{/* IMAGE */}
					<div className="z-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16 mb-40 md:mb-0">
						<motion.div
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, type: "spring" }}
						>
							<Image src={MeAbout} layout="fill" className="object-cover" alt="About" placeholder="blur" />
						</motion.div>
					</div>

					{/* TEXT */}
					<div className="z-10 absolute md:left-[10%] top-[60%] md:top-1/3 px-10">
						<motion.h1
							className="bg-white md:bg-transparent bg-opacity-50 px-3 py-4 text-black text-5xl md:text-8xl font-bold"
							initial={{ x: -80, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}
						>
							About Us
						</motion.h1>

						<Hr />

						<motion.p
							className="text-xl mt-4 tracking-wider text-gray-500 mb-5"
							initial={{ x: -70, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}
						>
							More about who we are and the services we offer.
						</motion.p>

						<Button variation="primary">
							<Link href="/about">Learn More</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* ================= PROJECTS ================= */}
			<section id="projects" className="snap-start h-screen flex items-center">
				<div className="relative h-full w-full flex flex-col justify-center items-center overflow-hidden p-10">

					{/* IMAGE */}
					<div className="z-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16 mb-40 md:mb-0">
						<motion.div
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, type: "spring" }}
						>
							<Image src={ProjectAll} layout="fill" className="object-cover" alt="Projects" placeholder="blur" />
						</motion.div>
					</div>

					{/* TEXT */}
					<div className="z-10 absolute md:left-[10%] top-[60%] md:top-1/3 px-10">
						<motion.h1
							className="bg-white md:bg-transparent bg-opacity-50 px-3 py-4 text-black text-5xl md:text-8xl font-bold"
							initial={{ x: -80, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}
						>
							Our Portfolio
						</motion.h1>

						<Hr />

						<motion.p
							className="text-xl mt-4 tracking-wider text-gray-500 mb-5"
							initial={{ opacity: 0, x: -70 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2, type: "spring" }}
						>
							A look at some of our work — past and present.
						</motion.p>

						<Button variation="primary">
							<Link href="/projects">Learn More</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* ================= CONTACT ================= */}
			<section id="contact" className="snap-start h-screen flex items-center">
				<div className="relative h-full w-full flex flex-col justify-center items-center overflow-hidden p-10">

					{/* IMAGE */}
					<div className="z-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16 mb-40 md:mb-0">
						<motion.div
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, type: "spring" }}
						>
							<Image src={Setup} layout="fill" className="object-cover" alt="Contact" placeholder="blur" />
						</motion.div>
					</div>

					{/* TEXT */}
					<div className="z-10 absolute md:left-[10%] top-[60%] md:top-1/3 px-10">
						<motion.h1
							className="bg-white md:bg-transparent bg-opacity-50 px-3 py-4 text-black text-5xl md:text-8xl font-bold"
							initial={{ x: -80, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}
						>
							Get In Touch
						</motion.h1>

						<Hr />

						<motion.p
							className="text-xl mt-4 tracking-wider text-gray-500 mb-5"
							initial={{ x: -70, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}
						>
							Feel free to reach out with questions or collaboration ideas.
						</motion.p>

						<motion.p
							className="text-xl mt-4 tracking-wider text-gray-500 mb-5"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
						>
							<a href="mailto:info@datachunkdesigns.com">
								info@datachunkdesigns.com
							</a>
						</motion.p>

						{/* ICONS */}
						<div className="flex space-x-4 mt-4">
							{[
								{ icon: faEnvelope, href: "mailto:info@datachunkdesigns.com" },
								{ icon: faGithub, href: "https://github.com/renee-runyon" },
								{ icon: faInstagram, href: "https://www.instagram.com/" },
								{ icon: faLinkedin, href: "https://www.linkedin.com/in/" },
								{ icon: faDiscord, href: "https://discordapp.com/users/bloody#6118" },
							].map((item, idx) => (
								<motion.a
									key={idx}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all duration-300"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 + idx * 0.1 }}
								>
									<FontAwesomeIcon icon={item.icon} className="text-3xl" />
								</motion.a>
							))}
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}
