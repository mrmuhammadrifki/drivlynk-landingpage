"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck } from "lucide-react";

interface HeroProps {
    onJoin: (role: string) => void;
}

export function Hero({ onJoin }: HeroProps) {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !role) return;

        setIsLoading(true);
        setTimeout(() => {
            onJoin(role);
        }, 1000);
    };

    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 bg-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">

                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <Link href="/">
                        <Image
                            src="/assets/logo-full.png"
                            alt="DrivLynk Logo"
                            width={240}
                            height={80}
                            className="h-20 w-auto object-contain drop-shadow-sm transition-all duration-300 hover:scale-105"
                            style={{ filter: 'none' }}
                        // Ensuring no dark mode filters mess this up
                        />
                    </Link>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl mb-6"
                >
                    The First <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600">Verified Talent</span> Ecosystem for the Trucking Industry.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl mb-10"
                >
                    Stop relying on spammy job boards. Connect with verified Drivers, Carriers, and Dispatchers in a secure, AI-powered marketplace.
                </motion.p>

                {/* Registration Form & Mockup Container */}
                <div className="mx-auto max-w-6xl mt-12 grid md:grid-cols-2 gap-12 items-center">

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full max-w-md mx-auto md:mx-0"
                    >
                        <div className="glass-panel p-2 rounded-xl md:rounded-2xl shadow-xl shadow-green-900/5 hover:shadow-green-900/10 transition-shadow">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 md:p-6 bg-white rounded-xl border border-slate-100">
                                <div className="text-left mb-2">
                                    <h3 className="text-slate-900 font-bold text-lg flex items-center gap-2">
                                        <Truck className="h-5 w-5 text-green-700" />
                                        Reserve your handle
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Input
                                        placeholder="Enter your email address"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-green-600"
                                    />

                                    <Select
                                        required
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="bg-slate-50 border-slate-200 text-slate-900"
                                    >
                                        <option value="" disabled>I am a...</option>
                                        <option value="driver">CDL Driver</option>
                                        <option value="owner-operator">Owner-Operator</option>
                                        <option value="carrier">Carrier Company</option>
                                        <option value="dispatcher">Dispatcher</option>
                                    </Select>

                                    <Button
                                        type="submit"
                                        variant="accent"
                                        size="lg"
                                        className="w-full font-bold text-base md:text-lg mt-2 bg-green-700 hover:bg-green-800 text-white shadow-lg shadow-green-700/20"
                                        isLoading={isLoading}
                                    >
                                        Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>

                                <p className="text-xs text-slate-500 mt-2 text-center flex items-center justify-center gap-1.5">
                                    <CheckCircle2 className="h-3 w-3 text-green-700" />
                                    Join 14,000+ professionals on the list.
                                </p>
                            </form>
                        </div>
                    </motion.div>

                    {/* Mockup Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative hidden md:block"
                    >
                        <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full transform rotate-12 scale-75"></div>
                        <Image
                            src="/assets/mockup-mobile.png"
                            alt="DrivLynk Mobile App"
                            width={320}
                            height={640}
                            className="relative z-10 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
