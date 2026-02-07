import ServicesSection from '../sections/ServicesSection';
import SEO from '../components/SEO';


export default function Services() {
    return (
        <>
            <SEO
                title="Our Services | VoidStack"
                description="Explore our range of digital services including web development, UI/UX design, and SEO optimization."
                name="VoidStack"
                type="website"
            />
            <ServicesSection />
        </>
    );
}
