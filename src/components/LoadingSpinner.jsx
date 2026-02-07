export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0D0B16]">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
    );
}
