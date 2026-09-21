import { ArrowRight, Check, Palette, Sparkles, WandSparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const principles = [
	{
		icon: Palette,
		title: 'Intentional color',
		description: 'A calm palette of sky blue and lavender keeps the interface light without feeling flat.',
	},
	{
		icon: WandSparkles,
		title: 'Reusable pieces',
		description: 'Shared buttons and cards make each page consistent and easier to extend.',
	},
	{
		icon: Check,
		title: 'Ready to grow',
		description: 'Clear routes and small components give the project room for real features later.',
	},
]

function Home() {
	return (
		<div className="space-y-20 pb-12">
			<section className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-violet-50 px-6 py-16 shadow-sm shadow-sky-100/60 sm:px-12 sm:py-20 dark:border-violet-300/15 dark:from-slate-900 dark:via-slate-950 dark:to-violet-950/40">
				<div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-400/10" />
				<div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-violet-200/40 blur-3xl dark:bg-violet-400/10" />
				<div className="relative max-w-2xl space-y-7">
					<div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-violet-700 dark:border-violet-300/20 dark:bg-white/5 dark:text-violet-200">
						<Sparkles size={16} aria-hidden="true" />
						A thoughtful React starter
					</div>
					<div className="space-y-4">
						<h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
							Build something clear, calm, and completely yours.
						</h1>
						<p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
							Themed App is a small example of how React, Tailwind CSS, shadcn/ui, and routing can work together without making the code feel heavy.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg" className="rounded-full bg-violet-600 text-white hover:bg-violet-700">
							<Link to="/features">
								Explore features
								<ArrowRight size={18} aria-hidden="true" />
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg" className="rounded-full border-sky-200 bg-white/60 hover:bg-sky-50 dark:border-sky-300/20 dark:bg-white/5 dark:hover:bg-sky-400/10">
							<Link to="/about">How it works</Link>
						</Button>
					</div>
				</div>
			</section>

			<section className="space-y-8">
				<div className="max-w-2xl space-y-3">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">The foundation</p>
					<h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Small decisions create a better experience.</h2>
					<p className="text-slate-600 dark:text-slate-300">Every piece of this starter has one job, so you can understand the connections and change the app with confidence.</p>
				</div>
				<div className="grid gap-5 md:grid-cols-3">
					{principles.map(({ icon: Icon, title, description }) => (
						<Card key={title} className="transition-transform duration-200 hover:-translate-y-1">
							<CardHeader>
								<div className="grid size-11 place-items-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-200">
									<Icon size={21} aria-hidden="true" />
								</div>
								<CardTitle>{title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>{description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</section>
		</div>
	)
}

export default Home
