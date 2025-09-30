import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu as MenuIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { AnimatedGroup } from '../ui/animated-group'
import { cn } from '../../lib/utils'
import { LogoIcon } from '../icons';
import { EarlyAccessDialog } from '../EarlyAccessDialog';
import { ToggleTheme } from '../ui/toggle-theme';
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '../ui/menu';

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <div className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36 pb-20">
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <>
                                    <EarlyAccessDialog>
                                        <Button
                                            variant="ghost"
                                            className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 h-auto">
                                            <span className="text-foreground text-sm">Introducing Support for AI Models</span>
                                            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Button>
                                    </EarlyAccessDialog>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                        Modern Solutions for Business Automation
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        Highly customizable AI agents for building modern automated workflows that look and feel the way you mean it.
                                    </p>
                                    </>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <>
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <EarlyAccessDialog>
                                            <Button
                                                size="lg"
                                                className="rounded-xl px-5 text-base">
                                                <span className="text-nowrap">Start Building</span>
                                            </Button>
                                        </EarlyAccessDialog>
                                    </div>
                                    </>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

const menuItems = [
    { name: 'Our Agents', to: '/agents' },
]

const HeroHeader = () => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <LogoIcon className="h-6 w-6 text-accent" />
                                <span className="text-xl font-bold text-text-primary">SCUBE</span>
                            </Link>

                            <div className="lg:hidden">
                                <MenuTrigger>
                                    <Button variant="ghost" size="icon" aria-label="Open menu">
                                        <MenuIcon className="h-6 w-6" />
                                    </Button>
                                    <MenuPopover>
                                        <div className="w-screen max-w-xs bg-background border rounded-2xl p-4 mr-4">
                                            <Menu onAction={(key) => navigate(key as string)}>
                                                {menuItems.map((item) => (
                                                    <MenuItem key={item.to} id={item.to}>
                                                        {item.name}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                            <hr className="my-4 border-border" />
                                            <div className="flex flex-col gap-4 items-start">
                                                <EarlyAccessDialog>
                                                    <Button size="sm" className="w-full">Get Started</Button>
                                                </EarlyAccessDialog>
                                                <ToggleTheme />
                                            </div>
                                        </div>
                                    </MenuPopover>
                                </MenuTrigger>
                            </div>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.to}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden lg:flex lg:w-fit lg:items-center lg:gap-6">
                             <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <EarlyAccessDialog>
                                    <Button
                                        size="sm"
                                        className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                        <span>Get Started</span>
                                    </Button>
                                </EarlyAccessDialog>
                            </div>
                            <ToggleTheme />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}