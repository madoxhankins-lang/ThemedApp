import { Code2, Layers3, Route } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const architecture = [
	{ icon: Code2, title: 'React components', text: 'Each page and shared control owns a focused piece of the interface.' },
	{ icon: Route, title: 'Client-side routing', text: 'React Router changes views without reloading the entire document.' },
	{ icon: Layers3, title: 'Design primitives', text: 'Button and Card provide consistent structure, states, and styling.' },
]

function About() {
	return (
		<div className="mx-auto max-w-4xl space-y-12 pb-12">
			<section className="max-w-2xl space-y-5">
				<p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300">About the project</p>
				<h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">A learning project with production habits.</h1>
				<p className="text-lg leading-8 text-slate-600 dark:text-slate-300">This app is intentionally small. Its value is in showing how a modern frontend is divided into clear layers that can be tested, replaced, and extended.</p>
			</section>
			<div className="grid gap-5 md:grid-cols-3">
				{architecture.map(({ icon: Icon, title, text }) => (
					<Card key={title}>
						<CardHeader>
							<Icon className="text-violet-600 dark:text-violet-300" size={24} aria-hidden="true" />
							<CardTitle>{title}</CardTitle>
						</CardHeader>
						<CardContent className="text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</CardContent>
					</Card>
				))}
			</div>
			<Card className="border-violet-200 bg-violet-50/60 dark:border-violet-300/15 dark:bg-violet-950/20">
				<CardHeader>
					<CardTitle>How to think about the code</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4 text-slate-600 dark:text-slate-300">
					<p><strong className="text-slate-900 dark:text-white">App.tsx</strong> composes the application shell and decides which page belongs to each route.</p>
					<p><strong className="text-slate-900 dark:text-white">Pages</strong> describe screen-level content and use shared components instead of rebuilding common UI.</p>
					<p><strong className="text-slate-900 dark:text-white">UI components</strong> contain reusable visual behavior, so improvements can be made once and shared everywhere.</p>
				</CardContent>
			</Card>
		</div>
	)
}

export default About
