"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Copy, Share2, Shield, Truck, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface DashboardViewProps {
    userRole: string;
    onHomeClick: () => void;
}

export function DashboardView({ userRole, onHomeClick }: DashboardViewProps) {
    const [copied, setCopied] = useState(false);
    const referralLink = "drivlynk.com/ref/user123";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 py-4 shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <button
                        onClick={onHomeClick}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/assets/logo-icon.png"
                            alt="DrivLynk Icon"
                            width={40}
                            height={40}
                            className="h-10 w-10 object-contain rounded-lg"
                            style={{ filter: 'none' }}
                        />
                        <span className="text-xl font-bold text-slate-900 tracking-tight hidden md:block">DrivLynk</span>
                    </button>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col text-right">
                            <span className="text-sm font-medium text-slate-900">Guest User</span>
                            <span className="text-xs text-slate-500 capitalize">{userRole || "Professional"}</span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <User className="h-5 w-5 text-slate-500" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">

                {/* Welcome Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-sm font-medium mb-4">
                        <CheckCircle2 className="h-4 w-4" />
                        Success! You're on the list.
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Welcome to the Fleet!
                    </h1>
                    <p className="text-xl text-slate-500">
                        You are <span className="text-green-700 font-bold">#4,520</span> in line.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Gamification Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="h-full border-green-200 bg-green-50/50 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-green-800">
                                    <Share2 className="h-5 w-5" />
                                    Launch First
                                </CardTitle>
                                <CardDescription className="text-green-700/80">
                                    Invite 3 trucking colleagues to skip the line and unlock Early Access.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                                        <p className="text-xs text-slate-500 mb-1 font-medium uppercase">Your Referral Link</p>
                                        <div className="flex items-center justify-between gap-2">
                                            <code className="text-sm text-slate-900 font-mono truncate">
                                                {referralLink}
                                            </code>
                                            <Button size="sm" variant="ghost" className="h-8 hover:bg-slate-100" onClick={handleCopy}>
                                                {copied ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-slate-500" />}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-medium text-slate-500">
                                            <span>Progress</span>
                                            <span>0/3 Joined</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full w-[10%] bg-green-600 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Onboarding Checklist */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Card className="h-full bg-white shadow-sm border-slate-200">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-slate-900">
                                    <Shield className="h-5 w-5 text-green-600" />
                                    Get Verified for Launch
                                </CardTitle>
                                <CardDescription>
                                    Complete these steps to earn your Verified Badge on day one.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <ChecklistItem completed={false} title="Upload CDL / DOT Document" subtitle="Secure verification" />
                                    <ChecklistItem completed={false} title="Set Equipment Preferences" subtitle="Get matched to the right loads" />
                                    <ChecklistItem completed={false} title="Complete Profile" subtitle="Add your experience" />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}

function ChecklistItem({ title, subtitle, completed }: { title: string, subtitle: string, completed: boolean }) {
    return (
        <div className={cn(
            "flex items-start gap-3 p-3 rounded-lg border transition-colors",
            completed ? "bg-green-50 border-green-200" : "bg-slate-50 border-slate-200"
        )}>
            <div className={cn(
                "mt-0.5 h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0",
                completed ? "border-green-600 bg-green-600" : "border-slate-300"
            )}>
                {completed && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
            </div>
            <div>
                <h4 className={cn("text-sm font-medium", completed ? "text-slate-900" : "text-slate-700")}>
                    {title}
                </h4>
                <p className="text-xs text-slate-500">{subtitle}</p>
            </div>
        </div>
    );
}
