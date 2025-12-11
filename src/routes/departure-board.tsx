import { createFileRoute } from "@tanstack/react-router";
import BackButton from "@/components/back-button";

export const Route = createFileRoute("/departure-board")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="text-center gap-4 flex flex-col items-center justify-center min-h-screen bg-neutral-800 text-neutral-200">
			<BackButton />
			<h1 className="text-5xl font-bold bg-linear-to-br from-gray-400 via-neutral-400 bg-clip-text">
				Departure Board (In progress)
			</h1>
			<DepartureBoard />
		</section>
	);
}

function DepartureBoard() {
	const data = [
		{ id: 1, source: "New York (JFK)", destination: "Los Angeles (LAX)" },
		{ id: 2, source: "San Francisco (SFO)", destination: "Chicago (ORD)" },
		{ id: 3, source: "London (LHR)", destination: "Paris (CDG)" },
		{ id: 4, source: "Tokyo (HND)", destination: "Seoul (ICN)" },
		{ id: 5, source: "Dubai (DXB)", destination: "Singapore (SIN)" },
		{ id: 6, source: "Toronto (YYZ)", destination: "Vancouver (YVR)" },
		{ id: 7, source: "Sydney (SYD)", destination: "Melbourne (MEL)" },
		{ id: 8, source: "Frankfurt (FRA)", destination: "Rome (FCO)" },
		{ id: 9, source: "Mumbai (BOM)", destination: "Delhi (DEL)" },
		{ id: 10, source: "Doha (DOH)", destination: "Bangkok (BKK)" },
	];
	return (
		<div className="flex flex-col gap-4 divide-y-2 divide-neutral-500">
			<div className="flex justify-between text-white gap-4">
				<p>Source</p>
				<p>Destination</p>
			</div>

			{data.splice(0, 5).map((item) => (
				<div
					key={item.id}
					className="text-neutral-300 flex justify-between gap-4"
				>
					<p>{item.source}</p>
					<p>{item.destination}</p>
				</div>
			))}
		</div>
	);
}
