import { useEffect } from "react"
import { SourceScreen } from "../components/SourcePage"

const sources = [
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
]
export const Entwicklungshilfen = () => {

    useEffect(() => {
        document.title = 'Projekt Quellen - Entwicklungshilfen für den Frieden'
    }, [])

    return (
        <SourceScreen sources={sources}/>
    )
}
export default Entwicklungshilfen