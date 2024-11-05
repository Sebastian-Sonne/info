import { useEffect } from "react"
import { SourceScreen, SourceScreenProps } from "../components/screens/SourceScreen"

const sources: SourceScreenProps = {
    sources: [
        {
            name: 'Annual Reviews',
            description: 'Artikel: Does Foreign Aid Build Peace?',
            url: 'https://www.annualreviews.org/content/journals/10.1146/annurev-polisci-041916-015516',
            date: '05.11.2024'
        },
        {
            name: 'OECD',
            description: 'Artikel: Official Development Assistance',
            url: 'https://www.oecd.org/en/topics/policy-issues/official-development-assistance-oda.html',
            date: '05.11.2024'
        },
        {
            name: 'BMZ',
            description: 'Bundesministerium für wirt. Zusammenarbeit und Entwicklung',
            url: [
                {
                    name: 'Frieden und Sicherheit',
                    description: 'Artikel: Die Ansätze des deutschen entwicklungspolitischen Engagements',
                    url: 'https://www.bmz.de/de/themen/frieden-und-sicherheit',
                    date: '05.11.2024'
                },
                {
                    name: 'Entwicklungszusammenarbeit',
                    description: 'Artikel: Von der Entwicklungshilfe zur Entwicklungszusammenarbeit',
                    url: 'https://www.bmz.de/de/ministerium/geschichte/von-entwicklungshilfe-zu-entwicklungszusammenarbeit-96652',
                    date: '05.11.2024'
                },
            ],

            date: '05.11.2024'
        },
        {
            name: 'BPB - Kurz & Knapp',
            description: 'Artikel: Entwicklungshilfe',
            url: 'https://www.bpb.de/kurz-knapp/lexika/lexikon-der-wirtschaft/19219/entwicklungshilfe/',
            date: '05.11.2024'
        },
    ]
}
export const Entwicklungshilfen = () => {

    useEffect(() => {
        document.title = 'Projekt Quellen - Entwicklungshilfen für den Frieden'
    }, [])

    return (
        <SourceScreen sources={sources.sources} />
    )
}
export default Entwicklungshilfen