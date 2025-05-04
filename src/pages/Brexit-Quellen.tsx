import { useEffect } from "react"
import { SourceScreen, SourceScreenProps } from "../components/screens/SourceScreen"

const sources: SourceScreenProps = {
    "sources": [
      {
        "name": "2016 Referendum Vote Map",
        "description": "A map showing the results of the 2016 Brexit referendum by region.",
        "url": "https://en.wikipedia.org/wiki/2016_United_Kingdom_European_Union_membership_referendum#/media/File:United_Kingdom_EU_referendum_2016_area_results_2-tone.svg",
        "date": "24.04.2025"
      },
      {
        "name": "2016 Referendum Vote Data",
        "description": "Vote data from the 2016 Brexit referendum.",
        "url": "https://en.wikipedia.org/wiki/2016_United_Kingdom_European_Union_membership_referendum",
        "date": "24.04.2025"
      },
      {
        "name": "2016 Referendum Demographic Vote Data",
        "description": "Demographic analysis of how different groups voted in the 2016 Brexit referendum.",
        "url": "https://yougov.co.uk/politics/articles/15796-how-britain-voted",
        "date": "24.04.2025"
      },
      {
        "name": "Bent Bananas Myth",
        "description": "The persistent myth that the EU banned bent bananas, and how it was used in UK media.",
        "url": "https://www.theguardian.com/politics/2016/may/11/boris-johnson-launches-the-vote-leave-battlebus-in-cornwall",
        "date": "04.05.2025"
      },
      {
        "name": "Office for National Statistics (ONS)",
        "description": "Data on UK-EU trade and migration after Brexit.",
        "url": "https://www.ons.gov.uk",
        "date": "04.05.2025"
      },
      {
        "name": "NatCen Social Research – Understanding the Leave Vote",
        "description": "Post-referendum analysis on why people voted Leave, including attitudes on sovereignty and immigration.",
        "url": "https://whatukthinks.org/eu/analysis/why-did-britain-vote-to-leave-the-eu/",
        "date": "04.05.2025"
      },
      {
        "name": "BBC Brexit Timeline",
        "description": "Comprehensive timeline and explanation of Brexit developments from 2016 onward.",
        "url": "https://www.bbc.co.uk/news/uk-politics-32810887",
        "date": "04.05.2025"
      },
      {
        "name": "UK in a Changing Europe",
        "description": "Independent research institute offering in-depth Brexit analysis and data.",
        "url": "https://ukandeu.ac.uk",
        "date": "04.05.2025"
      },
      {
        "name": "House of Commons Library – Brexit Negotiations",
        "description": "Briefings on Brexit agreements, parliamentary debates, and legal implications.",
        "url": "https://commonslibrary.parliament.uk/research-briefings/cbp-7960/",
        "date": "04.05.2025"
      },
      {
        "name": "ChatGPT (OpenAI)",
        "description": "Create a structured overview of the Brexit process, including key events and dates and sources.",
        "url": "https://chat.openai.com",
        "date": "04.05.2025"
      }
    ]
  }
  
export const Brexit = () => {

    useEffect(() => {
        document.title = 'Sources - Brexit'
    }, [])

    return (
        <SourceScreen sources={sources.sources} />
    )
}
export default Brexit