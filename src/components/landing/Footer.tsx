import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon, Instagram, Facebook } from "lucide-react"; // Renamed to avoid conflict

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
                            <Image
                                src="/assets/logo-icon.png"
                                alt="DrivLynk"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <span className="font-bold text-xl text-slate-900 tracking-tight">DrivLynk</span>
                        </Link>
                        <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
                            The first verified professional ecosystem for the trucking industry.
                            Connecting Drivers, Carriers, and Dispatchers with trust and transparency.
                        </p>
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/drivlynk?igsh=MWl5MTB0bzl2cHE3dA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-green-100 hover:text-green-700 transition-colors"
                            >
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-4 w-4" />
                            </a>
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/share/1GWD631M8C/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-green-100 hover:text-green-700 transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links using MobileAccordion */}
                    <div className="col-span-1 md:col-span-2 grid md:grid-cols-2 gap-8">
                        {/* Product Column */}
                        <div className="md:block">
                            {/* Desktop Title */}
                            <h4 className="font-bold text-slate-900 mb-4 hidden md:block">Product</h4>

                            {/* Mobile Accordion */}
                            <details className="group md:hidden border-b border-slate-100 pb-2 mb-2">
                                <summary className="font-bold text-slate-900 flex justify-between items-center cursor-pointer list-none">
                                    Product
                                    <span className="transition-transform group-open:rotate-180">
                                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <ul className="space-y-3 text-sm text-slate-600 mt-3 pl-2">
                                    <li><a href="#role-driver" className="hover:text-green-700 transition-colors">For Drivers</a></li>
                                    <li><a href="#role-carrier" className="hover:text-green-700 transition-colors">For Carriers</a></li>
                                    <li><a href="#role-dispatcher" className="hover:text-green-700 transition-colors">For Dispatchers</a></li>
                                    <li><a href="#role-lease-operator" className="hover:text-green-700 transition-colors">For Lease-On Operators</a></li>
                                    <li><a href="#faq-pricing" className="hover:text-green-700 transition-colors">Pricing</a></li>
                                </ul>
                            </details>

                            {/* Desktop List */}
                            <ul className="space-y-3 text-sm text-slate-600 hidden md:block">
                                <li><a href="#role-driver" className="hover:text-green-700 transition-colors">For Drivers</a></li>
                                <li><a href="#role-carrier" className="hover:text-green-700 transition-colors">For Carriers</a></li>
                                <li><a href="#role-dispatcher" className="hover:text-green-700 transition-colors">For Dispatchers</a></li>
                                <li><a href="#role-lease-operator" className="hover:text-green-700 transition-colors">For Lease-On Operators</a></li>
                                <li><a href="#faq-pricing" className="hover:text-green-700 transition-colors">Pricing</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="md:block">
                            {/* Desktop Title */}
                            <h4 className="font-bold text-slate-900 mb-4 hidden md:block">Company</h4>

                            {/* Mobile Accordion */}
                            <details className="group md:hidden border-b border-slate-100 pb-2">
                                <summary className="font-bold text-slate-900 flex justify-between items-center cursor-pointer list-none">
                                    Company
                                    <span className="transition-transform group-open:rotate-180">
                                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <ul className="space-y-3 text-sm text-slate-600 mt-3 pl-2">
                                    <li><a href="mailto:support@drivlynk.com" className="hover:text-green-700 transition-colors">Contact</a></li>
                                </ul>
                            </details>

                            {/* Desktop List */}
                            <ul className="space-y-3 text-sm text-slate-600 hidden md:block">
                                <li><a href="mailto:support@drivlynk.com" className="hover:text-green-700 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs">
                        &copy; {new Date().getFullYear()} We are a LLC right now not a corporation
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <a href="https://drivlynk-pwa-web-payment.vercel.app/terms" className="hover:text-slate-900">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-900">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
