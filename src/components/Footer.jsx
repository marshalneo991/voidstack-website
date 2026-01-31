import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

export default function Footer() {
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <footer className="bg-black border-t border-gray-900 pt-16 pb-8 relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/assets/logo.png" alt="VoidStack" className="h-8 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://x.com/MarkoGalic1991" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-800 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="https://github.com/marshalneo991" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-800 transition-all">
                                <Github size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-800 transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 font-orbitron">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors font-orbitron">{t('nav.home')}</Link></li>
                            <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors font-orbitron">{t('nav.services')}</Link></li>
                            <li><Link to="/testimonials" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors font-orbitron">{t('nav.testimonials')}</Link></li>
                            <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors font-orbitron">{t('nav.pricing')}</Link></li>
                            <li><Link to="/maintenance" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors font-orbitron">{t('nav.maintenance')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 font-orbitron">{t('footer.services')}</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors">{t('services.items.webDesign.title')}</Link></li>
                            <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors">{t('services.items.react.title')}</Link></li>
                            <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors">{t('services.items.performance.title')}</Link></li>
                            <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary text-sm transition-colors">{t('services.items.seo.title')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6 font-orbitron">{t('footer.contact')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>{t('contact.location')}</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:+387644281802" className="hover:text-primary transition-colors">+387 64 428 1802</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:voidstackdev@gmail.com" className="hover:text-primary transition-colors">voidstackdev@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} VoidStack. {t('footer.rights')}</p>
                    <div className="flex gap-6 font-orbitron">
                        <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-white text-sm">{t('common.privacyPolicy')}</Link>
                        <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-white text-sm">{t('common.termsOfService')}</Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
