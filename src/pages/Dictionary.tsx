import { Navbar } from "@/components/blocks";
import { Button } from "@/components/ui/button";
import { dictionaryData } from "@/constants/dictionaryData";

export default function Dictionary() {
	return (
		<div className="w-full flex flex-col relative">
			<Navbar
				title="Dictionary"
				className="sticky top-0 right-0 backdrop-blur-3xl z-50"
			/>
			<main className="w-full px-4 md:px-16 py-8 relative font-mono">
				<div className="flex flex-col md:flex-row justify-between w-full pb-6 border-b-2 border-muted">
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
							<a href="#section-0-9">
								<Button variant={"dict"}>0-9</Button>
							</a>
							<a href="#section-symbol">
								<Button variant={"dict"}>#</Button>
							</a>
							{Array.from({ length: 26 }, (_, i) => (
								<a href={`#section-${String.fromCharCode(65 + i)}`} key={i}>
									<Button variant={"dict"}>
										{String.fromCharCode(65 + i)}
									</Button>
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="mt-8">
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
				</div>
			</main>
		</div>
	);
}
