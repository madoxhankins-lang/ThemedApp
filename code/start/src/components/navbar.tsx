import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { Button } from './ui/button'

const navItems = [
	{ label: 'Home', to: '/' },
	{ label: 'About', to: '/about' },
	{ label: 'Features', to: '/features' },
]

function getInitialTheme() {
	if (typeof window === 'undefined') return false

	const savedTheme = window.localStorage.getItem('theme')
	if (savedTheme) return savedTheme === 'dark'

	return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function Navbar() {
	const [isDark, setIsDark] = useState(getInitialTheme)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark)
		window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
	}, [isDark])

	const linkClasses = ({ isActive }: { isActive: boolean }) =>
		`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
			isActive
				? 'bg-sky-100 text-sky-900 dark:bg-violet-400/20 dark:text-violet-200'
				: 'text-slate-600 hover:bg-violet-100/70 hover:text-violet-900 dark:text-slate-300 dark:hover:bg-sky-400/15 dark:hover:text-sky-200'
		}`

	const closeMenu = () => setIsMenuOpen(false)

	return (
		<header className="sticky top-0 z-10 border-b border-sky-100/80 bg-white/90 backdrop-blur dark:border-violet-300/15 dark:bg-slate-950/90">
			<nav
				className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
				aria-label="Primary navigation"
			>
				<Link
					to="/"
					onClick={closeMenu}
					className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 dark:text-white"
				>
					<span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-sky-200 to-violet-200 text-violet-700 dark:from-sky-400/30 dark:to-violet-400/30 dark:text-violet-200">
						<Sparkles size={18} aria-hidden="true" />
					</span>
					Themed App
				</Link>

				<div className="hidden items-center gap-1 md:flex">
					{navItems.map((item) => (
						<NavLink key={item.to} to={item.to} className={linkClasses}>
							{item.label}
						</NavLink>
					))}
				</div>

				<div className="flex items-center gap-2">
					<Button
						type="button"
						onClick={() => setIsDark((currentTheme) => !currentTheme)}
						variant="ghost"
						size="icon"
						className="rounded-full text-slate-600 hover:bg-violet-100 hover:text-violet-900 dark:text-slate-300 dark:hover:bg-sky-400/15 dark:hover:text-sky-200"
						aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
						title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
					>
						{isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
					</Button>

					<Button
						type="button"
						onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
						variant="ghost"
						size="icon"
						className="rounded-full text-slate-600 hover:bg-sky-100 hover:text-sky-900 dark:text-slate-300 dark:hover:bg-violet-400/15 dark:hover:text-violet-200 md:hidden"
						aria-expanded={isMenuOpen}
						aria-controls="mobile-navigation"
						aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					>
						{isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
					</Button>
				</div>
			</nav>

			{isMenuOpen && (
				<div id="mobile-navigation" className="border-t border-sky-100/80 px-4 py-3 dark:border-violet-300/15 md:hidden">
					<div className="mx-auto flex max-w-6xl flex-col gap-1">
						{navItems.map((item) => (
							<NavLink key={item.to} to={item.to} className={linkClasses} onClick={closeMenu}>
								{item.label}
							</NavLink>
						))}
					</div>
				</div>
			)}
		</header>
	)
}

export default Navbar
