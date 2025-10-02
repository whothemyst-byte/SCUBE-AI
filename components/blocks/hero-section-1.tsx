import React from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
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
    const navigate = useNavigate();
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
                                    <Button
                                        variant="ghost"
                                        onPress={() => navigate('/blog')}
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
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl lg:mt-16">
                                        Modern Solutions for Business Automation
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-3xl text-balance text-lg text-text-secondary md:text-xl">
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
    { name: 'Home', to: '/' },
    { name: 'Blog', to: '/blog' },
]

const HeroHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const mobileMenuItems = [
        { name: 'Home', to: '/' },
        { name: 'Blog', to: '/blog' },
    ];

    const isScrolledRef = React.useRef(isScrolled);
    isScrolledRef.current = isScrolled;

    React.useEffect(() => {
        const handleScroll = () => {
            const shouldBeScrolled = window.scrollY > 50;
            if (shouldBeScrolled !== isScrolledRef.current) {
                setIsScrolled(shouldBeScrolled);
            }
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        // If the menu is open, we remove the scroll listener to prevent
        // the backdrop-blur effect from interfering with the menu animation.
        if (isMenuOpen) {
            window.removeEventListener('scroll', onScroll);
        } else {
            window.addEventListener('scroll', onScroll, { passive: true });
        }
        
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [isMenuOpen]);

    return (
        <header>
            <nav
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className={cn("relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4 transition-all duration-300", isScrolled && "py-2 lg:py-2")}>
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <LogoIcon className={cn("h-6 w-6 text-accent transition-all duration-300", isScrolled && "h-5 w-5")} />
                                <span className={cn("text-xl font-bold text-text-primary transition-all duration-300", isScrolled && "text-lg")}>SCUBE</span>
                            </Link>

                            <div className="flex items-center gap-2 lg:hidden">
                                <ToggleTheme />
                                <MenuTrigger isOpen={isMenuOpen} onOpenChange={setIsMenuOpen}>
                                    <Button variant="ghost" size="icon" aria-label="Open menu">
                                        <MenuIcon className="h-6 w-6" />
                                    </Button>
                                    <MenuPopover>
                                        <div className="w-screen max-w-xs bg-background border rounded-2xl p-4 mr-4 flex flex-col gap-4">
                                            <Menu onAction={(key) => { navigate(key as string); setIsMenuOpen(false); }}>
                                                {mobileMenuItems.map((item) => (
                                                    <MenuItem 
                                                      key={item.to} 
                                                      id={item.to} 
                                                      className={cn("justify-start text-lg font-medium py-3 px-3", location.pathname === item.to && "text-accent font-bold")}
                                                    >
                                                        {item.name}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                            <hr className="border-border -mx-4" />
                                            <div className="px-3 pb-2">
                                                <EarlyAccessDialog onTriggerPress={() => setIsMenuOpen(false)}>
                                                    <Button size="lg" className="w-full font-bold">Get Started</Button>
                                                </EarlyAccessDialog>
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
                                        <NavLink
                                            to={item.to}
                                            className={({isActive}) => cn("block duration-150", isActive ? "font-semibold text-accent" : "text-muted-foreground hover:text-text-primary")}
                                        >
                                            <span>{item.name}</span>
                                        </NavLink>
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