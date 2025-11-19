import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function ProjectCard({ project, index, activeCategory }) {
	const isActive = project.category.includes(parseInt(activeCategory));
	if (!isActive) return null;

	const laptopImg = project.images?.[0] || null;
	const mobileImg = project.images?.[1] || null;

	return (
		<Link href={"projects/" + project.slug} key={index}>
			<motion.div
				className="
          relative z-10 flex flex-col items-center 
          mb-10 w-full bg-slate-600/70 text-white 
          rounded-4xl group/tes px-6 py-10 md:px-10 md:py-14 shadow-xl
          h-[480px] md:h-[500px] lg:h-[520px]
          overflow-hidden
        "
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: 'tween' }}
			>

				{/* YEAR BADGE */}
				<div className="absolute top-0 left-0 bg-gray-700 px-4 py-2 rounded-tl-4xl rounded-br-3xl z-30">
					<h4 className="text-white">{project.year}</h4>
				</div>

				{/* IMAGES */}
				{laptopImg && mobileImg ? (
					<div className="relative w-full flex items-center justify-center overflow-visible mt-4 mb-4">
						<div className="relative w-[80%] md:w-[65%] lg:w-[80%] drop-shadow-xl z-10">
							<Image
								src={laptopImg}
								alt={`${project.title} laptop preview`}
								width={1000}
								height={700}
								className="rounded-xl object-contain"
							/>
						</div>

						<div
							className="
                absolute right-[4%] bottom-[2%] 
                w-[28%] md:w-[28%] lg:w-[24%] 
                rotate-[-10deg] drop-shadow-2xl
                transition-all duration-500
                group-hover/tes:rotate-[-6deg] group-hover/tes:scale-105 
                z-20
              "
						>
							<Image
								src={mobileImg}
								alt={`${project.title} mobile preview`}
								width={300}
								height={600}
								className="rounded-xl object-contain"
							/>
						</div>
					</div>
				) : (
					<div className="relative w-full h-64 flex items-center justify-center mt-6 mb-4">
						<Image
							src={project.thumbnail}
							alt={`${project.title} thumbnail`}
							fill
							className="object-contain rounded-xl opacity-70 group-hover/tes:opacity-100 transition-all"
						/>
					</div>
				)}

				{/* CONTENT — NO DESCRIPTION */}
				<div className="text-center transition-all duration-300 group-hover/tes:opacity-0 px-4 z-30">
					<h1 className="text-2xl font-bold mb-4">{project.title}</h1>

					<div className="flex justify-center items-center flex-wrap mt-2">
						{project.tech.map((t, index) => (
							<span
								key={index}
								className="m-1 px-4 py-2 bg-gray-700 text-white rounded-md"
							>
								{t}
							</span>
						))}
					</div>
				</div>

				{/* HOVER DETAILS LINK */}
				<div
					className="
            absolute inset-0 flex items-center justify-center 
            opacity-0 group-hover/tes:opacity-100 
            transition-opacity duration-300
            z-40 pointer-events-none mt-16
        "
				>
					<span className="bg-gray-800/80 text-white px-6 py-3 rounded-xl text-lg font-semibold pointer-events-auto">
						Details →
					</span>
				</div>

			</motion.div>
		</Link>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
