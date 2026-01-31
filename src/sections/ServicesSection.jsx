import { Palette, Atom, Rocket, Layout, Search, ShoppingBag, ShieldCheck, BarChart3 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            icon: Palette,
            title: "Web Design",
            description: "Sleek, modern aesthetics designed to captivate your audience. We focus on intuitive UI/UX that drives conversions and engagement."
        },
        {
            id: 2,
            icon: Atom,
            title: "React.js",
            description: "Building scalable single-page applications with the power of React. Component-based architecture ensuring maintainability and speed."
        },
        {
            id: 3,
            icon: Rocket,
            title: "Performance",
            description: "Blazing fast load times and optimized assets. We ensure your site ranks high on Core Web Vitals and provides a smooth user experience."
        },
        {
            id: 4,
            icon: Layout,
            title: "UI/UX Design",
            description: "Intuitive, user-centered design for websites and apps that prioritizes user experience and interface consistency."
        },
        {
            id: 5,
            icon: Search,
            title: "SEO Optimization",
            description: "Technical SEO, on-page SEO, and strategy to achieve faster ranking and better visibility in search engines."
        },
        {
            id: 6,
            icon: ShoppingBag,
            title: "E-commerce Solutions",
            description: "Custom online stores using Shopify, WooCommerce, or bespoke solutions tailored to your products."
        },
        {
            id: 7,
            icon: ShieldCheck,
            title: "Maintenance & Support",
            description: "Regular updates, bug fixes, and performance monitoring to keep your website secure and running smoothly."
        },
        {
            id: 8,
            icon: BarChart3,
            title: "Analytics & Reporting",
            description: "Google Analytics setup and conversion tracking to provide actionable insights into your traffic and growth."
        }
    ];

    return (
        <section className="py-24 bg-background relative" id="services">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core <span className="text-primary">Services</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to deliver exceptional digital experiences.
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
