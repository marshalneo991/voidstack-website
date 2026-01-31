import { motion } from 'framer-motion';
import { useTranslation } from '../context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const features = t('about.features', { returnObjects: true });

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="pt-20 pb-24"
        >
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
                            {t('about.title')} <span className="text-primary">{t('about.titleAccent')}</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium">
                            {t('about.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div variants={itemVariants} className="relative">
                            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10" />
                            <div className="aspect-square rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 flex items-center justify-center relative">
                                <img
                                    src="/assets/about-me.png"
                                    alt="VoidStack"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                    <div className="font-orbitron text-2xl font-bold tracking-wider text-white">
                                        VOID<span className="text-primary">STACK</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {t('about.text1')}
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                {t('about.text2')}
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed italic border-l-2 border-primary/50 pl-6">
                                {t('about.text3')}
                            </p>
                            <p className="text-gray-500">
                                {t('about.text4')}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-12 mb-20">
                        <h3 className="text-2xl font-bold mb-8 font-orbitron text-center">{t('about.whyTitle')}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {Array.isArray(features) && features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <p className="text-gray-300 font-medium">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-center">
                        <h4 className="text-2xl md:text-3xl font-bold mb-8 font-orbitron max-w-2xl mx-auto leading-relaxed">
                            {t('about.cta')}
                        </h4>
                        <Link to="/contact">
                            <Button variant="primary" className="px-12 py-4 text-lg font-orbitron h-auto">
                                {t('common.startProject')}
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
