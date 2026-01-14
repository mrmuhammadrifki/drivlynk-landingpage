"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users } from "lucide-react";

export function SocialProof() {
    const [count, setCount] = useState(14000);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setCount((prev) => {
                    if (prev >= 14205) {
                        clearInterval(interval);
                        return 14205;
                    }
                    return prev + Math.floor(Math.random() * 5);
                });
            }, 50);
            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <section className="py-12 bg-white border-y border-slate-100" ref={ref}>
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="bg-green-100 p-3 rounded-full">
                        <Users className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tabular-nums">
                            {count.toLocaleString()}+
                        </h3>
                        <p className="text-slate-500 text-sm">Trucking Professionals Joined</p>
                    </div>
                </div>

                <div className="text-center md:text-left max-w-sm">
                    <p className="text-lg font-medium text-slate-900 mb-1">
                        Don't get left behind.
                    </p>
                    <p className="text-slate-500 text-sm">
                        Reserve your handle today and be part of the first verified trucking ecosystem.
                    </p>
                </div>
            </div>
        </section>
    );
}
