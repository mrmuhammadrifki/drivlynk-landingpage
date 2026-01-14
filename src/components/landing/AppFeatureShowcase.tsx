"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, MapPin, Truck, MessageSquare, Lock, Briefcase, User, Search, SlidersHorizontal, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusable Mobile Mockup Container
function MobileMockup({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl", className)}>
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative">
                {/* Status Bar Mock */}
                <div className="h-8 bg-white w-full flex items-center justify-between px-6 text-[10px] font-bold text-slate-900 z-20 relative">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]" />
                        <div className="w-0.5 h-2.5 bg-slate-900/30 rounded-[1px]" />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export function AppFeatureShowcase() {
    return (
        <section className="py-24 overflow-hidden space-y-32 bg-white">

            {/* 1. The Smart Ecosystem (Feed) */}
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Copy - Left */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            More Than a Job Board. <br />
                            <span className="text-green-700">It’s Your Daily Hub.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Stop doom-scrolling. Start connecting. Our AI-powered feed delivers jobs, news, and connections tailored to your CDL class and equipment type.
                        </p>
                        <ul className="space-y-4">
                            <FeaturePoint icon={Briefcase} title="AI Smart Matching" desc="We learn your lanes and equipment preferences." />
                            <FeaturePoint icon={User} title="Role-Based Content" desc="Drivers see Carriers. Owner-Operators see Dispatchers." />
                            <FeaturePoint icon={Truck} title="Instant Apply" desc="Apply with one tap directly from your feed." />
                        </ul>
                    </div>

                    {/* Visual - Right (Feed Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="absolute inset-0 bg-green-200/50 rounded-full blur-[100px] scale-75" />
                        <MobileMockup>
                            <div className="flex flex-col h-full bg-slate-50">
                                {/* App Header */}
                                <div className="px-4 py-3 bg-white border-b border-slate-100 flex justify-between items-center">
                                    <span className="font-bold text-green-700">DrivLynk</span>
                                    <div className="h-8 w-8 bg-slate-200 rounded-full animate-pulse" />
                                </div>

                                {/* Feed Content */}
                                <div className="flex-1 overflow-hidden p-4 space-y-4">
                                    {/* Match Score Tag */}
                                    <div className="flex justify-center mb-2">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full shadow-sm border border-green-200">
                                            Match Score: 95%
                                        </span>
                                    </div>

                                    {/* Job Card */}
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">L</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">CDL-A OTR Driver</h4>
                                                    <p className="text-xs text-slate-500">Lana Express • Dallas, TX</p>
                                                </div>
                                            </div>
                                            <span className="text-green-600 font-bold text-sm">$0.65 CPM</span>
                                        </div>
                                        <div className="flex gap-2 mb-3">
                                            <Badge text="Dry Van" />
                                            <Badge text="No Touch" />
                                        </div>
                                        <button className="w-full py-2 bg-green-600 text-white rounded-lg text-sm font-bold shadow-green-200 shadow-md">
                                            1-Tap Apply
                                        </button>
                                    </div>

                                    {/* Network Post */}
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex gap-3 mb-2">
                                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">JD</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm">John Doe</h4>
                                                <p className="text-xs text-slate-500">Dispatcher • 2h ago</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-2">
                                            Looking for owner-operators for dedicated lanes out of Chicago to Atlanta. Weekly pay. DM me!
                                        </p>
                                        <div className="h-24 w-full bg-slate-100 rounded-lg animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </MobileMockup>
                    </motion.div>
                </div>
            </div>

            {/* 2. The Trust Engine (Verification Checkpoint) */}
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual - Left (Verification Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 md:order-1 flex justify-center md:justify-start"
                    >
                        <div className="absolute inset-0 bg-blue-200/50 rounded-full blur-[100px] scale-75" />
                        <MobileMockup>
                            <div className="h-full bg-white flex flex-col">
                                {/* Profile Header */}
                                <div className="h-32 bg-slate-900 relative">
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                                        <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
                                            <div className="w-full h-full bg-slate-200 rounded-full overflow-hidden">
                                                <img src="/assets/logo-icon.png" className="w-full h-full object-cover opacity-80" alt="Avatar" />
                                            </div>
                                            {/* Verified Badge */}
                                            <div className="absolute bottom-1 right-1 bg-white p-0.5 rounded-full">
                                                <CheckCircle2 className="w-6 h-6 text-green-600 fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 text-center px-6">
                                    <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1">
                                        Mike Anderson
                                        <ShieldCheck className="w-5 h-5 text-blue-500" />
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-6">Owner Operator • 12 Yrs Exp</p>

                                    <div className="bg-green-50 rounded-xl p-4 border border-green-100 mb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="bg-green-100 p-2 rounded-full">
                                                <ShieldCheck className="w-5 h-5 text-green-700" />
                                            </div>
                                            <div className="text-left">
                                                <p className="font-bold text-slate-900 text-sm">Identity Verified</p>
                                                <p className="text-xs text-slate-500">Biometric Check Passed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <VerificationCard title="CDL Class A" status="Active" />
                                        <VerificationCard title="DOT Authority" status="Valid" />
                                    </div>
                                </div>
                            </div>
                        </MobileMockup>
                    </motion.div>

                    {/* Copy - Right */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Verified Real. <br />
                            <span className="text-green-700">No Fakes Allowed.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            We are building the safest network in trucking. Every member—from drivers to recruiters—must pass our verification checkpoint.
                        </p>
                        <ul className="space-y-4">
                            <FeaturePoint icon={ShieldCheck} title="Identity Shield" desc="Biometric checks to block bots." />
                            <FeaturePoint icon={Briefcase} title="Document Validation" desc="Real-time CDL & DOT/MC database checks." />
                            <FeaturePoint icon={CheckCircle2} title="The Verified Badge" desc="Earn trust instantly with your badge." />
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3. The Power Search (Filters) */}
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Copy - Left */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Filters Built for Trucking, <br />
                            <span className="text-green-700">Not Tech Jobs.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Generic job sites don't understand "Reefer" or "Hazmat." We do.
                        </p>
                        <ul className="space-y-4">
                            <FeaturePoint icon={Truck} title="Equipment First" desc="Dry Van, Flatbed, Reefer, Tanker, Step Deck." />
                            <FeaturePoint icon={ShieldCheck} title="Endorsements" desc="Filter by Hazmat (H), Tanker (N), or Doubles (T)." />
                            <FeaturePoint icon={MapPin} title="Lane Preferences" desc="Find Regional, OTR, or Local routes." />
                        </ul>
                    </div>

                    {/* Visual - Right (Filters Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="absolute inset-0 bg-indigo-200/50 rounded-full blur-[100px] scale-75" />
                        <MobileMockup>
                            <div className="h-full bg-slate-50 flex flex-col w-full">
                                {/* Header */}
                                <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3">
                                    <Search className="w-5 h-5 text-slate-400" />
                                    <div className="flex-1 bg-slate-100 h-8 rounded-lg" />
                                    <SlidersHorizontal className="w-5 h-5 text-green-600" />
                                </div>

                                {/* Modal Content */}
                                <div className="flex-1 p-5 space-y-6 bg-white m-3 rounded-t-2xl shadow-inner border border-slate-100">
                                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                                        <h3 className="font-bold text-slate-900">Filters</h3>
                                        <span className="text-green-600 text-sm font-bold">Reset</span>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Equipment</p>
                                        <div className="flex flex-wrap gap-2">
                                            <FilterChip label="Dry Van" />
                                            <FilterChip label="Reefer" active />
                                            <FilterChip label="Flatbed" />
                                            <FilterChip label="Tanker" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Endorsements</p>
                                        <div className="space-y-2">
                                            <CheckboxRow label="Hazmat (H)" checked />
                                            <CheckboxRow label="Tanker (N)" />
                                            <CheckboxRow label="Doubles/Triples (T)" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Home Time</p>
                                        <div className="flex flex-wrap gap-2">
                                            <FilterChip label="Home Daily" />
                                            <FilterChip label="Home Weekly" active />
                                        </div>
                                    </div>

                                    <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm shadow-lg mt-4">
                                        Show 42 Results
                                    </button>
                                </div>
                            </div>
                        </MobileMockup>
                    </motion.div>
                </div>
            </div>

            {/* 4. The Communication Hub (Chat) */}
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual - Left (Chat Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 md:order-1 flex justify-center md:justify-start"
                    >
                        <div className="absolute inset-0 bg-yellow-200/50 rounded-full blur-[100px] scale-75" />
                        <MobileMockup>
                            <div className="h-full bg-slate-50 flex flex-col">
                                {/* Chat Header */}
                                <div className="bg-white p-4 border-b border-slate-100 flex items-center justify-between shadow-sm z-10">
                                    <div className="flex items-center gap-3">
                                        <ChevronRight className="w-5 h-5 text-slate-400 rotate-180" />
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xs border border-green-200">
                                            RS
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">Recruiter Sarah</h4>
                                            <p className="text-[10px] text-green-600 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Online
                                            </p>
                                        </div>
                                    </div>
                                    <MoreHorizontal className="w-5 h-5 text-slate-400" />
                                </div>

                                {/* Messages */}
                                <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                                    <div className="flex justify-center my-2">
                                        <span className="text-[10px] text-slate-400 bg-slate-200/50 px-2 py-1 rounded-full">Today 9:41 AM</span>
                                    </div>

                                    <ChatBubble side="left" text="Hi Mike, saw your verified CDL-A profile. Impressive safety record!" time="9:42 AM" />
                                    <ChatBubble side="left" text="Interested in the Dallas route? We have a sign-on bonus this month." time="9:42 AM" />
                                    <ChatBubble side="right" text="Hey Sarah, thanks! Yes, I'm looking for regional runs." time="9:45 AM" />
                                </div>

                                {/* Input Area */}
                                <div className="bg-white p-3 border-t border-slate-100 safe-area-pb">
                                    <div className="flex items-center gap-2 mb-2 px-1">
                                        <Lock className="w-3 h-3 text-green-600" />
                                        <span className="text-[10px] text-green-700 font-medium">Your phone number is hidden. Chat securely.</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-slate-100 rounded-full h-10 px-4 flex items-center text-sm text-slate-400 border border-transparent focus-within:border-green-300 focus-within:bg-white transition-all">
                                            Type a message...
                                        </div>
                                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white shadow-md">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MobileMockup>
                    </motion.div>

                    {/* Copy - Right */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Hiring at the <br />
                            <span className="text-green-700">Speed of Chat.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Close deals and schedule interviews instantly without sharing your personal phone number.
                        </p>
                        <ul className="space-y-4">
                            <FeaturePoint icon={MessageSquare} title="Direct Messaging" desc="Chat directly with recruiters/dispatchers." />
                            <FeaturePoint icon={Lock} title="Privacy Protected" desc="Keep your cell number private." />
                            <FeaturePoint icon={CheckCircle2} title="Bulk Invite" desc="Recruiters can message multiple drivers in one click." />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Sub-components for cleaner code
function FeaturePoint({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg shrink-0 mt-1">
                <Icon className="w-5 h-5 text-green-700" />
            </div>
            <div>
                <h4 className="font-bold text-slate-900">{title}</h4>
                <p className="text-slate-600 text-sm">{desc}</p>
            </div>
        </li>
    );
}

function Badge({ text }: { text: string }) {
    return <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md border border-slate-200">{text}</span>;
}

function VerificationCard({ title, status }: { title: string, status: string }) {
    return (
        <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm text-center">
            <p className="text-xs font-bold text-slate-900">{title}</p>
            <p className="text-[10px] text-green-600 font-bold flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {status}
            </p>
        </div>
    );
}

function FilterChip({ label, active }: { label: string, active?: boolean }) {
    return (
        <span className={cn(
            "px-3 py-1.5 text-xs font-medium rounded-full border transition-colors",
            active ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-200" : "bg-white text-slate-600 border-slate-200"
        )}>
            {label}
        </span>
    );
}

function CheckboxRow({ label, checked }: { label: string, checked?: boolean }) {
    return (
        <label className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
            <div className={cn(
                "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                checked ? "bg-green-600 border-green-600" : "bg-white border-slate-300"
            )}>
                {checked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
            </div>
            <span className="text-sm text-slate-700 font-medium">{label}</span>
        </label>
    );
}

function ChatBubble({ side, text, time }: { side: "left" | "right", text: string, time: string }) {
    const isRight = side === "right";
    return (
        <div className={cn("flex flex-col max-w-[85%]", isRight ? "ml-auto items-end" : "mr-auto items-start")}>
            <div className={cn(
                "p-3 rounded-2xl text-xs font-medium leading-relaxed shadow-sm",
                isRight ? "bg-green-600 text-white rounded-br-none" : "bg-white text-slate-700 border border-slate-100 rounded-bl-none"
            )}>
                {text}
            </div>
            <span className="text-[9px] text-slate-400 mt-1 px-1">{time}</span>
        </div>
    );
}
