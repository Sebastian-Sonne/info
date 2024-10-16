import { useEffect } from "react"
import { Footer } from "../components/Footer";

export const MarsQuellen = () => {

    useEffect(() => {
        document.title = 'Quellen - Wasser auf dem Mars'
    }, [])



    return (
        <div className="bg-gray-800">
            <div className="p-5 w-screen min-h-screen bg-[url('/src/assets/media/mars/wasser-mars.png')] bg-contain  bg-no-repeat">

                <div className="p-5 mt-32 min-h-44 md:mt-56 lg:mt-80 rounded-2xl backdrop-blur-xl backdrop-brightness-75">

                    <h1 className="mb-3 font-bold text-2xl text-white">Quellen: Wassers auf dem Mars</h1>
                    <ul className="list-disc pl-5 space-y-2">
                        <QuellenLink title={'Tagesschau'} link={'https://tagesschau.de'} />
                        <QuellenLink title={'Wikipedia'} link={'https://tagesschau.de'} />
                        <QuellenLink title={'Check 24'} link={'https://tagesschau.de'} />
                        <QuellenLink title={'Github'} link={'https://tagesschau.de'} />
                        <QuellenLink title={'Süddeutsche Zeitung'} link={'https://tagesschau.de'} />
                        <QuellenLink title={'Heise Online'} link={'https://tagesschau.de'} />

                    </ul>
                </div>

                <Footer content="Simon Borstorff, Sebastian Sonne"/>
            </div>
        </div>

    );

}

type QuellenLinkProps = {
    title: string,
    link: string
}

const QuellenLink: React.FC<QuellenLinkProps> = ({ title, link }) => {
    return (
        <li className="list-item marker:text-gray-200">
            <a className="text-gray-200 font-semibold text-lg hover:text-blue-400 transition-colors" href={link}>{title}</a>
        </li>
    )
}