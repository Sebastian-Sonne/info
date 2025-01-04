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
            name: 'BPB - Kurz & Knapp',
            description: 'Artikel: Entwicklungshilfe',
            url: 'https://www.bpb.de/kurz-knapp/lexika/lexikon-der-wirtschaft/19219/entwicklungshilfe/',
            date: '05.11.2024'
        },
        {
            name: 'GIZ - Internationale Zusammenarbeit',
            description: 'Artikel: Entwicklungshilfen in Ruanda',
            url: 'https://www.giz.de/de/weltweit/332.html',
            date: '06.11.2024'
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
                {
                    name: 'Frieden',
                    description: 'Artikel: Definition von Frieden',
                    url: 'https://www.bmz.de/de/service/lexikon/frieden-14384',
                    date: '05.11.2024'
                },
                {
                    name: 'Internationale Entwicklungszusammenarbeit',
                    description: 'Artikel: Zusammenhang Unterstüzung und Frieden',
                    url: 'https://www.bmz.de/de/darum?gad_source=1',
                    date: '05.11.2024'
                },
                {
                    name: 'Ruanda',
                    description: 'Artikel: Deutsche Entwicklungszusammenarbeit mit Ruanda',
                    url: 'https://www.bmz.de/de/laender/ruanda',
                    date: '06.11.2024'
                },
                {
                    name: 'Weltbank',
                    description: 'Artikel: Die Weltbank',
                    url: 'https://www.bmz.de/de/service/lexikon/weltbank-14938',
                    date: '09.11.2024'
                },
                {
                    name: 'Entwicklungshilfen',
                    description: 'Artikel: Warum gibt es Entwicklungshilfen?',
                    url: 'https://www.bmz.de/de/ministerium/grundsaetze-ziele/warum-entwicklungspolitik-59906',
                    date: '11.11.2024'
                },
            ],
            date: '--'
        },
        {
            name: 'LLMs',
            description: 'Benutzung von Künstlicher Intilligenz',
            url: [
                {
                    name: 'ChatGPT',
                    description: 'Verschaffung eines groben Überblicks - Quellen seperat Angegeben',
                    url: 'https://chatgpt.com/',
                    date: 'GPT-4o'
                },
            ],
            date: '--'
        },
        {
            name: 'Bildnachweis',
            description: 'Benutzte Grafiken & Statistiken',
            url: [
                {
                    name: 'Karte Fallbeispiele',
                    description: '',
                    url: 'https://snazzymaps.com/style/15/subtle-grayscale',
                    date: '09.11.2024'
                },
                {
                    name: 'OECD ODA',
                    description: 'ODA Beiträge',
                    url: 'https://www.oecd.org/en/topics/policy-issues/official-development-assistance-oda.html',
                    date: '11.11.2024'
                },
                {
                    name: 'Statista',
                    description: 'Ruanda Gesamtbevölerung',
                    url: 'https://de.statista.com/statistik/daten/studie/412436/umfrage/gesamtbevoelkerung-von-ruanda/',
                    date: '14.11.2024'
                },
                {
                    name: 'Statista',
                    description: 'Ruanda BIP pro Kopf',
                    url: 'https://de.statista.com/statistik/daten/studie/412470/umfrage/bruttoinlandsprodukt-bip-pro-kopf-in-ruanda/',
                    date: '14.11.2024'
                },
                {
                    name: 'Statista',
                    description: 'Afghanistan Menschen in Not',
                    url: 'https://de.statista.com/statistik/daten/studie/1309351/umfrage/menschen-in-not-in-afghanistan/',
                    date: '16.11.2024'
                },
                {
                    name: 'Statista',
                    description: 'Afghanistan BIP pro Kopf',
                    url: 'https://de.statista.com/statistik/daten/studie/256439/umfrage/bruttoinlandsprodukt-bip-pro-kopf-in-afghanistan/',
                    date: '14.11.2024'
                },   
            ],
            date: '--'
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