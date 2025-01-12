'use client'

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
    const lenisOptions = {
        duration: 0.8,         // Daha doğal bir scroll süresi
        smooth: true,          // Smooth scroll'u aktif et
        smoothTouch: false,    // Dokunmatik cihazlarda smooth scroll devre dışı
        // wheelMultiplier: 1.2,  // Fare tekerleği hızını ayarla
        lerp: 0.1,            // Scroll hızını belirler
    };


    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;