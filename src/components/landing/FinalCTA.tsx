"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#022c22] rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-green-900/20"
                    >
                        {/* Decorative blobs inside card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-700/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#064e3b] px-4 py-1.5 text-sm font-medium text-green-300 border border-green-800 mb-8">
                                <Sparkles className="h-4 w-4" />
                                <span>Join the revolution</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200"> The New Standard </span>
                                for
                                <br />
                                Logistics Networking
                            </h2>

                            <Button
                                onClick={scrollToTop}
                                size="lg"
                                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-green-900/50 hover:shadow-green-500/30 transition-all hover:scale-105"
                            >
                                Join the launch list <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>

                            <p className="mt-10 text-lg text-green-100/80 max-w-2xl">
                                Be among the first carriers, drivers, dispatchers, and lease-on operators when DrivLynk launches.
                            </p>

                            <p className="mt-4 text-sm text-green-200/50">
                                No credit card required. Unsubscribe anytime.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
