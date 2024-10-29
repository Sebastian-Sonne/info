import { useEffect } from "react"
import { Footer } from "../components/Footer";

const sources = [
    { name: "Welt der Physik", url: "https://www.weltderphysik.de/gebiet/universum/nachrichten/2024/marsforschung-wasser-in-den-tiefen-des-mars/" },
    { name: "Tagesschau", url: "https://www.tagesschau.de/wissen/technologie/nasa-esa-mars-wasser-klimawandel-100.html" },
    { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Water_on_Mars" },
    { name: "Inner Workings", url: "https://lernplattform.mebis.bycs.de/pluginfile.php/88272271/mod_page/content/3/Mars.pdf" },
    { name: "National Geographic", url: "https://www.nationalgeographic.de/wissenschaft/nasa-findet-definitiv-fluessiges-wasser-auf-dem-mars"},
    { name: "ScineXX", url: "https://www.scinexx.de/news/kosmos/neue-belege-fuer-urzeitlichen-marsozean/"},
    { name: "Nasa", url: "https://science.nasa.gov/resource/mission-overview-nasas-perseverance-mars-rover/"},
    { name: "Nasa JPL", url: "https://www.jpl.nasa.gov/news/nasas-perseverance-fords-an-ancient-river-to-reach-science-target/"},
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