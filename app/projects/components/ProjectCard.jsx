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
          mb-10 w-full bg-slate-800/70 text-white 
          rounded-4xl group/tes px-6 py-6 md:px-8 md:py-8 shadow-xl
          h-[340px] md:h-[360px] lg:h-[380px] /* MUCH SHORTER */
          overflow-hidden
        "
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: 'tween' }}
			>

				{/* YEAR BADGE */}
				<div className="absolute top-0 left-0 bg-gray-700 px-4 py-2 rounded-tl-4xl rounded-br-3xl z-30">
					<h4 className="text-white text-sm">{project.year}</h4>
				</div>

				{/* ===================================== */}
				{/* HOVER IMAGES — FULLY SHRUNK NOW       */}
				{/* ===================================== */}
				{laptopImg && mobileImg && (
					<div
						className="
              absolute inset-0 
              opacity-0 group-hover/tes:opacity-100
              transition-all duration-500
              flex items-center justify-center
              pointer-events-none
            "
					>
						{/* LAPTOP — SMALLER */}
						<div className="relative w-[90%] drop-shadow-xl z-10">
							<Image
								src={laptopImg}
								alt={`${project.title} laptop preview`}
								width={800}
								height={500}
								className="rounded-xl object-contain"
							/>
						</div>

						{/* MOBILE — SMALLER + HIGHER */}
						<div
							className="
                absolute right-[5%] bottom-[14%]
                w-[20%] md:w-[18%] lg:w-[25%]
                rotate-[-10deg] drop-shadow-2xl
                transition-all duration-500
                group-hover/tes:rotate-[6deg] group-hover/tes:scale-105
                z-20
              "
						>
							<Image
								src={mobileImg}
								alt={`${project.title} mobile preview`}
								width={200}
								height={400}
								className="rounded-xl object-contain"
							/>
						</div>
					</div>
				)}

				{/* ===================================== */}
				{/* VISIBLE CONTENT (TITLE + DESC + TECH)  */}
				{/* ===================================== */}
				<div className="text-center transition-all duration-300 group-hover/tes:opacity-0 px-4 z-30 mt-4">

					<h1 className="text-xl font-bold mb-4">{project.title}</h1>

					<p className="mb-8 text-gray-200 leading-snug text-sm">
						{project.desc[0].length > 100
							? `${project.desc[0].slice(0, 100)}...`
							: project.desc[0]}
					</p>

					<div className="flex justify-center items-center flex-wrap mt-1 gap-1">
						{project.tech.map((t, index) => (
							<span
								key={index}
								className="
                  px-4 py-2 
                  bg-gray-700 text-white 
                  rounded-md 
                  text-sm whitespace-nowrap
                "
							>
								{t}
							</span>
						))}
					</div>
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
