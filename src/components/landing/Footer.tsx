import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Top Section: Logo + Contact Info */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                    {/* Left: Logo and Company Name */}
                    <div className="flex-1">
                        <Link href="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
                            <Image
                                src="/assets/logo-icon.png"
                                alt="DrivLynk"
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                            <div>
                                <span className="font-bold text-2xl text-slate-900 block">DrivLynk</span>
                                <span className="text-sm text-slate-500">Post. Connect. Done.</span>
                            </div>
                        </Link>
                        <p className="text-slate-900 font-semibold text-lg mt-6">
                            DrivLynk Technologies LLC
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                            <a
                                href="https://www.instagram.com/drivlynk?igsh=MWl5MTB0bzl2cHE3dA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white transition-all duration-300"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/share/1GWD631M8C/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand hover:text-white transition-all duration-300"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Contact Information */}
                    <div className="flex-1 lg:max-w-md">
                        <h3 className="text-brand font-bold text-sm uppercase tracking-wider mb-6">
                            CONTACT INFORMATION
                        </h3>

                        <div className="space-y-5">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">ADDRESS</p>
                                    <p className="text-slate-900 font-medium">30 N Gould St #57857</p>
                                    <p className="text-slate-900 font-medium">Sheridan, WY 82801, United States</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">EMAIL ADDRESS</p>
                                    <a
                                        href="mailto:admin@drivlynktechnologies.com"
                                        className="text-slate-900 font-medium hover:text-brand transition-colors"
                                    >
                                        support@Drivlynk.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">PHONE NUMBER</p>
                                    <a
                                        href="tel:+13072040533"
                                        className="text-slate-900 font-medium hover:text-brand transition-colors"
                                    >
                                        +1 (307) 204-0533
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Links and Copyright */}
                <div className="pt-12 border-t border-slate-200">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-6">
                        {/* Links: Grid on Mobile (2 cols), Flex Row on Desktop */}
                        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-x-8 gap-y-10 lg:gap-x-16 text-sm w-full lg:w-auto">
                            {/* Company Profile */}
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                                    COMPANY PROFILE
                                </h4>
                                <a href="#about" className="text-slate-600 hover:text-brand transition-colors font-medium">
                                    About Us Page
                                </a>
                            </div>

                            {/* Operations */}
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                                    OPERATIONS
                                </h4>
                                <a href="#products" className="text-slate-600 hover:text-brand transition-colors font-medium">
                                    Products or Services
                                </a>
                            </div>

                            {/* Legal */}
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                                    LEGAL
                                </h4>
                                <a href="https://drivlynk-pwa-web-payment.vercel.app/terms" className="text-slate-600 hover:text-brand transition-colors font-medium">
                                    Privacy Policy
                                </a>
                            </div>

                            {/* Terms */}
                            <div className="flex flex-col gap-2">
                                <h4 className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                                    TERMS
                                </h4>
                                <a href="#terms" className="text-slate-600 hover:text-brand transition-colors font-medium">
                                    Terms of Service
                                </a>
                            </div>
                        </div>

                        {/* Copyright - Left on Mobile, Right on Desktop */}
                        <div className="text-left w-full lg:w-auto lg:text-right">
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Trusted logistics network. All operations compliant with US regulations.
                            </p>
                            <p className="text-slate-400 text-xs mt-2">
                                © {new Date().getFullYear()} DrivLynk Technologies LLC. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
