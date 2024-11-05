import { Footer } from "./Footer";
import SourceElement from "./SourceElement";
import Header from "./SourceHeader";

interface SourceScreenProps {
    sources: {
        name: string,
        description: string,
        url: string,
        date: string,
    }[],
}
export const SourceScreen: React.FC<SourceScreenProps> = ({sources}) => {

    return (
        <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 mb-3 rounded-xl shadow-md w-full max-w-3xl">
                <Header />
                <ul className="space-y-4">
                    {sources.map((source, index) => (
                        <SourceElement key={index} source={source} />
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}