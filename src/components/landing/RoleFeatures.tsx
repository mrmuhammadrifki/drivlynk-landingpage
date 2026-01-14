"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const features = {
    driver: {
        title: "For Drivers",
        icon: Truck,
        color: "text-blue-600",
        headline: "Drive on Your Terms",
        description: "Access premium routes and high-paying loads without the middleman taking a cut.",
        points: ["Verified Loads Only", "Instant Pay", "Route Optimization", "Driver-First Community"]
    },
    carrier: {
        title: "For Carriers",
        icon: Users,
        color: "text-green-600",
        headline: "Scale Your Fleet Fast",
        description: "Find qualified, verified drivers instantly and manage your entire fleet in one dashboard.",
        points: ["Bulk Hiring Tools", "Automated Compliance", "Asset Tracking", "Performance Analytics"]
    },
    dispatcher: {
        title: "For Dispatchers",
        icon: Briefcase,
        color: "text-indigo-600",
        headline: "Dispatch Smarter",
        description: "Connect with reliable carriers and drivers. No more ghosting or fake updates.",
        points: ["Real-Time Updates", "Unified Communication", "Smart Matching", "Digital Documentation"]
    }
};

type RoleKey = keyof typeof features;

export function RoleFeatures() {
    const [activeTab, setActiveTab] = useState<RoleKey>("driver");

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Built for Every Role in Logistics
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Whether you're behind the wheel or behind the desk, DrivLynk powers your success.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {(Object.keys(features) as RoleKey[]).map((key) => {
                            const Icon = features[key].icon;
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border",
                                        isActive
                                            ? "bg-slate-50 border-green-600 text-green-700 shadow-lg shadow-green-900/5 scale-105"
                                            : "bg-white border-slate-200 text-slate-500 hover:text-slate-700 hover:border-slate-300"
                                    )}
                                >
                                    <Icon className={cn("h-4 w-4", isActive ? "text-green-600" : "text-current")} />
                                    {features[key].title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 relative overflow-hidden min-h-[400px] shadow-2xl shadow-slate-200/50">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 grid md:grid-cols-2 gap-12 items-center"
                            >
                                <div>
                                    <h3 className={cn("text-lg font-bold mb-2 uppercase tracking-wider", features[activeTab].color)}>
                                        {features[activeTab].title}
                                    </h3>
                                    <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                        {features[activeTab].headline}
                                    </h4>
                                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                        {features[activeTab].description}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {features[activeTab].points.map((point, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-green-600" />
                                                <span className="text-slate-700 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Placeholder for Feature Image */}
                                <div className="relative aspect-video rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden group shadow-inner">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 via-white to-slate-100 opacity-80" />
                                    <features.driver.icon className="h-24 w-24 text-slate-300 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-6 left-6 right-6 z-10">
                                        <div className="h-2 bg-slate-200 rounded-full w-3/4 mb-2"></div>
                                        <div className="h-2 bg-slate-200 rounded-full w-1/2"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
