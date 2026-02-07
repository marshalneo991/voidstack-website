import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { testimonialsData } from '../utils/testimonials-data';

import SEO from '../components/SEO';

export default function TestimonialsPage() {
    const { language } = useTranslation();
    const data = testimonialsData[language];

    return (
        <div className="pt-20 pb-24">
            <SEO
                title={`${data.title} | VoidStack`}
                description="See what our clients say about working with VoidStack."
                name="VoidStack"
                type="website"
            />
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
                            {data.title} <span className="text-primary">{data.titleAccent}</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
                            {data.subtitle}
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.reviews.map((review, index) => (
                            <motion.div
                                key={`${review.name}-${index}`}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 hover:border-primary/50 transition-all relative overflow-hidden group"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-400/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className="fill-primary text-primary"
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    "{review.text}"
                                </p>

                                {/* Author Info */}
                                <div className="border-t border-gray-800 pt-4">
                                    <h4 className="font-semibold text-white font-orbitron text-sm mb-1">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs text-gray-400">
                                        {review.role} • {review.company}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-20">
                        <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-12 relative overflow-hidden">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-purple-400/10 to-pink-500/10 rounded-3xl blur-2xl -z-10" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-orbitron">
                                Ready to join our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">satisfied clients</span>?
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Let's build something amazing together. Get in touch and start your project today.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105 font-orbitron"
                            >
                                Start Your Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
