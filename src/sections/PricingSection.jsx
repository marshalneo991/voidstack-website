import PricingCard from '../components/PricingCard';
import { useTranslation } from '../context/LanguageContext';

export default function PricingSection() {
    const { t } = useTranslation();

    const packages = [
        {
            title: t('pricing.packages.basic.title'),
            price: `${t('common.startingFrom')} 500`,
            isPopular: false,
            features: t('pricing.packages.basic.features', { returnObjects: true })
        },
        {
            title: t('pricing.packages.standard.title'),
            price: `${t('common.startingFrom')} 1.000`,
            isPopular: true,
            features: t('pricing.packages.standard.features', { returnObjects: true })
        },
        {
            title: t('pricing.packages.premium.title'),
            price: `${t('common.startingFrom')} 2.000`,
            isPopular: false,
            features: t('pricing.packages.premium.features', { returnObjects: true })
        }
    ];

    return (
        <section className="py-24 bg-[#0A0812]" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron">{t('pricing.title')} <span className="text-primary">{t('pricing.titleAccent')}</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <PricingCard
                            key={index}
                            {...pkg}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
