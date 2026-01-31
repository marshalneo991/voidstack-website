import MaintenanceCard from '../components/MaintenanceCard';

export default function MaintenanceSection() {
    const plans = [
        {
            title: "Basic",
            price: "99 €",
            features: [
                "Minor changes",
                "Technical checks"
            ]
        },
        {
            title: "Standard",
            price: "199 €",
            features: [
                "Regular optimization",
                "Fast updates"
            ]
        },
        {
            title: "Premium",
            price: "349 €",
            features: [
                "Continuous UI/UX improvements",
                "SEO optimization"
            ]
        }
    ];

    return (
        <section className="py-24 bg-background border-t border-gray-900" id="maintenance">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Peace of Mind <br /><span className="text-primary">Maintenance</span></h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We ensure your website stays secure, fast, and up-to-date so you can focus on your business.
                        </p>
                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl inline-block mb-8">
                            <h4 className="font-bold text-primary mb-1">Hosting Included</h4>
                            <p className="text-sm text-gray-400">Hosting & domain included for 1 year</p>
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
