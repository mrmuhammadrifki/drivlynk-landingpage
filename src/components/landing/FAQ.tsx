"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Is DrivLynk free to use?",
        answer: "Yes, for Drivers, DrivLynk is free to create a profile, get verified, and search for and take action on opportunities.\n\nCarriers, Dispatchers, and Lease-On Operators use subscription plans to access features like connections, messaging, and premium matching tools.\n\nThis keeps the platform accessible for drivers while giving hiring companies and operators powerful tools to connect faster and scale."
    },
    {
        question: "How does the verification process work?",
        answer: "Security comes first. DrivLynk verifies identities and company details through trusted data sources and documentation, along with biometric checks to confirm users are who they say they are."
    },
    {
        question: "When will the app be launched?",
        answer: "We’re in closed beta and plan to launch publicly in Spring 2026. Join the launch list to get early access."
    },
    {
        question: "What types of logistics vehicles does DrivLynk support?",
        answer: "DrivLynk supports a broad range of equipment used across local, regional, and long-haul freight operations:\n\nBox / Straight Trucks\n• Straight Truck (Dry) — 24–26 ft\n• Reefer Straight Truck — 24–26 ft\n• Cargo Van / Sprinter\n\nTractor / Trailer\n• Dry Van — 48–53 ft\n• Reefer Trailer — 48–53 ft\n• Flatbed — 48–53 ft\n• Step Deck / Drop Deck — 48–53 ft\n• Power Only\n• Tanker\n• Car Hauler\n\nSpecialty Equipment\n• Hotshot (dually pickup with flatbed or gooseneck)"
    }
];

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 border border-green-200 mb-4">
                        <HelpCircle className="h-4 w-4" />
                        <span>Common Questions</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Everything you need to know.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Can’t find the answer you’re looking for? Reach out to our support team.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            id={index === 0 ? "faq-pricing" : undefined}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer, id }: { question: string, answer: string, id?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!id) return;

        const handleHashChange = () => {
            if (window.location.hash === `#${id}`) {
                setIsOpen(true);
            }
        };

        // Check on mount
        handleHashChange();

        // Listen for hash changes (in case user clicks link while on page)
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, [id]);

    return (
        <div id={id} className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all duration-200 hover:border-green-200 hover:bg-green-50/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <span className="text-lg font-bold text-slate-900">{question}</span>
                <span className={`ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? 'bg-green-600 border-green-600 text-white' : 'bg-white border-slate-200 text-slate-400'}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed whitespace-pre-line">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
