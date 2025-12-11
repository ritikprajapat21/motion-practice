import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center gap-4 flex flex-col items-center justify-center min-h-screen bg-neutral-800 text-neutral-200">
			<Link to="/navbar">Navbar</Link>
			<Link to="/text-reveal">Text Reveal</Link>
			<Link to="/departure-board">Departure Board</Link>
		</div>
	);
}
