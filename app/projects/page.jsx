"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import ProjectAll from "@/public/image/projects.jpg";

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Web Development",
	2: "Social Media Campaigns",
	9: "Other",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
				</FixedButon>
				{/* ================= PROJECTS HERO (matching About section) ================= */}
				<section id="projects-hero" className="snap-start min-h-screen flex items-center pt-8">
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
          h-[28vh]                /* Same mobile height as About */
          sm:h-[32vh]
          md:h-[45vh]             /* Tall on desktop */
          w-full md:w-[30vw]
          grayscale hover:grayscale-0 transition-all duration-300
        "
							>
								<Image
									src={ProjectAll}
									alt="Projects Overview"
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
								Explore the work we’ve created across design, development, and digital media.
							</p>

							{/* Scroll button */}
							<motion.div
								initial={{ opacity: 0, y: 70 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, ease: "circOut" }}
								onClick={() => {
									window.scrollTo({
										top: 1000,
										behavior: "smooth",
									});
								}}
							>
								<Button variation="primary">Scroll Down</Button>
							</motion.div>
						</motion.div>

					</div>
				</section>



				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-8"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "tween",
							}}>
							Some of our recent work
						</motion.h1>
					</div>
				</div>

				{/* choose category */}
				<motion.div
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						type: "tween",
					}}
					className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 mb-16 mt-8">
					{Object.keys(category).map((key, index) => (
						<button
							key={index}
							className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${activeCategory === key
								? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
								: "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
								}`}
							onClick={() => setActiveCategory(key)}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* projects */}
				<div
					className="
    w-screen mx-auto container 
    px-10 
    grid 
    grid-cols-1           /* mobile */
    md:grid-cols-2        /* tablets */
    lg:grid-cols-3        /* desktops */
    gap-10 
    mb-10 
    cursor-pointer
  "
				>
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							project={project}
							activeCategory={activeCategory}
						/>
					))}
				</div>


				{/* view in archive btn */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</motion.div>
			</main >
		</>
	);
}
