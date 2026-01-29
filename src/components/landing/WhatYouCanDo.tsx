"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, MessageSquare, ShieldCheck, Zap } from "lucide-react";

export function WhatYouCanDo() {
    const features = [
        {
            title: "Post opportunities with clear details and expectations",
            icon: Zap,
            color: "text-amber-600",
            bg: "bg-amber-100"
        },
        {
            title: "Connect with verified industry professionals",
            icon: ShieldCheck,
            color: "text-green-600",
            bg: "bg-green-100"
        },
        {
            title: "Communicate directly inside the platform",
            icon: MessageSquare,
            color: "text-blue-600",
            bg: "bg-blue-100"
        },
        {
            title: "Search by role, equipment, and operation type",
            icon: Search,
            color: "text-purple-600",
            bg: "bg-purple-100"
        },
        {
            title: "Review profiles before engaging",
            icon: CheckCircle,
            color: "text-teal-600",
            bg: "bg-teal-100"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            What You Can Do on <span className="text-green-700">DrivLynk</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group"
                        >
                            <div className={`p-3 rounded-xl ${feature.bg} ${feature.color} mr-5 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium text-slate-800 pt-1 leading-snug">
                                {feature.title}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl md:text-2xl font-semibold text-slate-900 italic relative inline-block">
                        "Built for efficiency, not browsing."
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-200/50 rounded-full"></span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
