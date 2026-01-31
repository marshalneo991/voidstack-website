import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.pricing'), path: '/pricing' },
        { name: t('nav.maintenance'), path: '/maintenance' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-primary/20 py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 relative group">
                    <img src="/assets/logo.png" alt="VoidStack" className="h-10 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                        hidden: {}
                    }}
                    className="hidden md:flex items-center gap-8"
                >
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.path}
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Link
                                to={link.path}
                                className={`text-sm font-orbitron font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'}`}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <div className="flex items-center gap-4 border-l border-gray-800 pl-4">
                        <LanguageSwitch />
                        <Link to="/contact">
                            <Button variant="primary" className="py-2 px-4 text-sm font-orbitron">
                                {t('nav.getQuote')}
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-background border-b border-gray-800 p-6 flex flex-col gap-4 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg font-orbitron font-medium ${location.pathname === link.path ? 'text-primary' : 'text-gray-300'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-4 pt-4 border-t border-gray-800">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-400 font-orbitron">{t('nav.language')}</span>
                                <LanguageSwitch />
                            </div>
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                <Button variant="primary" className="w-full font-orbitron">
                                    {t('nav.getQuote')}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
