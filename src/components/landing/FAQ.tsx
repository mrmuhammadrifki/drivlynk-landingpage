"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Is DrivLynk free to use?",
        answer: "Yes! For Drivers and Owner-Operators, DrivLynk is completely free to create a profile, get verified, and search for loads or jobs. Carriers and Dispatchers will have subscription options for advanced premium features upon full launch."
    },
    {
        question: "How does the verification process work?",
        answer: "We prioritize safety and trust. Our verification uses real-time connection to the CDL and DOT databases to confirm your credentials. We also use a quick biometric facial scan to ensure the person behind the screen matches the ID."
    },
    {
        question: "When will the app be launched?",
        answer: "We are currently in a closed beta with select partners. We plan to open access to our Waitlist members in early 2026. Join the list today to secure your handle and get early access!"
    },
    {
        question: "Can I filter for local or regional routes only?",
        answer: "Absolutely. Our Power Search allows you to filter specifically for Home Daily (Local), Home Weekly (Regional), or OTR. You can also filter by equipment type like Reefer, Flatbed, or Tanker."
    }
];

export function FAQ() {
    return (
        <section className="py-24 bg-white">
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
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden transition-all duration-200 hover:border-green-200 hover:bg-green-50/30">
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
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
