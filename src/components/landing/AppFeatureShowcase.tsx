"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Search, LayoutGrid, MessageSquare, Shield } from "lucide-react";
import Image from "next/image";

export function AppFeatureShowcase() {
    return (
        <section className="py-16 md:py-24 lg:py-32 overflow-hidden bg-white">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-12 lg:mb-20">
                    <h2 className="text-sm font-bold leading-6 text-green-600 uppercase tracking-wide">Features</h2>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        What You Can Do on DrivLynk
                    </p>
                    <p className="mt-4 text-xl leading-7 text-slate-600 italic">
                        Built for efficiency, not browsing.
                    </p>
                </div>

                <div className="flex flex-col gap-16 lg:gap-32">
                    {/* Feature 1: Smart Ecosystem */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-1 flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] mx-auto"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-green-50 rounded-[2.5rem] blur-2xl opacity-60" />
                                <Image
                                    src="/assets/mockup-ecosystem.png"
                                    alt="DrivLynk Ecosystem"
                                    width={320}
                                    height={640}
                                    className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[2.5rem] hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        </div>
                        <div className="order-2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 border border-green-200 mb-6">
                                <LayoutGrid className="h-4 w-4" />
                                <span>Smart Ecosystem</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">Post opportunities with clear details</h3>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6 lg:mb-8">
                                No more vague posts. Whether you're a carrier, driver, or dispatcher, list your opportunities with specific requirements and expectations to attract the right matches instantly.
                            </p>
                            <ul className="space-y-4 text-left">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>Real-time opportunity and capability matching</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>Community-driven updates</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: Trust Engine */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 border border-green-200 mb-6">
                                <Shield className="h-4 w-4" />
                                <span>Trust Engine</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">Connect with verified professionals</h3>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6 lg:mb-8">
                                DrivLynk’s Trust Engine — combining FMCSA record checks & identy verification during onboarding to ensure you’re connecting with real, qualified professionals.
                            </p>
                            <ul className="space-y-4 text-left">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>FMCSA verified</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>Identity verified</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] mx-auto"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tl from-green-100 to-green-50 rounded-[2.5rem] blur-2xl opacity-60" />
                                <Image
                                    src="/assets/mockup-trust.png"
                                    alt="Trust & Verification"
                                    width={320}
                                    height={640}
                                    className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[2.5rem] hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Feature 3: Power Search */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-1 flex justify-center lg:justify-end">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] mx-auto"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-green-50 rounded-[2.5rem] blur-2xl opacity-60" />
                                <Image
                                    src="/assets/mockup-search.png"
                                    alt="Advanced Filters"
                                    width={320}
                                    height={640}
                                    className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[2.5rem] hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        </div>
                        <div className="order-2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 border border-green-200 mb-6">
                                <Search className="h-4 w-4" />
                                <span>Power Search</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">Search by role, equipment, <br /> and route type</h3>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6 lg:mb-8">
                                Find exactly what you need. Filter by specific equipment (Reefer, Flatbed, etc.), operation type (Local, Regional, OTR), and endorsements to find the perfect match in seconds.
                            </p>
                            <ul className="space-y-4 text-left">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>Granular equipment filters (Reefer, Flatbed, etc.)</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>Filter by role, carrier, driver, dispatcher, or lease-on operator to find the right connections faster.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 4: Communication Hub */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 border border-green-200 mb-6">
                                <MessageSquare className="h-4 w-4" />
                                <span>Communication Hub</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 lg:mb-6">Communicate directly inside the platform</h3>
                            <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-6 lg:mb-8">
                                No more phone tag, lost emails, or unanswered DMs. Chat directly with verified professionals and schedule meetings to discuss opportunities—all within a secure, privacy-first environment
                            </p>
                            <ul className="space-y-4 text-left">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>In-app chat for instant communication</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                                    <span>Privacy-first contact management</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[300px] mx-auto"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tl from-green-100 to-green-50 rounded-[2.5rem] blur-2xl opacity-60" />
                                <Image
                                    src="/assets/mockup-chat.png"
                                    alt="Secure Messaging"
                                    width={320}
                                    height={640}
                                    className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[2.5rem] hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
