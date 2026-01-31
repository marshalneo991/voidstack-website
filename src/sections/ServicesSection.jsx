import { Palette, Atom, Rocket, Layout, Search, ShoppingBag, ShieldCheck, BarChart3 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { useTranslation } from '../context/LanguageContext';

export default function ServicesSection() {
    const { t } = useTranslation();

    const services = [
        {
            id: 1,
            icon: Palette,
            title: t('services.items.webDesign.title'),
            description: t('services.items.webDesign.description')
        },
        {
            id: 2,
            icon: Atom,
            title: t('services.items.react.title'),
            description: t('services.items.react.description')
        },
        {
            id: 3,
            icon: Rocket,
            title: t('services.items.performance.title'),
            description: t('services.items.performance.description')
        },
        {
            id: 4,
            icon: Layout,
            title: t('services.items.uiux.title'),
            description: t('services.items.uiux.description')
        },
        {
            id: 5,
            icon: Search,
            title: t('services.items.seo.title'),
            description: t('services.items.seo.description')
        },
        {
            id: 6,
            icon: ShoppingBag,
            title: t('services.items.ecommerce.title'),
            description: t('services.items.ecommerce.description')
        },
        {
            id: 7,
            icon: ShieldCheck,
            title: t('services.items.maintenance.title'),
            description: t('services.items.maintenance.description')
        },
        {
            id: 8,
            icon: BarChart3,
            title: t('services.items.analytics.title'),
            description: t('services.items.analytics.description')
        }
    ];

    return (
        <section className="py-24 bg-background relative" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron">{t('services.title')} <span className="text-primary">{t('services.titleAccent')}</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
