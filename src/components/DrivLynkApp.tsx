"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { AppFeatureShowcase } from "@/components/landing/AppFeatureShowcase";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { RoleFeatures } from "@/components/landing/RoleFeatures";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { DashboardView } from "@/components/dashboard/DashboardView";

export default function DrivLynkApp() {
    const [view, setView] = useState<"landing" | "dashboard">("landing");
    const [userRole, setUserRole] = useState<string>("");

    const handleJoin = (role: string) => {
        setUserRole(role);
        // Simulate API call/delay if needed
        setTimeout(() => {
            setView("dashboard");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 800);
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <AnimatePresence mode="wait">
                {view === "landing" ? (
                    <motion.div
                        key="landing"
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Hero onJoin={handleJoin} />
                        <SocialProof />
                        <AppFeatureShowcase />
                        <ProblemSolution />
                        <RoleFeatures />
                        <FAQ />
                        <FinalCTA />
                        <Footer />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dashboard"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <DashboardView userRole={userRole} onHomeClick={() => setView("landing")} />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
