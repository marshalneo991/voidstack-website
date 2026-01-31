import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function PortfolioSection() {
    const { t } = useTranslation();

    const projects = [
        {
            name: t('portfolio.projects.cuUmzug.name'),
            description: t('portfolio.projects.cuUmzug.description'),
            tech: ["React.js", "TailwindCSS", "Responsive", "SEO"],
            image: "/assets/portfolio/cu-umzug.png",
            link: "https://cuumzugbau.de/",
        },
        {
            name: t('portfolio.projects.regionera.name'),
            description: t('portfolio.projects.regionera.description'),
            tech: ["React.js", "TailwindCSS", "SEO", "Responsive"],
            image: "/assets/portfolio/regionera.png",
            link: "https://www.regionera-recruiting.de",
        },
    ];

    return (
        <section className="py-20 px-6 bg-background relative" id="portfolio">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron">{t('portfolio.title')} <span className="text-primary">{t('portfolio.titleAccent')}</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('portfolio.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-gray-900/40 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30_px_rgba(138,43,226,0.15)] flex flex-col"
                        >
                            <div className="relative overflow-hidden h-64">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 font-orbitron"
                                    >
                                        {t('common.visitSite')} <ExternalLink size={16} />
                                    </a>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors font-orbitron">{project.name}</h3>
                                <p className="text-gray-400 mb-6 flex-1 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-medium font-orbitron"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
