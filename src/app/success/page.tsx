import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SuccessPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="max-w-md w-full text-center relative z-10">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <Image
                        src="/assets/logo-full.png"
                        alt="DrivLynk"
                        width={200}
                        height={60}
                        className="h-16 w-auto object-contain"
                    />
                </div>

                {/* Success Card */}
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl shadow-green-900/10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        You're on the list!
                    </h1>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Thank you for joining DrivLynk. We've secured your spot. Keep an eye on your inbox for exclusive updates and early access news.
                    </p>

                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 hover:shadow-green-900/30 hover:-translate-y-0.5"
                        >
                            Back to Home <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>

                        <p className="text-xs text-slate-400">
                            Follow us on social media for the latest announcements.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
