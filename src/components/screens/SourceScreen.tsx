import { Footer } from "../Footer";
import SourceArray from "../SourceArray";
import SourceElement from "../SourceElement";
import Header from "../SourceHeader";

export interface Source {
    name: string;
    description: string;
    url: string | Source[];
    date: string;
}

export interface SourceScreenProps {
    sources: Source[];
}

export const SourceScreen: React.FC<SourceScreenProps> = ({ sources }) => {
    return (
        <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 mb-3 rounded-xl shadow-md w-full max-w-3xl">
                <Header />
                <ul className="space-y-4">
                    {sources.map((source, index) => {
                        if (Array.isArray(source.url)) {
                            return (
                                <SourceArray
                                    key={index}
                                    source={{
                                        ...source,
                                        url: source.url as Source[],
                                    }}
                                />
                            );
                        } else {
                            return (
                                <SourceElement
                                    key={index}
                                    source={{
                                        ...source,
                                        url: source.url as string,
                                    }}
                                />
                            );
                        }
                    })}
                </ul>
            </div>
            <Footer />
        </div>
    );
};
