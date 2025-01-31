import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	ArrowRight,
	Hand,
	Languages,
	Lightbulb,
	Video,
	Wand2,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

interface FeatureCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
	color: string;
}

const FeatureCard = ({ title, description, icon, color }: FeatureCardProps) => (
	<Card className="border-none shadow-lg">
		<CardContent className="pt-6">
			<div className={`rounded-full ${color} p-3 w-fit mb-4`}>{icon}</div>
			<h3 className="text-2xl font-semibold mb-2">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</CardContent>
	</Card>
);

export default function LandingPage() {
	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	const navigate = useNavigate();

	return (
		<div className="min-h-screen text-foreground bg-transparent font-display">
			<header className="flex justify-between items-center p-4 md:px-6 font-mono">
				<div className="flex items-center space-x-2">
					<span className="text-2xl font-bold">ISL</span>
				</div>
				<nav className="flex items-center gap-12">
					<Link to="#features" className="text-lg hover:underline">
						Features
					</Link>
					<Link to="/dictionary" className="text-lg hover:underline">
						Dictionary
					</Link>
					<Link to="#careers" className="text-lg hover:underline">
						Careers
					</Link>
				</nav>
				<div className="flex items-center space-x-2">
					<Button
						size={"lg"}
						onClick={() => {
							navigate("/");
						}}
					>
						Login
					</Button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="relative w-full py-16 md:py-24 font-display flex flex-col items-center">
				<Link to="#features">
					<Button size="lg" variant="tertiary" className="rounded-full mb-2 ">
						Learn More
					</Button>
				</Link>
				<div className="container px-4 md:px-6 flex flex-col items-center space-y-8 text-center relative">
					<h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
						Breaking Barriers in{" "}
						<span className="text-muted-foreground">Sign Language</span>{" "}
						Communication
					</h1>
					<p className="max-w-[700px] text-lg text-gray-400 md:text-xl">
						Instantly transform sign language into text. Our AI-powered
						recognition makes communication accessible and seamless for
						everyone.
					</p>
					<div className="flex flex-col gap-4 min-[400px]:flex-row">
						<Link to="/">
							<Button size="lg" className="rounded-full gap-2">
								Get Started
								<ArrowRight className="size-4" />
							</Button>
						</Link>
					</div>
					<img
						src="/assets/screen.png"
						alt="App Screenshot"
						className="rounded-3xl border-[0.1px] border-white/5 mt-8"
					/>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<div className="flex items-center space-x-2">
							<Wand2 className="size-5 text-white" />
							<span className="text-2xl font-bold">Features</span>
						</div>
						<h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
							Everything You Need for Sign Language Translation
						</h2>
						<p className="max-w-[700px] text-xl text-gray-400 md:text-2xl">
							Our platform, powered by advanced AI, offers comprehensive tools
							for real-time sign language translation.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<FeatureCard
							title="Real-time Translation"
							description="Translate sign language instantly using your webcam with our advanced AI recognition system."
							icon={<Video className="size-6 text-white" />}
							color="bg-emerald-700"
						/>
						<FeatureCard
							title="Video Upload Analysis"
							description="Upload and analyze pre-recorded videos for comprehensive sign language translation."
							icon={<Languages className="size-6 text-white" />}
							color="bg-rose-700"
						/>
						<FeatureCard
							title="Follows Proper Grammar"
							description="Ensure your translations follow proper grammar rules for clear and accurate communication."
							icon={<Lightbulb className="size-6 text-white" />}
							color="bg-cyan-700"
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<Card className="border-none shadow-lg mesh text-white">
						<CardContent className="py-16">
							<div className="flex flex-col items-center justify-center space-y-8 text-center">
								<img src="./assets/hands/0062.png" className="w-32 mb-4" />
								<h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl">
									Start Translating Sign Language Today
								</h2>
								<p className="max-w-[600px] text-xl md:text-2xl">
									Join our community and make communication more accessible for
									everyone.
								</p>
								<Link to="/dashboard">
									<Button size="lg" className="rounded-full gap-2 bg-white text-blue-600">
										Try ISL Translator Now
										<ArrowRight className="size-4" />
									</Button>
								</Link>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-700 py-6 md:py-8">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<div className="flex items-center space-x-2">
							<Hand className="size-6 text-white" />
							<span className="text-2xl font-bold">ISL Translator</span>
						</div>
						<p className="text-sm text-gray-400">
							© 2024 ISL Translator. All rights reserved.
						</p>
						<div className="flex items-center space-x-4">
							<Link
								to="/privacy"
								className="text-sm text-gray-400 hover:text-white"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-sm text-gray-400 hover:text-white"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}