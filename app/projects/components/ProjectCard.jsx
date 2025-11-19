import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

export default function ProjectCard({ project, index, activeCategory }) {
	const [isTapped, setIsTapped] = useState(false);
	const isActive = project.category.includes(parseInt(activeCategory));

	if (!isActive) return null;

	const laptopImg = project.images?.[0] || null;
	const mobileImg = project.images?.[1] || null;

	return (
		<Link href={"projects/" + project.slug} key={index}>
			<motion.div
				className="
          relative z-10 flex flex-col items-center 
          mb-10 w-full bg-sky-950 text-white 
          rounded-4xl group/tes px-6 py-6 md:px-8 md:py-8 shadow-xl
          h-[340px] md:h-[360px] lg:h-[380px]
          overflow-hidden cursor-pointer
        "
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: 'tween' }}
				onClick={(e) => {
					// Only toggle on mobile/tablet
					if (window.innerWidth < 1024) {
						e.preventDefault();
						setIsTapped(!isTapped);
					}
				}}
			>
				{/* YEAR BADGE */}
				<div className="absolute top-0 left-0 bg-sky-950 px-6 py-4 rounded-tl-4xl  rounded-br-3xl z-30">
					<h4 className="text-white text-sm">{project.year}</h4>
				</div>

				{/* ===================================== */}
				{/* IMAGES — Mobile: preview by default  */}
				{/*          Desktop: hover to reveal     */}
				{/* ===================================== */}
				{laptopImg && mobileImg && (
					<div
						className={`
              absolute inset-0 
              transition-all duration-500
              flex items-center justify-center
              pointer-events-none
              
              /* Show preview at 50% always, full on tap/hover */
              opacity-10
              ${isTapped ? 'opacity-100' : ''}
              
              /* Desktop: show full on hover */
              lg:group-hover/tes:opacity-100
            `}
					>
						{/* LAPTOP */}
						<div className="relative w-[80%] drop-shadow-xl z-10">
							<Image
								src={laptopImg}
								alt={`${project.title} laptop preview`}
								width={800}
								height={500}
								className="rounded-xl object-contain"
							/>
						</div>

						{/* MOBILE */}
						<div
							className={`
                absolute right-[5%] bottom-[14%]
                w-[20%] md:w-[18%] lg:w-[25%]
                rotate-[-10deg] drop-shadow-2xl
                transition-all duration-500
                z-20
                
                ${isTapped ? 'rotate-[6deg] scale-105' : ''}
                lg:group-hover/tes:rotate-[6deg] lg:group-hover/tes:scale-105
              `}
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
				{/* VISIBLE CONTENT                        */}
				{/* ===================================== */}
				<div
					className={`
            text-center transition-all duration-300 px-4 z-30 mt-4
            
            /* Mobile: fade less when tapped */
            ${isTapped ? 'opacity-10' : 'opacity-100'}
            
            /* Desktop: fade on hover */
            lg:group-hover/tes:opacity-0
          `}
				>
					<h1 className="text-4xl md:text-3xl font-bold mb-6 md:mb-4">{project.title}</h1>
					<p className="mb-8 text-gray-200 leading-relaxed text-left text-xl md:text-md">
						{project.desc[0].length > 100
							? `${project.desc[0].slice(0, 80)}...`
							: project.desc[0]}
					</p>
					<div className="flex justify-center items-center flex-wrap mt-1 gap-2 md:gap-1">
						{project.tech.map((t, index) => (
							<span
								key={index}
								className="
                  px-5 py-2.5 md:px-4 md:py-2
                  bg-sky-200 text-sky-950 
                  rounded-md 
                  text-base md:text-sm whitespace-nowrap
                "
							>
								{t}
							</span>
						))}
					</div>
				</div>

				{/* Optional: Tap indicator for mobile */}
				<div className="absolute bottom-3 right-3 lg:hidden z-30">
					<span className="text-xs text-gray-400">
						{isTapped ? '👆 Tap again' : '👆 Tap to view'}
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