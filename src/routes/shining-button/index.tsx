import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import BackButton from "@/components/back-button";

export const Route = createFileRoute("/shining-button/")({
	component: RouteComponent,
});

function RouteComponent() {
	const variants = {
		initial: { left: -100 },
		hover: { left: 200 },
	};
	return (
		<div className="flex flex-col gap-4 justify-center items-center">
			<BackButton />
			<motion.button
				initial="initial"
				whileHover="hover"
				type="button"
				className="px-4 py-2 border w-fit border-neutral-200 rounded-full relative cursor-pointer overflow-hidden"
			>
				<motion.div
					variants={variants}
					transition={{ duration: 1, delay: 0.3 }}
					className="bg-linear-to-b blur-xs from-neutral-50/30 to-neutral-400/30 -rotate-45 w-8 h-20 -translate-y-1/3 absolute"
				/>
				<span>Hover me</span>
			</motion.button>
		</div>
	);
}
