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
import { Link } from "react-router";

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
			<h3 className="text-xl font-semibold mb-2">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</CardContent>
	</Card>
);

export default function LandingPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative w-full py-24 md:py-32 bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/30">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center space-y-8 text-center">
						<div className="flex items-center space-x-2">
							<Hand className="size-6 text-emerald-600" />
							<span className="text-lg font-medium text-emerald-600">
								ISL Translator
							</span>
						</div>
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
							Breaking Barriers in{" "}
							<span className="text-emerald-600">Sign Language</span>{" "}
							Communication
						</h1>
						<p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
							Transform sign language into text instantly. Making communication
							accessible and seamless for everyone through AI-powered
							recognition.
						</p>
						<div className="flex flex-col gap-4 min-[400px]:flex-row">
							<Link to="/">
								<Button size="lg" className="rounded-full gap-2">
									Get Started
									<ArrowRight className="size-4" />
								</Button>
							</Link>
							<Link to="#features">
								<Button size="lg" variant="outline" className="rounded-full">
									Learn More
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-16 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
						<div className="flex items-center space-x-2">
							<Wand2 className="size-5 text-purple-600" />
							<span className="text-lg font-medium text-purple-600">
								Features
							</span>
						</div>
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
							Everything you need to translate sign language
						</h2>
						<p className="max-w-[700px] text-muted-foreground md:text-lg">
							Powered by advanced AI, our platform offers comprehensive tools
							for real-time sign language translation.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<FeatureCard
							title="Real-time Translation"
							description="Instantly translate sign language using your webcam with our advanced AI recognition system."
							icon={<Video className="size-6 text-emerald-600" />}
							color="bg-emerald-600/20"
						/>
						<FeatureCard
							title="Video Upload Analysis"
							description="Upload and analyze pre-recorded videos for comprehensive sign language translation."
							icon={<Languages className="size-6 text-purple-600" />}
							color="bg-purple-500/20"
						/>
						<FeatureCard
							title="Smart Recognition"
							description="AI-powered gesture recognition with high accuracy and fast response times."
							icon={<Lightbulb className="size-6 text-yellow-600" />}
							color="bg-yellow-500/20"
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-gradient-to-t from-emerald-50/50 to-transparent dark:from-emerald-950/30">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-8 text-center">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
							Start Translating Sign Language Today
						</h2>
						<p className="max-w-[600px] text-muted-foreground md:text-lg">
							Join our community and make communication more accessible for
							everyone.
						</p>
						<Link to="/dashboard">
							<Button size="lg" className="rounded-full gap-2">
								Try ISL Translator Now
								<ArrowRight className="size-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t py-6 md:py-8">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						<div className="flex items-center space-x-2">
							<Hand className="size-6 text-emerald-600" />
							<span className="text-lg font-medium">ISL Translator</span>
						</div>
						<p className="text-sm text-muted-foreground">
							© 2024 ISL Translator. All rights reserved.
						</p>
						<div className="flex items-center space-x-4">
							<Link
								to="/privacy"
								className="text-sm text-muted-foreground hover:text-foreground"
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms"
								className="text-sm text-muted-foreground hover:text-foreground"
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
