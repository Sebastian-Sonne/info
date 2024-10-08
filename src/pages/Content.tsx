import { ReactNode } from "react";
import { Footer } from "../components/Footer";

export function Content({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-col items-center min-h-lvh w-full bg-red-100">
                {children}
                <Footer />
            </div>

        </>
    )
}

export default Content