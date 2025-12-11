import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import BackButton from "@/components/back-button";

export const Route = createFileRoute("/text-reveal/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="text-center gap-4 flex flex-col items-center justify-center min-h-screen bg-neutral-800 text-neutral-200">
			<TextBlurReveal />
		</div>
	);
}

function TextBlurReveal() {
	return (
		<section className="text-center gap-4 flex flex-col items-center justify-center min-h-screen bg-neutral-800 text-neutral-200">
			<BackButton />
			<h1 className="text-5xl font-bold bg-linear-to-br from-gray-400 via-neutral-400 bg-clip-text">
				Text Reveal
			</h1>
			<motion.p
				animate="visible"
				initial="hidden"
				transition={{
					delayChildren: 0.1,
					staggerChildren: 0.3,
					stiffness: 200,
					mass: 500,
				}}
				className="text-5xl font-bold text-white bg-neutral-800 p-2 rounded-lg border border-neutral-700 shadow-[0px_5px_8px_0px_inset_#404040] overflow-clip bg-linear-to-r from-gray-600 to-90% to-neutral-700"
			>
				{"Awesome text reveal".split("").map((char, i) => (
					<motion.span
						variants={{
							hidden: { x: -500, filter: "blur(10px)" },
							visible: { x: 0, filter: "blur(0px)" },
						}}
						key={char + i}
						className="inline-block"
					>
						{char}
					</motion.span>
				))}
			</motion.p>
		</section>
	);
}
