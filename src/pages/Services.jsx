import ServicesSection from '../sections/ServicesSection';
import SEO from '../components/SEO';
import { useTranslation } from '../context/LanguageContext';


export default function Services() {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title={t('meta.services.title')}
                description={t('meta.services.description')}
                name="VoidStack"
                type="website"
            />
            <ServicesSection />
        </>
    );
}
