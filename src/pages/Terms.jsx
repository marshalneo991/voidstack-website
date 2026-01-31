export default function Terms() {
    return (
        <div className="pt-24 pb-24 container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-gray-300">
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
                    <p>
                        By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">2. Services</h2>
                    <p>
                        VoidStack provides web design, development, and maintenance services. The specific scope of work for each project will be defined in a separate agreement or proposal.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
                    <p>
                        Upon full payment, the client will own the rights to the final website design and code produced by VoidStack, excluding any third-party libraries or pre-existing tools.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">4. Payment Terms</h2>
                    <p>
                        Payment schedules will be outlined in your project proposal. We reserve the right to suspend services for late payments or non-payment.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-white">5. Limitation of Liability</h2>
                    <p>
                        VoidStack shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or websites.
                    </p>
                </section>
            </div>
        </div>
    );
}
