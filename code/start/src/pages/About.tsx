import { useState } from 'react'
import { Code2, Layers3, Route } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const architecture = [
	{ icon: Code2, title: 'React components', text: 'Each page and shared control owns a focused piece of the interface.' },
	{ icon: Route, title: 'Client-side routing', text: 'React Router changes views without reloading the entire document.' },
	{ icon: Layers3, title: 'Design primitives', text: 'Button and Card provide consistent structure, states, and styling.' },
]

function About() {
	const [submitted, setSubmitted] = useState(false)

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
			<Card>
				<CardHeader>
					<CardTitle>Share your feedback</CardTitle>
					<p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Tell us what you think of the app.</p>
				</CardHeader>
				<CardContent>
					<form
						className="grid gap-5 sm:grid-cols-2"
						onChange={() => setSubmitted(false)}
						onSubmit={(event) => {
							event.preventDefault()
							setSubmitted(true)
						}}
					>
						<div className="space-y-2">
							<label htmlFor="feedback-name" className="text-sm font-medium">Name</label>
							<input id="feedback-name" name="name" autoComplete="name" required className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
						</div>
						<div className="space-y-2">
							<label htmlFor="feedback-email" className="text-sm font-medium">Email</label>
							<input id="feedback-email" name="email" type="email" autoComplete="email" required className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
						</div>
						<div className="space-y-2 sm:col-span-2">
							<label htmlFor="feedback-topic" className="text-sm font-medium">What is your feedback about?</label>
							<select id="feedback-topic" name="topic" required defaultValue="" className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
								<option value="" disabled>Select a topic</option>
								<option value="design">Design</option>
								<option value="accessibility">Accessibility</option>
								<option value="other">Something else</option>
							</select>
						</div>
						<div className="space-y-2 sm:col-span-2">
							<label htmlFor="feedback-message" className="text-sm font-medium">Message</label>
							<textarea id="feedback-message" name="message" required rows={4} className="w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring" />
						</div>
						<div className="flex flex-wrap items-center gap-4 sm:col-span-2">
							<Button type="submit">Send feedback</Button>
							{submitted && <p role="status" className="text-sm text-emerald-700 dark:text-emerald-300">Thanks for your feedback. Your response has been recorded for this session.</p>}
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}

export default About
