import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0D0B16]">
            {/* Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6 backdrop-blur-sm"
                        >
                            {t('hero.badge')}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-8xl font-bold leading-tight mb-6 text-white font-orbitron tracking-tight"
                        >
                            {t('hero.titlePrefix')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">React.js</span> <br />
                            {t('hero.titleSuffix')}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed"
                        >
                            {t('hero.descriptionPart1')}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500 font-bold">
                                {t('hero.descriptionHighlight')}
                            </span>
                            {t('hero.descriptionPart2')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/contact">
                                <Button variant="primary" className="h-[52px] text-base px-8 font-orbitron">
                                    {t('hero.startProject')}
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline" className="h-[52px] text-base px-8 font-orbitron">
                                    {t('hero.ourServices')}
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mt-12 lg:mt-0"
                    >
                        <div className="relative z-10 w-full max-w-[600px] ml-auto">
                            <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full -z-10" />
                            <img
                                src="/assets/hero-computer-v3.png"
                                alt="VoidStack Web Development Services"
                                className="w-full h-auto drop-shadow-2xl"
                                fetchPriority="high"
                                width="600"
                                height="600"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                }}
                            />
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-primary/20 blur-[60px] rounded-[100%]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
