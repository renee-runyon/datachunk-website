"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Logo from "@/public/image/dcd-logo.png";
import Beach from "@/public/image/beach.jpg";
import Cranberry from "@/public/image/cranberry.jpg";
import Lighthouse from "@/public/image/lighthouse.jpeg";
import Goldfinch from "@/public/image/goldfinch.jpg";
import Hr from "@/components/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function MyPage() {
	return (
		<div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scroll-smooth">

			{/* ================= HOME ================= */}
			<section id="home" className="snap-start min-h-screen flex items-center pt-8">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:px-20">

					{/* LEFT SIDE TEXT */}
					<motion.div
						className="flex flex-col justify-center md:pr-10"
						initial={{ x: -80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", ease: "easeInOut" }}
					>
						{/* MOBILE IMAGE */}
						<div className="block md:hidden mb-10">
							<div className="relative rounded-full overflow-hidden
                        h-[220px] w-[220px] mx-auto
                        grayscale hover:grayscale-0 transition-all duration-300">
								<Image
									src={Beach}
									fill
									className="object-cover"
									placeholder="blur"
									alt="Portrait"
								/>
							</div>
						</div>

						{/* PAGE TITLE */}
						<motion.h1
							className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold"
							initial={{ opacity: 0, y: -40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, type: "tween", ease: "easeInOut" }}
						>
							Datachunk Media Designs
						</motion.h1>

						{/* TAGLINES */}
						{[
							"WEBSITE DESIGN & DEVELOPMENT",
							"CONTENT CREATION & STRATEGY",
							"SOCIAL MEDIA CAMPAIGNS & OUTREACH",
							"DIGITAL PRODUCT PLANNING & PRODUCTION",
						].map((text, i) => (
							<motion.p
								key={i}
								className={`title text-lg 2xl:text-xl mt-2 tracking-wider text-sky-800 ${i === 0 ? "mt-4" : ""
									}`}
								initial={{ x: -60, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.3 + i * 0.15, type: "tween", ease: "easeInOut" }}
							>
								{text}
							</motion.p>
						))}

						{/* BUTTONS */}
						<motion.div
							className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-10"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.1, type: "tween", ease: "easeInOut" }}
						>
							<Button variation="primary">
								<a href="#about">Learn More</a>
							</Button>

							<Button variation="secondary">
								<a href="#contact">Contact Us</a>
							</Button>
						</motion.div>
					</motion.div>

					{/* RIGHT SIDE IMAGE (DESKTOP ONLY) */}
					<motion.div
						className="hidden md:flex justify-center items-center"
						initial={{ x: 80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.6, type: "tween", ease: "easeInOut" }}
					>
						<div className="relative rounded-4xl overflow-hidden
                      h-[380px] md:h-[450px] lg:h-[500px]
                      w-[280px] md:w-[320px] lg:w-[360px]
                      grayscale hover:grayscale-0 transition-all duration-300">
							<Image
								src={Beach}
								fill
								placeholder="blur"
								alt="Beach image"
								className="object-cover"
							/>
						</div>
					</motion.div>

				</div>
			</section>


			{/* ================= ABOUT ================= */}
			<section id="about" className="snap-start min-h-screen flex items-center pt-8">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:px-20">

					{/* IMAGE */}
					<motion.div
						className="flex justify-center md:justify-end order-1 md:order-2"
						initial={{ x: 80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", ease: "easeInOut" }}
					>
						<div
							className="
          relative rounded-4xl overflow-hidden
          h-[28vh]                /* MUCH SHORTER on mobile */
          sm:h-[32vh]             /* Slight bump on small tablets */
          md:h-[45vh]             /* Tall and nice on desktop */
          w-full md:w-[30vw]
          grayscale hover:grayscale-0 transition-all duration-300
        "
						>
							<Image
								src={Goldfinch}
								alt="About"
								fill
								className="object-cover object-center"
								placeholder="blur"
							/>
						</div>
					</motion.div>

					{/* TEXT */}
					<motion.div
						className="flex flex-col justify-center md:pl-10 order-2 md:order-1"
						initial={{ x: -80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", ease: "easeInOut" }}
					>
						<h1 className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">
							About Us
						</h1>

						<Hr />

						<p className="text-xl mt-4 tracking-wider text-gray-500 mb-5">
							More about who we are and the services we offer.
						</p>

						<Button variation="primary">
							<Link href="/about">Learn More</Link>
						</Button>
					</motion.div>

				</div>
			</section>



			{/* ================= PORTFOLIO ================= */}
			<section id="projects" className="snap-start min-h-screen flex items-center pt-8">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:px-20">

					{/* IMAGE */}
					<motion.div
						className="flex justify-center md:justify-end order-1 md:order-2"
						initial={{ x: 80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", ease: "easeInOut" }}
					>
						<div
							className="
          relative bg-transparent rounded-4xl overflow-hidden
          h-[28vh]                 /* MOBILE: short */
          sm:h-[32vh]              /* small tablets */
          md:h-[45vh]              /* DESKTOP tall */
          w-full md:w-[30vw]
          grayscale hover:grayscale-0 transition-all duration-300
        "
						>
							<Image
								src={Lighthouse}
								alt="Projects"
								fill
								className="object-cover object-center"
								placeholder="blur"
							/>
						</div>
					</motion.div>

					{/* TEXT */}
					<motion.div
						className="flex flex-col justify-center md:pl-10 order-2 md:order-1"
						initial={{ x: -80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", ease: "easeInOut" }}
					>
						<h1 className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">
							Our Portfolio
						</h1>

						<Hr />

						<p className="text-xl mt-4 tracking-wider text-gray-500 mb-5">
							A look at some of our work — past and present.
						</p>

						<Button variation="primary">
							<Link href="/projects">Learn More</Link>
						</Button>
					</motion.div>

				</div>
			</section>



			{/* ================= CONTACT ================= */}
			<section id="contact" className="snap-start min-h-screen flex items-center pt-8">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:px-20">

					{/* IMAGE */}
					<motion.div
						className="flex justify-center md:justify-end order-1 md:order-2"
						initial={{ x: 80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", ease: "easeInOut" }}
					>
						<div
							className="
          relative bg-transparent rounded-4xl overflow-hidden
          h-[28vh]                 /* MOBILE short */
          sm:h-[32vh]              /* small tablets */
          md:h-[45vh]              /* DESKTOP tall */
          w-full md:w-[30vw]
          grayscale hover:grayscale-0 transition-all duration-300
        "
						>
							<Image
								src={Beach}
								alt="Contact"
								fill
								className="object-cover object-center"
								placeholder="blur"
							/>
						</div>
					</motion.div>

					{/* TEXT */}
					<motion.div
						className="flex flex-col justify-center md:pl-10 order-2 md:order-1"
						initial={{ x: -80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", ease: "easeInOut" }}
					>
						<h1 className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">
							Get In Touch
						</h1>

						<Hr />

						<p className="text-xl mt-4 tracking-wider text-gray-600 mb-5">
							Feel free to reach out with questions or collaboration ideas.
						</p>

						<p className="text-xl mt-2 tracking-wider text-gray-600 mb-5">
							<a href="mailto:info@datachunkdesigns.com">info@datachunkdesigns.com</a>
						</p>

						<div className="flex space-x-4 mt-4 justify-center">
							{[
								{ icon: faEnvelope, href: "mailto:info@datachunkdesigns.com" },
								{ icon: faGithub, href: "https://github.com/" },
								{ icon: faLinkedin, href: "https://www.linkedin.com/company/datachunk-media-designs/" },
							].map((item, idx) => (
								<motion.a
									key={idx}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex justify-center items-center bg-sky-950 w-10 h-10 rounded-full text-gray-100 hover:bg-gray-400 transition-all duration-300"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 + idx * 0.1 }}
								>
									<FontAwesomeIcon icon={item.icon} className="text-2xl" />
								</motion.a>
							))}
						</div>

					</motion.div>

				</div>
			</section>





		</div>
	);
}
