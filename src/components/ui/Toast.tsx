"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error";

interface ToastProps {
    message: string;
    type: ToastType;
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
}

export function Toast({
    message,
    type,
    isVisible,
    onClose,
    duration = 5000,
}: ToastProps) {
    useEffect(() => {
        if (isVisible && duration > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    const isSuccess = type === "success";

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="fixed top-4 right-4 z-50 max-w-md w-full mx-4 sm:mx-0"
                >
                    <div
                        className={cn(
                            "rounded-2xl shadow-2xl border-2 p-4 flex items-start gap-3 backdrop-blur-sm",
                            isSuccess
                                ? "bg-green-50/95 border-green-200 shadow-green-900/10"
                                : "bg-red-50/95 border-red-200 shadow-red-900/10"
                        )}
                    >
                        {/* Icon */}
                        <div
                            className={cn(
                                "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                                isSuccess ? "bg-green-100" : "bg-red-100"
                            )}
                        >
                            {isSuccess ? (
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            ) : (
                                <XCircle className="w-6 h-6 text-red-600" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                            <h3
                                className={cn(
                                    "font-bold text-base mb-1",
                                    isSuccess ? "text-green-900" : "text-red-900"
                                )}
                            >
                                {isSuccess ? "Success!" : "Error"}
                            </h3>
                            <p
                                className={cn(
                                    "text-sm leading-relaxed",
                                    isSuccess ? "text-green-700" : "text-red-700"
                                )}
                            >
                                {message}
                            </p>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className={cn(
                                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                isSuccess
                                    ? "hover:bg-green-100 text-green-600"
                                    : "hover:bg-red-100 text-red-600"
                            )}
                            aria-label="Close notification"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Progress bar */}
                    {duration > 0 && (
                        <motion.div
                            initial={{ scaleX: 1 }}
                            animate={{ scaleX: 0 }}
                            transition={{ duration: duration / 1000, ease: "linear" }}
                            className={cn(
                                "h-1 rounded-b-xl origin-left",
                                isSuccess ? "bg-green-400" : "bg-red-400"
                            )}
                        />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
