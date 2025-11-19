"use client";
import { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jsonData from "@/json/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faChevronDown, faChevronUp, faX, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import FixedButon from "@/components/FixedButton";

function ScrollDownButton() {
	const [isAtBottom, setIsAtBottom] = useState(false);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight) {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: "smooth",
			});
			setIsAtBottom(true);
		} else {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			setIsAtBottom(false);
		}
	};

	return (
		<div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
			<motion.div
				className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={handleScroll}
			>
				<FontAwesomeIcon
					icon={isAtBottom ? faChevronUp : faChevronDown}
					className="text-white text-2xl"
				/>
			</motion.div>
		</div>
	);
}

function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") onNext();
			if (e.key === "ArrowLeft") onPrev();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onClose, onNext, onPrev]);

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
				onClick={onClose}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
				>
					<FontAwesomeIcon icon={faX} className="text-2xl" />
				</button>

				{/* Previous button */}
				{currentIndex > 0 && (
					<button
						onClick={(e) => {
							e.stopPropagation();
							onPrev();
						}}
						className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
					>
						<FontAwesomeIcon icon={faChevronLeft} className="text-3xl" />
					</button>
				)}

				{/* Next button */}
				{currentIndex < images.length - 1 && (
					<button
						onClick={(e) => {
							e.stopPropagation();
							onNext();
						}}
						className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
					>
						<FontAwesomeIcon icon={faChevronRight} className="text-3xl" />
					</button>
				)}

				{/* Image */}
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					className="relative max-w-7xl max-h-[90vh] w-full"
					onClick={(e) => e.stopPropagation()}
				>
					<Image
						src={"/" + images[currentIndex]}
						alt={`Project Image ${currentIndex + 1}`}
						className="w-full h-auto max-h-[90vh] object-contain"
						width={1920}
						height={1080}
					/>

					<div className="text-center text-white mt-4">
						{currentIndex + 1} / {images.length}
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}

function Page(props) {
	const params = use(props.params);
	const [data, setData] = useState(null);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const selectedData = jsonData.Projects.find(
			(item) => item.slug === params.slug
		);
		if (selectedData === undefined) {
			setData("404");
		} else {
			setData(selectedData);
		}
	}, [params.slug]);

	const openLightbox = (index) => {
		setCurrentImageIndex(index);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
	};

	const nextImage = () => {
		if (currentImageIndex < data.images.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		}
	};

	const prevImage = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		}
	};

	if (data === "404") {
		return <NotFound />;
	} else if (!data) {
		return (
			<div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10">
				<div className="min-h-screen flex justify-center items-center w-full">
					<div className="mx-auto grid grid-cols-1 md:grid-cols-2 w-full">
						<div className="flex justify-center items-start flex-col mb-5 space-y-10 w-full p-4">
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
						</div>
						<div className="flex justify-start items-start flex-col mb-5 w-full p-4">
							<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded w-full h-full"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10">
			<FixedButon href="/projects">
				<FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
			</FixedButon>
			<ScrollDownButton />

			{lightboxOpen && (
				<Lightbox
					images={data.images}
					currentIndex={currentImageIndex}
					onClose={closeLightbox}
					onNext={nextImage}
					onPrev={prevImage}
				/>
			)}

			<div className="min-h-screen flex justify-center items-center">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0 gap-10">
					<div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900">
								{data.title}
							</h1>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Technology
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.tech.join(", ")}
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.year}
							</p>
						</div>
						{data.preview && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Preview
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<a
										href={data.preview}
										target="_blank"
										rel="noopener noreferrer"
									>
										Preview{" "}
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)}
						{data.code && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Source Code
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<a
										href={data.code}
										target="_blank"
										rel="noopener noreferrer"
									>
										Github{" "}
										<FontAwesomeIcon icon={faGithub} className="ml-3" />
									</a>
								</p>
							</div>
						)}
					</div>

					{/* Description + Gallery */}
					<div className="flex justify-start items-start flex-col mb-5">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
							Description
						</h2>
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5"
							>
								{desc}
							</p>
						))}

						{/* Thumbnail Gallery */}
						<div className="mt-8 w-full">
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-4">
								Gallery
							</h2>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								{data.images.map((image, index) => (
									<motion.div
										key={index}
										className="relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-neutral-200 group"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => openLightbox(index)}
									>
										<Image
											src={"/" + image}
											alt={`Thumbnail ${index + 1}`}
											fill
											className="object-cover transition-all group-hover:brightness-75"
										/>

										<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
											<div className="bg-black/50 rounded-full p-3">
												<FontAwesomeIcon
													icon={faArrowUpRightFromSquare}
													className="text-white text-xl"
												/>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;