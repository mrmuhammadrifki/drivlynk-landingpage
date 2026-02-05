"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface RecaptchaProviderProps {
    children: React.ReactNode;
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
    // Fallback to hardcoded key if env var fails
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfyJWEsAAAAAB9kMaQrElCmIqh_e3MxrQw0bWB-";

    if (!siteKey) {
        console.warn("Recaptcha site key is missing");
        return <>{children}</>;
    }

    console.log("Recaptcha initialized with key length:", siteKey.length);

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={siteKey}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
