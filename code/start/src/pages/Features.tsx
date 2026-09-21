import { Accessibility, Component, Laptop, Moon, Smartphone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const features = [
	{ icon: Component, title: 'Reusable UI', text: 'Buttons and cards share a typed API and consistent visual language.' },
	{ icon: Moon, title: 'Theme switching', text: 'Light and dark mode are persisted locally and respect the system preference initially.' },
	{ icon: Smartphone, title: 'Responsive layout', text: 'The navigation and card grids adapt from small screens to wide displays.' },
	{ icon: Accessibility, title: 'Accessible controls', text: 'Interactive elements include labels, focus states, semantic structure, and usable contrast.' },
	{ icon: Laptop, title: 'Modern tooling', text: 'Vite, TypeScript, Tailwind CSS, and ESLint support a fast feedback loop.' },
]

function Features() {
	return (
		<div className="space-y-12 pb-12">
			<section className="max-w-2xl space-y-5">
				<p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">What is included</p>
				<h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">A compact toolkit for thoughtful interfaces.</h1>
				<p className="text-lg leading-8 text-slate-600 dark:text-slate-300">The features are intentionally practical: each one demonstrates a pattern you will use repeatedly in real frontend work.</p>
			</section>
			<section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{features.map(({ icon: Icon, title, text }) => (
					<Card key={title} className="group transition-colors hover:border-sky-200 dark:hover:border-violet-300/30">
						<CardHeader>
							<div className="grid size-11 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700 dark:bg-violet-400/15 dark:text-violet-200 dark:group-hover:bg-sky-400/15 dark:group-hover:text-sky-200">
								<Icon size={21} aria-hidden="true" />
							</div>
							<CardTitle>{title}</CardTitle>
						</CardHeader>
						<CardContent className="text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</CardContent>
					</Card>
				))}
			</section>
		</div>
	)
}

export default Features
