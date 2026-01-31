"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileWarning, SearchX, Clock, Ban, CheckCircle2, ShieldCheck, Zap, UserCheck } from "lucide-react";

export function ProblemSolution() {
    const problems = [
        {
            title: "Legitimate Opportunities Are Hard to Find",
            description: "Drivers, carriers, dispatchers, and lease-on operators rely on scattered platforms and word-of-mouth to find opportunities, making it difficult to identify what’s real and worth pursuing.",
            icon: SearchX
        },
        {
            title: "It’s Difficult to Know Who’s Real and Verified",
            description: "Unverified profiles and unclear information make it hard to trust who you’re speaking with, leading to wasted time and uncertainty before conversations even begin.",
            icon: ShieldCheck
        },
        {
            title: "Poor-Fit Connections Waste Time",
            description: "Unqualified outreach, unclear requirements, and mismatched expectations cause connections to fall apart before they ever move forward.",
            icon: Clock
        },
        {
            title: "Unqualified people reach out constantly",
            description: "",
            icon: Ban
        },
        {
            title: "Trucks sit when they should be moving",
            description: "",
            icon: AlertCircle
        }
    ];

    const solutions = [
        {
            title: "Verified profiles reduce guesswork",
            icon: UserCheck
        },
        {
            title: "Opportunity-based posts replace random DMs",
            icon: Zap
        },
        {
            title: "Clear requirements prevent poor-fit connections",
            icon: CheckCircle2
        },
        {
            title: "Role-based search gets you to the right people faster",
            icon: SearchX // Using a different icon or reusing one if appropriate, Search is better
        }
    ];

    return (
        <div className="bg-slate-50">
            {/* NEW SECTION — PROBLEM */}
            <section className="py-20 md:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                The Current Problem in the <span className="text-error-800">Logistic Industry</span>
                            </h2>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                                There’s no true home for trucking professionals to connect. <br />
                                The issue isn’t the industry — <span className="font-semibold text-text-primary">it’s access.</span>
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-16">
                        {problems.map((item, index) => {
                            // First 3 items span 2 columns each (3 items per row on LG)
                            // Last 2 items span 3 columns each (2 items per row on LG: 50%/50%)
                            const colSpanClass = index >= 3 ? "lg:col-span-3" : "lg:col-span-2";
                            const hasDescription = item.description !== "";

                            return (
                                <motion.div

                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`${colSpanClass} bg-white rounded-2xl p-8 border border-white shadow-[0px_4px_8px_0px_#161A1729] hover:shadow-lg transition-shadow ${!hasDescription ? "flex flex-row items-center justify-center gap-4 text-left" : "flex flex-col"}`}
                                >
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-error-800 shrink-0 ${hasDescription ? "mb-6" : ""}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-text-primary ${hasDescription ? "text-xl mb-3" : "text-lg"}`}>
                                            {item.title}
                                        </h3>
                                        {hasDescription && (
                                            <p className="text-text-secondary leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p className="text-xl md:text-2xl font-serif italic text-text-secondary">
                            "Too many deals fall apart before they even start."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* NEW SECTION — SOLUTION */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-green-50/50 skew-y-3 transform origin-top-left -z-10 h-full w-full" />

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
                                How <span className="text-brand">DrivLynk</span> Solves This
                            </h2>
                            <p className="text-xl text-text-secondary leading-relaxed mb-10">
                                DrivLynk removes friction by organizing the industry by role, verification, and intent.
                            </p>

                            <div className="space-y-6">
                                {solutions.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                                        className="flex items-center p-4 rounded-xl bg-toast-success-bg border border-toast-success-border"
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-brand mr-4 shrink-0">
                                            {index === 3 ? <SearchX className="w-5 h-5 !rotate-90" style={{ transform: 'scaleX(-1)' }} /> : <item.icon className="w-5 h-5" />}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-toast-success-text">
                                            {item.title}
                                        </h3>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <p className="text-xl font-serif italic text-text-secondary">
                                    "No noise. No confusion. Just real connections that make sense."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-green-200 to-green-50 rounded-[2.5rem] blur-3xl opacity-60" />
                            {/* Placeholder for a solution graphic */}
                            <div className="relative bg-white rounded-[2.5rem] shadow-[0px_4px_48px_0px_#161A1733] p-6 md:p-8 border border-slate-100 aspect-square flex flex-col justify-center items-center overflow-hidden">
                                <div className="absolute top-0 w-full h-full bg-[url('/assets/grid.svg')] opacity-[0.03]"></div>

                                <div className="w-full max-w-sm space-y-4 relative z-10">
                                    {/* Mock UI Elements */}
                                    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-lg border border-slate-100 mb-6 animate-pulse-slow">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">JD</div>
                                            <div>
                                                <div className="h-2.5 w-24 bg-slate-200 rounded mb-1.5" />
                                                <div className="h-2 w-16 bg-green-100 rounded text-xs text-green-700 px-1">Verified</div>
                                            </div>
                                        </div>
                                        <div className="h-8 w-20 bg-green-600 rounded-lg" />
                                    </div>

                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="h-2.5 w-32 bg-slate-300 rounded" />
                                            <div className="h-2.5 w-12 bg-slate-200 rounded" />
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded mb-2" />
                                        <div className="h-2 w-3/4 bg-slate-200 rounded" />
                                    </div>

                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 opacity-60">
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="h-2.5 w-28 bg-slate-300 rounded" />
                                            <div className="h-2.5 w-12 bg-slate-200 rounded" />
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded mb-2" />
                                        <div className="h-2 w-2/3 bg-slate-200 rounded" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
