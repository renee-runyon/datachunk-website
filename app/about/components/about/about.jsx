import Image from "next/image";
import { motion } from "framer-motion";
import Goldfinch from "@/public/image/goldfinch.jpg";
import Lighthouse from "@/public/image/lighthouse.jpeg";
import Cranberry from "@/public/image/cranberry.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Goldfinch}
									alt="Goldfinch"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Lighthouse}
									alt="Barnegat Light"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Cranberry}
									alt="Cranberry bog"
									layout="fill"
									objectFit="cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						Datachunk Media Designs
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						<span className="text-black font-medium">
							{" "}
							Datachunk Media Designs
						</span>{" "}
						works individually with each of our clients to assess goals and objectives, formulate plans based on best practices, and create and implement <span className="text-black font-medium">
							{" "}
							customized digital media products
						</span>{" "} that stand apart from other traditional media studios.

						<br /><br />Our services include <span className="text-black font-medium">
							{" "}
							website design, social media and communications planning and implementation, e-commerce solutions, and digital product development
						</span>{" "}.

						<br /><br />We are a cooperative media studio collaborating with other studios across the United States to share resources, create jobs, and ultimately deliver the best products. Our focus is on helping <span className="text-black font-medium">
							{" "}
							small businesses, non-profits, and artists
						</span>{" "}

						<br /><br /><span className="text-black font-medium">Contact us
						</span>{" "} today to schedule a consultation and let us help you create your next digital media innovation.

					</p>
				</motion.div>
			</div>
		</>
	);
}
