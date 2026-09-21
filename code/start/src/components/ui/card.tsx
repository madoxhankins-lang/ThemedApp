import * as React from 'react'
import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'rounded-2xl border border-sky-100/80 bg-white/80 text-slate-900 shadow-sm shadow-sky-100/50 backdrop-blur dark:border-violet-300/15 dark:bg-slate-900/70 dark:text-white dark:shadow-none',
				className,
			)}
			{...props}
		/>
	)
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('flex flex-col gap-2 p-6', className)} {...props} />
}

function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
	return <h3 className={cn('text-lg font-semibold tracking-tight', className)} {...props} />
}

function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
	return <p className={cn('text-sm leading-6 text-slate-600 dark:text-slate-300', className)} {...props} />
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('px-6 pb-6', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return <div className={cn('flex items-center px-6 pb-6', className)} {...props} />
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
