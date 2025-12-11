import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useMotionTemplate, useSpring } from "motion/react";
import { useRef, useState } from "react";
import BackButton from "@/components/back-button";

export const Route = createFileRoute("/navbar/")({
	component: Navbar,
});

export default function Navbar() {
	const items = ["Home", "About", "Testimonials", "Contact Us"];
	const [select, setSelect] = useState<string | null>(null);

	const handleItem = (el: string | null) => {
		setSelect(el);
	};

	return (
		<section className="text-center gap-4 flex flex-col items-center justify-center min-h-screen bg-neutral-800 text-neutral-200">
			<BackButton />
			<h1 className="text-5xl font-bold bg-linear-to-br from-gray-400 via-neutral-400 bg-clip-text">
				Navbar
			</h1>
			<nav className="px-4 py-1 border border-neutral-200/70 shadow-[0px_1px_2px_#989898_inset,0px_-1px_2px_#989898_inset] bg-linear-to-br from-neutral-900 to-gray-950 rounded-4xl relative flex text-neutral-300 items-center">
				{items.map((el) => {
					return (
						<NavItem key={el} el={el} select={select} handleItem={handleItem} />
					);
				})}
			</nav>
		</section>
	);
}

function NavItem({
	el,
	select,
	handleItem,
}: {
	el: string;
	select: string | null;
	handleItem: (el: string) => void;
}) {
	const [hover, setHover] = useState<string | null>(null);

	return (
		<Link
			to="."
			onMouseEnter={() => setHover(el)}
			onMouseLeave={() => setHover(null)}
			onClick={() => handleItem(el)}
			key={el}
			className="relative px-4 py-2"
		>
			{hover === el && (
				<motion.div
					layoutId="hover"
					className="absolute w-full h-full inset-0 rounded-3xl shadow-[0px_1px_4px_#ccc_inset,0px_-1px_#ccc_inset]"
				/>
			)}
			{select === el && (
				<motion.div
					layoutId="select"
					className="absolute w-full h-full inset-0 rounded-3xl shadow-[0px_1px_4px_#ccc_inset,0px_-1px_#ccc_inset] border border-[#f5f5f5]"
				/>
			)}
			<span className="relative">{el}</span>
		</Link>
	);
}
