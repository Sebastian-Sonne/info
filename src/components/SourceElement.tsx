
type SourceElementProps = {
    source: {
        name: string,
        description: string,
        url: string,
        date: string,
    }
}
export const SourceElement: React.FC<SourceElementProps> = ({ source }) => {

    return (
        <li className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">


            <div>
                <div>
                    <span className="text-xl font-semibold text-gray-700">{source.name} </span>
                    <span className="text-sm text-gray-500">{source.date} </span>
                </div>
                <span className="text-base text-gray-500">{source.description}</span>
            </div>
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
export default SourceElement