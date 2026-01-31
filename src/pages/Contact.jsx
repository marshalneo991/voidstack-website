
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-24 container mx-auto px-6"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something <span className="text-primary">Amazing</span></h1>
                <p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
                    Ready to start your next project? Get in touch with us and let's discuss how we can help you achieve your digital goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a href="mailto:hello@voidstack.dev" className="group flex flex-col items-center p-8 bg-gray-900/30 border border-gray-800 rounded-2xl hover:border-primary/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <h3 className="font-semibold text-white text-xl mb-2">Email Us</h3>
                        <p className="text-gray-400 group-hover:text-primary transition-colors">hello@voidstack.dev</p>
                    </a>

                    <a href="tel:+49123456789" className="group flex flex-col items-center p-8 bg-gray-900/30 border border-gray-800 rounded-2xl hover:border-primary/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <Phone size={32} />
                        </div>
                        <h3 className="font-semibold text-white text-xl mb-2">Call Us</h3>
                        <p className="text-gray-400 group-hover:text-primary transition-colors">+49 123 456 789</p>
                    </a>

                    <div className="flex flex-col items-center p-8 bg-gray-900/30 border border-gray-800 rounded-2xl">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <MapPin size={32} />
                        </div>
                        <h3 className="font-semibold text-white text-xl mb-2">Visit Us</h3>
                        <p className="text-gray-400">Berlin, Germany</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
