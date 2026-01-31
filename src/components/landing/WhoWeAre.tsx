"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function WhoWeAre() {
    return (
        <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide uppercase mb-6">
                            Who We Are
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            More than just another app. <br />
                            <span className="text-green-700">A new standard.</span>
                        </h2>

                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* What We Are Not */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                                <XCircle className="w-5 h-5" />
                            </span>
                            We are NOT:
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                <span className="text-lg text-slate-600 font-medium">A job board cluttered with spam</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                <span className="text-lg text-slate-600 font-medium">A social media app for distraction</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                <span className="text-lg text-slate-600 font-medium">A marketplace full of random outreach</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* What We Are */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }} // Slight delay for stagger effect
                        className="bg-green-900 rounded-3xl p-8 md:p-10 shadow-xl shadow-green-900/10 border border-green-800 relative overflow-hidden text-white"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-400/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400">
                                <CheckCircle2 className="w-5 h-5" />
                            </span>
                            We ARE:
                        </h3>

                        <div className="space-y-6">
                            <p className="text-lg text-green-50 leading-relaxed font-medium">
                                Built specifically for real trucking professionals who need:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span className="text-lg text-white">Legitimate opportunities</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span className="text-lg text-white">Qualified connections</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span className="text-lg text-white">Clear, honest expectations</span>
                                </li>
                            </ul>
                            <div className="pt-4 border-t border-green-800 mt-6">
                                <p className="text-lg font-semibold text-green-200">
                                    All in one place.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
