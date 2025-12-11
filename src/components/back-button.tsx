import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function BackButton() {
	return (
		<div className="flex justify-start w-full">
			<Link to="..">
				<motion.button
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.95 }}
					type="button"
					className="px-4 py-2 cursor-pointer flex gap-1 border border-neutral-700 rounded-2xl"
				>
					<ArrowLeft /> Back
				</motion.button>
			</Link>
		</div>
	);
}

function ArrowLeft(props: React.SVGProps<React.SVGElementType>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
			{...props}
		>
			<title>Arrow Left</title>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<motion.path d="M5 12l14 0" />
			<path d="M5 12l6 6" />
			<path d="M5 12l6 -6" />
		</svg>
	);
}
