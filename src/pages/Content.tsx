import { ReactNode } from "react";
import { Footer } from "../components/Footer";

export const Content = ({ children }: { children: ReactNode }) => {

    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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