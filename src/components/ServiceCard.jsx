

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
    return (
        <div
            className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] relative overflow-hidden animate-fade-in-up opacity-0"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon size={100} />
            </div>

            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
