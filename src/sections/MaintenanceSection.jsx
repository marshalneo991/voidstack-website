import MaintenanceCard from '../components/MaintenanceCard';
import { useTranslation } from '../context/LanguageContext';

export default function MaintenanceSection() {
    const { t } = useTranslation();

    const plans = [
        {
            title: t('maintenancePlan.plans.basic.title'),
            price: "99 €",
            features: t('maintenancePlan.plans.basic.features', { returnObjects: true })
        },
        {
            title: t('maintenancePlan.plans.standard.title'),
            price: "199 €",
            features: t('maintenancePlan.plans.standard.features', { returnObjects: true })
        },
        {
            title: t('maintenancePlan.plans.premium.title'),
            price: "349 €",
            features: t('maintenancePlan.plans.premium.features', { returnObjects: true })
        }
    ];

    return (
        <section className="py-24 bg-background border-t border-gray-900" id="maintenance">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-orbitron">{t('maintenancePlan.title')} <br /><span className="text-primary">{t('maintenancePlan.titleAccent')}</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {t('maintenancePlan.subtitle')}
                        </p>
                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl inline-block mb-8">
                            <h4 className="font-bold text-primary mb-1 font-orbitron">{t('common.hostingIncluded')}</h4>
                            <p className="text-sm text-gray-400">{t('common.hostingDetail')}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {plans.map((plan, index) => (
                            <MaintenanceCard key={index} {...plan} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
