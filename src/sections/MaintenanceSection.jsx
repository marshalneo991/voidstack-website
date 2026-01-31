import MaintenanceCard from '../components/MaintenanceCard';
import { useTranslation } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function MaintenanceSection() {
    const { t } = useTranslation();

    const plans = [
        {
            title: t('maintenancePlan.plans.basic.title'),
            price: "30 €",
            features: t('maintenancePlan.plans.basic.features', { returnObjects: true })
        },
        {
            title: t('maintenancePlan.plans.standard.title'),
            price: "60 €",
            features: t('maintenancePlan.plans.standard.features', { returnObjects: true }),
            isPopular: true
        },
        {
            title: t('maintenancePlan.plans.premium.title'),
            price: "100 €",
            features: t('maintenancePlan.plans.premium.features', { returnObjects: true })
        }
    ];

    return (
        <section className="py-24 bg-background border-t border-gray-900" id="maintenance">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-orbitron">{t('maintenancePlan.title')} <br /><span className="text-primary">{t('maintenancePlan.titleAccent')}</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {t('maintenancePlan.subtitle')}
                        </p>
                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl inline-block mb-8">
                            <h4 className="font-bold text-primary mb-1 font-orbitron">{t('common.hostingIncluded')}</h4>
                            <p className="text-sm text-gray-400">{t('common.hostingDetail')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                            hidden: {}
                        }}
                        className="grid grid-cols-1 gap-4"
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                                }}
                            >
                                <MaintenanceCard {...plan} delay={0} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
