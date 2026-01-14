"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSolution() {
    const [view, setView] = useState<"old" | "new">("new");
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
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
                        The Industry is <span className="text-red-600">Broken</span>. <br className="hidden md:block" />
                        We Fixed It.
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                        See why thousands are switching from generic job boards to DrivLynk.
                    </p>
                </div>

                {/* Mobile Toggle */}
                <div className="flex justify-center mb-8 md:hidden">
                    <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm flex items-center">
                        <button
                            onClick={() => setView("old")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                                view === "old" ? "bg-slate-100 text-slate-700 shadow-sm" : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            The Old Way
                        </button>
                        <button
                            onClick={() => setView("new")}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                                view === "new" ? "bg-green-600 text-white shadow-md" : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            DrivLynk
                        </button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* The Old Way */}
                        <div className={cn(
                            "bg-white rounded-2xl p-8 border border-slate-200 shadow-sm opacity-90 transition-all duration-300",
                            "md:block", // Always show on desktop
                            view === "old" ? "block" : "hidden" // Toggle on mobile
                        )}>
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
                            className={cn(
                                "bg-white rounded-2xl p-8 border border-green-200 relative overflow-hidden shadow-xl shadow-green-900/5 ring-1 ring-green-100",
                                "md:block", // Always show on desktop
                                view === "new" ? "block" : "hidden" // Toggle on mobile
                            )}
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
            </div>
        </section>
    );
}
