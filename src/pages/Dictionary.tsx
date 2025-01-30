import { useState, useEffect, useRef, memo } from "react";
import { Navbar } from "@/components/blocks";
import { Button } from "@/components/ui/button";
import { dictionaryData } from "@/constants/dictionaryData";
import gsap from "gsap";

const createObserver = (callback: IntersectionObserverCallback) =>
	new IntersectionObserver(callback, { threshold: 0 });

const AlphabetButtons = () => (
	<>
		<a href="#section-0-9">
			<Button variant="dict">0-9</Button>
		</a>
		<a href="#section-symbol">
			<Button variant="dict">#</Button>
		</a>
		{Array.from({ length: 26 }, (_, i) => (
			<a href={`#section-${String.fromCharCode(65 + i)}`} key={i}>
				<Button variant="dict">{String.fromCharCode(65 + i)}</Button>
			</a>
		))}
	</>
);

const DictionarySections = memo(() => (
	<>
		{Object.entries(dictionaryData).map(([section, words]) => (
			<section
				id={`section-${section}`}
				key={section}
				className="mb-8 flex flex-col md:flex-row w-full gap-4 md:gap-16"
			>
				<h2 className="text-2xl md:text-4xl mb-4 w-full md:w-1/4">{section}</h2>
				<ul className="columns-1 md:columns-2 w-full md:w-3/4 text-lg">
					{words.map((entry, index) => (
						<li key={index} className="break-inside-avoid">
							<a
								href={entry.url}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-emerald-500"
							>
								{entry.word}
							</a>
						</li>
					))}
				</ul>
			</section>
		))}
	</>
));

export default function Dictionary() {
	const [isLoading, setIsLoading] = useState(true);
	const stickyNavRef = useRef<HTMLDivElement>(null);
	const topRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (stickyNavRef.current) {
			gsap.set(stickyNavRef.current, {
				opacity: 0,
				y: -20,
				display: "none",
			});
		}

		const observer = createObserver((entries) => {
			entries.forEach((entry) => {
				if (stickyNavRef.current) {
					if (!entry.isIntersecting) {
						// Show sticky nav
						gsap
							.timeline()
							.set(stickyNavRef.current, { display: "flex" })
							.to(stickyNavRef.current, {
								opacity: 1,
								y: 0,
								duration: 0.3,
								ease: "power2.out",
								overwrite: true,
							});
					} else {
						// Hide sticky nav
						gsap.to(stickyNavRef.current, {
							opacity: 0,
							y: -20,
							duration: 0.3,
							ease: "power2.in",
							overwrite: true,
							onComplete: () => {
								if (stickyNavRef.current) {
									gsap.set(stickyNavRef.current, { display: "none" });
								}
							},
						});
					}
				}
			});
		});

		const currentTopRef = topRef.current;
		if (currentTopRef) {
			observer.observe(currentTopRef);
		}

		setIsLoading(false);

		return () => {
			if (currentTopRef) {
				observer.unobserve(currentTopRef);
			}
		};
	}, []);

	return (
		<div className="w-full flex flex-col relative">
			<Navbar
				title="Dictionary"
				className="sticky top-0 right-0 backdrop-blur-3xl z-50"
			/>
			<div
				ref={stickyNavRef}
				className="sticky top-14 left-0 right-0 bg-background/20 backdrop-blur-xl text-foreground shadow-md z-40 w-full border-b-2 border-muted"
			>
				<div className="flex justify-center gap-2 py-2 flex-wrap">
					<AlphabetButtons />
				</div>
			</div>
			<main className="w-full px-4 md:px-16 py-8 relative font-mono">
				<div
					ref={topRef}
					className="flex flex-col md:flex-row justify-between w-full pb-6 border-b-2 border-muted"
					id="top"
				>
					<span className="uppercase text-emerald-500 mb-4 md:mb-0">
						ISL Glossary
					</span>
					<div className="md:w-2/3">
						<p className="text-xl md:text-3xl text-muted-foreground leading-relaxed">
							<span className="text-foreground">
								Indian Sign Language, made simple.
							</span>{" "}
							<br />A visual dictionary for learners, educators, for everyone
							curious.
						</p>
						<div className="flex flex-wrap mt-4 gap-2 -ml-4 max-sm:px-1.5">
							<AlphabetButtons />
						</div>
					</div>
				</div>
				<div className="mt-8">
					{isLoading ? (
						<div className="flex justify-center items-center h-64">
							<span>Loading dictionary...</span>
						</div>
					) : (
						<DictionarySections />
					)}
				</div>
			</main>
		</div>
	);
}
