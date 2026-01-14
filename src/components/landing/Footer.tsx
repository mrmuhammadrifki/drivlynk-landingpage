import Image from "next/image";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react"; // Renamed to avoid conflict

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
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-green-100 hover:text-green-700 transition-colors cursor-pointer">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </div>
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
                                    <li><a href="#" className="hover:text-green-700 transition-colors">For Drivers</a></li>
                                    <li><a href="#" className="hover:text-green-700 transition-colors">For Carriers</a></li>
                                    <li><a href="#" className="hover:text-green-700 transition-colors">For Dispatchers</a></li>
                                    <li><a href="#" className="hover:text-green-700 transition-colors">Pricing</a></li>
                                </ul>
                            </details>

                            {/* Desktop List */}
                            <ul className="space-y-3 text-sm text-slate-600 hidden md:block">
                                <li><a href="#" className="hover:text-green-700 transition-colors">For Drivers</a></li>
                                <li><a href="#" className="hover:text-green-700 transition-colors">For Carriers</a></li>
                                <li><a href="#" className="hover:text-green-700 transition-colors">For Dispatchers</a></li>
                                <li><a href="#" className="hover:text-green-700 transition-colors">Pricing</a></li>
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
                                    <li><a href="#" className="hover:text-green-700 transition-colors">About Us</a></li>
                                    <li><a href="#" className="hover:text-green-700 transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-green-700 transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-green-700 transition-colors">Contact</a></li>
                                </ul>
                            </details>

                            {/* Desktop List */}
                            <ul className="space-y-3 text-sm text-slate-600 hidden md:block">
                                <li><a href="#" className="hover:text-green-700 transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-green-700 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-green-700 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-green-700 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs">
                        &copy; {new Date().getFullYear()} DrivLynk Technologies Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <a href="#" className="hover:text-slate-900">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-900">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
