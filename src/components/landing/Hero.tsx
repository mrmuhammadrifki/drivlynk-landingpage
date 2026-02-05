"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Toast, ToastType } from "@/components/ui/Toast";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { waitlistService } from "@/services/waitlist.service";

interface HeroProps {
    onJoin: (role: string) => void;
}

export function Hero({ onJoin }: HeroProps) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Toast state
    const [toast, setToast] = useState<{
        isVisible: boolean;
        message: string;
        type: ToastType;
    }>({
        isVisible: false,
        message: "",
        type: "success",
    });

    const showToast = (message: string, type: ToastType) => {
        setToast({ isVisible: true, message, type });
    };

    const hideToast = () => {
        setToast((prev) => ({ ...prev, isVisible: false }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (!name.trim()) {
            showToast("Please enter your name", "error");
            return;
        }

        if (!email.trim()) {
            showToast("Please enter your email address", "error");
            return;
        }

        if (!role) {
            showToast("Please select your role", "error");
            return;
        }
        if (!executeRecaptcha) {
            showToast("Captcha not ready", "error");
            return;
        }

        setIsLoading(true);

        try {
            const token = await executeRecaptcha("join_waitlist");

            const response = await waitlistService.joinWaitlist({
                name: name.trim(),
                email: email.trim(),
                phone_number: phone.trim() || "",
                role: role,
                recaptcha_token: token,
            });

            if (response.success) {
                showToast(
                    response.message || "Successfully joined the waitlist!",
                    "success"
                );

                setName("");
                setEmail("");
                setPhone("");
                setRole("");

                // Redirect after brief delay - keep loading state true
                setTimeout(() => {
                    router.push("/success");
                }, 1500);
            } else {
                showToast(
                    response.message || "Failed to join waitlist. Please try again.",
                    "error"
                );
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Submission error:", error);
            showToast(
                "An unexpected error occurred. Please try again.",
                "error"
            );
            setIsLoading(false);
        }
    };

    return (
        <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-24 bg-white">
            {/* Toast Notification */}
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />

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
                    className="mx-auto max-w-5xl text-[40px] leading-[40px] md:text-[64px] md:leading-[64px] font-bold tracking-normal text-text-primary mb-4 md:mb-6"
                >
                    The platform built to connect <span className="text-transparent bg-clip-text bg-[linear-gradient(270.98deg,#0FA85B_23.12%,#1F5D3F_93.64%)]">carriers, drivers, dispatchers, and lease-on operators.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-2xl text-[16px] md:text-[20px] font-normal text-text-secondary mb-8 md:mb-10 px-4"
                >
                    A logistics-only platform built to simplify real industry connections.
                </motion.p>

                {/* Registration Form & Mockup Container */}
                <div className="mx-auto max-w-6xl mt-30 grid md:grid-cols-2 gap-12 items-center">

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
                                    <h3 className="text-text-primary font-bold text-lg flex items-center gap-2">
                                        <Truck className="h-5 w-5 text-green-700" />
                                        Be first to access <span className="text-brand">DrivLynk</span>
                                    </h3>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <Input
                                        placeholder="Enter your full name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-input-bg border-input-border-default text-input-value placeholder:text-text-placeholder focus-visible:ring-brand"
                                    />

                                    <Input
                                        placeholder="Enter your email address"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-input-bg border-input-border-default text-input-value placeholder:text-text-placeholder focus-visible:ring-brand"
                                    />

                                    <Input
                                        placeholder="Phone number (optional)"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="bg-input-bg border-input-border-default text-input-value placeholder:text-text-placeholder focus-visible:ring-brand"
                                    />

                                    <Select
                                        required
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="bg-input-bg border-input-border-default text-input-value"
                                    >
                                        <option value="" disabled>I am a...</option>
                                        <option value="carrier">Carrier Company</option>
                                        <option value="driver">Company Driver</option>
                                        <option value="dispatcher-independent">Independent Dispatcher</option>
                                        <option value="dispatch-agency">Dispatch Agency</option>
                                        <option value="lease-operator-with-truck">Lease-On Operator (With Truck)</option>
                                        <option value="lease-operator-without-truck">Lease-On Operator (Without Truck)</option>
                                    </Select>

                                    <Button
                                        type="submit"
                                        variant="accent"
                                        size="lg"
                                        className="w-full font-bold text-base md:text-lg mt-2 bg-button-primary-bg hover:opacity-90 text-white shadow-[0px_4px_8px_0px_#0FA85B7A]"
                                        isLoading={isLoading}
                                    >
                                        Join the launch list <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>

                                <p className="text-xs text-text-secondary mt-2 font-bold text-center gap-1.5">

                                    Be among the first carriers, drivers, dispatchers, and lease-on operators when <span className="text-brand">DrivLynk</span>  launches.
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
