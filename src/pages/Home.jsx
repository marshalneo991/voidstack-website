import HeroSection from '../sections/HeroSection';
import PortfolioSection from '../sections/PortfolioSection';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO
                title="VoidStack | Premium Digital Solutions & Web Development"
                description="VoidStack specializes in creating high-performance, visually stunning websites and digital solutions for businesses."
                name="VoidStack"
                type="website"
            />
            <HeroSection />
            <PortfolioSection />
        </motion.div>
    );
}
