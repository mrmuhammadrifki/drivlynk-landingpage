"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSolution() {
    const problems = [
        "Fake Profiles & Scams",
        "Generic, Useless Filters",
        "Endless Spam Calls",
        "Hidden Fees"
    ];

    const solutions = [
        "100% Verified (CDL/DOT) & AI-Vetted",
        "Trucking-Specific Specs (Reefer, Flatbed)",
        "Direct, Secure In-App Messaging",
        "Transparent Pricing & No Middlemen"
    ];

    return (
        <section className="py-20 md:py-32 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        The Industry is <span className="text-red-600">Broken</span>. <br className="hidden md:block" />
                        We Fixed It.
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        See why thousands are switching from generic job boards to DrivLynk.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Old Way */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm opacity-90">
                        <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                            The Old Way
                        </h3>
                        <ul className="space-y-4">
                            {problems.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-500">
                                    <X className="h-5 w-5 text-red-500 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* DrivLynk */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-2xl p-8 border border-green-200 relative overflow-hidden shadow-xl shadow-green-900/5 ring-1 ring-green-100"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-600"></span>
                            The DrivLynk Way
                        </h3>
                        <ul className="space-y-4">
                            {solutions.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-900 font-medium">
                                    <div className="bg-green-100 p-1 rounded-full">
                                        <Check className="h-3 w-3 text-green-700 shrink-0" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
