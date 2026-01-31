import { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [focused, setFocused] = useState(null);

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                    <label className="text-sm text-gray-400 mb-1 block">Name</label>
                    <input
                        type="text"
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                        placeholder="John Doe"
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                    />
                </div>
                <div className="relative">
                    <label className="text-sm text-gray-400 mb-1 block">Email</label>
                    <input
                        type="email"
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div>
                <label className="text-sm text-gray-400 mb-1 block">Project Type</label>
                <select className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white appearance-none">
                    <option>Web Design & Development</option>
                    <option>React.js Application</option>
                    <option>Performance Optimization</option>
                    <option>Maintenance</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label className="text-sm text-gray-400 mb-1 block">Message</label>
                <textarea
                    rows={4}
                    className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            <Button variant="primary" className="w-full">
                Send Request
            </Button>
        </form>
    );
}
