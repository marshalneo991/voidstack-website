import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image / Overlay - REMOVED */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B16] via-[#0D0B16]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B16] via-transparent to-[#0D0B16]/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6 backdrop-blur-sm">
                        {t('hero.badge')}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white font-orbitron">
                        {t('hero.titlePrefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">React.js</span> {t('hero.titleSuffix')}
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-wrap gap-4">
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
                    </div>
                </motion.div>

                {/* Hero Image on the right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative mt-12 lg:mt-0"
                >
                    <div className="relative z-10 w-full max-w-[600px] ml-auto">
                        {/* Purple Glow Effect */}
                        <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full -z-10" />

                        <img
                            src="/assets/hero-computer-v3.png"
                            alt="VoidStack Hero"
                            className="w-full h-auto drop-shadow-2xl mask-gradient-b"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />

                        {/* Reflection/Ground Effect */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-primary/20 blur-[60px] rounded-[100%]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
