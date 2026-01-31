import PricingCard from '../components/PricingCard';

export default function PricingSection() {
    const packages = [
        {
            title: "Basic",
            price: "2.500",
            isPopular: false,
            features: [
                "Responsive website",
                "Up to 5 sections",
                "Contact form"
            ]
        },
        {
            title: "Standard",
            price: "3.500",
            isPopular: true,
            features: [
                "Custom UI/UX",
                "Multiple sections",
                "SEO basics"
            ]
        },
        {
            title: "Premium",
            price: "4.500",
            isPopular: false,
            features: [
                "Fully customized",
                "Multi-language option",
                "Technical SEO"
            ]
        }
    ];

    return (
        <section className="py-24 bg-[#0A0812]" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent <span className="text-primary">Pricing</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose the perfect package for your business needs. No hidden fees.
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
