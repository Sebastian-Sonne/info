import { useEffect } from "react"
import { Footer } from "../components/Footer";

const sources = [
    { name: "Source 1", url: "https://source1.com" },
    { name: "Source 2", url: "https://source2.com" },
    { name: "Source 3", url: "https://source3.com" },
];

export const SourcesPage = () => {

    useEffect(() => {
        document.title = 'Projekt Quellen - Wasser auf dem Mars'
    }, [])

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
            <Footer content="Simon Borstorff, Sebastian Sonne" />
        </div>
    );
};

type SourceElementProps = {
    source: {
        name: string,
        url: string
    }
}
export const SourceElement: React.FC<SourceElementProps> = ({ source }) => {

    return (
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
            <span className="text-lg text-gray-700">{source.name}</span>
            <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
            >
                <button className="p-3 bg-blue-500 hover:bg-blue-700 transition-colors rounded-xl">Aufrufen</button>

            </a>
        </li>
    );
}

export const Header = () => {

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
                Projekt Quellen
            </h1>
            <p className="text-gray-600 text-center mb-6">
                Die folgended Quellen wurden für die Beschaffung der Informationen benutzt:
            </p>
        </>
    );
}