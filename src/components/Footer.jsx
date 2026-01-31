import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-900 pt-16 pb-8 relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/assets/logo.png" alt="VoidStack" className="h-8 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Building the digital future with modern web technologies. We create high-performance, aesthetically pleasing, and scalable web solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-800 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-800 transition-all">
                                <Github size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-800 transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-primary text-sm transition-colors">Home</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">Services</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-primary text-sm transition-colors">Pricing</Link></li>
                            <li><Link to="/maintenance" className="text-gray-400 hover:text-primary text-sm transition-colors">Maintenance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">Web Design</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">React.js Development</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">Performance Optimization</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">SEO Audit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>Berlin, Germany</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+49 123 456 789</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>hello@voidstack.dev</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} VoidStack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
