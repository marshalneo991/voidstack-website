import { useTranslation } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Privacy() {
    const { t } = useTranslation();
    const sections = t('privacy.sections', { returnObjects: true });

    return (
        <div className="pt-24 pb-24 container mx-auto px-6 max-w-4xl">
            <SEO
                title={`${t('privacy.title')} | VoidStack`}
                description="Privacy Policy for VoidStack."
                name="VoidStack"
                type="website"
            />
            <h1 className="text-4xl font-bold mb-8 font-orbitron">{t('privacy.title')}</h1>
            <p className="text-gray-400 mb-8">{t('common.lastUpdated')}: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-300">
                {sections.map((section, idx) => (
                    <section key={idx}>
                        <h2 className="text-2xl font-semibold mb-4 text-white font-orbitron">{section.title}</h2>
                        <p>
                            {section.content}
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
}
