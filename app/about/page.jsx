"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Skills from "./components/skills/skills.jsx";
import Beach from "@/public/image/beach.jpg";
import Hr from "@/components/Hr";
import About from "./components/about/about.jsx";

export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<main className="overflow-hidden">
				<FixedButton href="/#about">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButton>

				{/* ================= HERO SECTION ================= */}
				<section className="min-h-screen flex items-center pt-8">
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
								<div className="relative rounded-4xl overflow-hidden h-[220px] w-[220px] mx-auto grayscale hover:grayscale-0 transition-all duration-300">
									<Image
										src={Beach}
										fill
										sizes="220px"
										className="object-cover"
										placeholder="blur"
										alt="About Datachunk Media Designs"
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
								About Us
							</motion.h1>

							<Hr />

							{/* DESCRIPTION */}
							<motion.p
								className="text-xl mt-4 tracking-wider text-gray-500 mb-5"
								initial={{ x: -60, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.4, type: "tween", ease: "easeInOut" }}
							>
								Who we are here at Datachunk Media Designs.
							</motion.p>

							{/* BUTTON */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, type: "tween", ease: "easeInOut" }}
							>
								<Button
									variation="primary"
									onClick={() => {
										window.scrollTo({
											top: window.innerHeight,
											behavior: "smooth",
										});
									}}
								>
									Learn More
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
							<div className="relative rounded-4xl overflow-hidden h-[28vh] sm:h-[32vh] md:h-[45vh] w-full md:w-[30vw] grayscale hover:grayscale-0 transition-all duration-300">
								<Image
									src={Beach}
									fill
									placeholder="blur"
									alt="About Datachunk Media Designs"
									className="object-cover"
								/>
							</div>
						</motion.div>
					</div>
				</section>

				{/* ================= ABOUT CONTENT ================= */}
				<About />

				{/* ================= SKILLS ================= */}
				<Skills />
			</main>
		</>
	);
}