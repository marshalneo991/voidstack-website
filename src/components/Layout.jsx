import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { motion } from 'framer-motion';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-background text-white selection:bg-primary selection:text-white">
            <Navbar />
            <main
                className="flex-grow pt-20"
            >
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
