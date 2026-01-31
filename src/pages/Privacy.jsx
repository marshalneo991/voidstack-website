export default function Privacy() {
    return (
        <div className="pt-24 pb-24 container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and company details.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, communicate with you about projects, and send you technical notices or support messages.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
                    <p>
                        We do not share your personal information with third parties except as necessary to provide our services (e.g., hosting providers) or as required by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
                    <p>
                        We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at hello@voidstack.dev.
                    </p>
                </section>
            </div>
        </div>
    );
}
