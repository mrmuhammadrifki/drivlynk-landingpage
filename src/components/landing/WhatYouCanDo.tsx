"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, LayoutGrid } from "lucide-react";

export function WhatYouCanDo() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                            What You Can Do on <span className="text-brand">DrivLynk</span>
                        </h2>
                        <p className="text-xl text-text-secondary italic">
                            Built for efficiency, not browsing.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Phone Mockup Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center lg:justify-end lg:pr-12"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand/5 blur-[100px] rounded-full scale-150" />
                            <Image
                                src="/assets/mockup-mobile.png"
                                alt="DrivLynk Mobile App"
                                width={300}
                                height={600}
                                className="relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Content Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-toast-success-bg border border-toast-success-border text-brand font-medium mb-8">
                            <LayoutGrid className="w-4 h-4" />
                            <span className="text-sm md:text-base">Verified profiles reduce guesswork</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                            Post opportunities with clear details
                        </h3>

                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            No more vague posts. Whether you're a carrier, driver, or dispatcher, list your opportunities with specific requirements and expectations to attract the right matches instantly.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0" />
                                <span className="text-lg text-text-secondary">Real-time opportunity and capability matching</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0" />
                                <span className="text-lg text-text-secondary">Community-driven updates</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
