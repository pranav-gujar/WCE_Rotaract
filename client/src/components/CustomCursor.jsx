import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width:768px)").matches;

    if (isMobile) {
        return null;
    }

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        });

        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.2,
            ease: "power3.out"
        });

        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.2,
            ease: "power3.out"
        });

        const xToBorder = gsap.quickTo(cursorBorder, "x", {
            duration: 0.5,
            ease: "power3.out"
        });

        const yToBorder = gsap.quickTo(cursorBorder, "y", {
            duration: 0.5,
            ease: "power3.out"
        });

        const handleMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToBorder(e.clientX);
            yToBorder(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        document.addEventListener("mousedown", () => {
            gsap.to([cursor, cursorBorder], {
                scale: 0.6,
                duration: 0.2,
            });
        });

        document.addEventListener("mouseup", () => {
            gsap.to([cursor, cursorBorder], {
                scale: 1,
                duration: 0.2,
            });
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mousedown", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* cursor dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-5 h-5 bg-yellow-500 rounded-full pointer-events-none z-[999] mix-blend-difference"
            />
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 w-10 h-10 border rounded-full border-yellow-500 pointer-events-none z-[999] mix-blend-difference opacity-50"
            />
        </>
    );
}
