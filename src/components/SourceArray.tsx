import { useState } from "react";
import { Source } from "./screens/SourceScreen";
import SourceElement from "./SourceElement";
import { Arrow } from "./icons/Arrow";

interface SourceArrayProps {
    source: {
        name: string,
        description: string,
        url: Source[],
        date: string,
    }
}
export const SourceArray: React.FC<SourceArrayProps> = ({ source }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handlePress = () => {
        toggleDropdown()
    }

    return (
        <div className="relative bg-gray-100 rounded-lg">
            <Closed name={source.name} description={source.description} handlePress={handlePress} isOpen={isOpen} />
            {isOpen && (
                source.url.map((source, index) => (
                    <SourceElement key={index} source={{
                        ...source,
                        url: source.url as string,
                    }} />
                ))
            )}
        </div>
    );
};
export default SourceArray

interface ClosedProps {
    name: string,
    description: string,
    handlePress: () => void,
    isOpen: boolean,
}
const Closed: React.FC<ClosedProps> = ({ ...ClosedProps }) => {

    return (
        <li onClick={ClosedProps.handlePress} className="flex justify-between cursor-pointer items-center p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition">
            <div>
                <div>
                    <span className="text-xl font-semibold text-gray-700">{ClosedProps.name} </span>
                </div>
                <span className="text-base text-gray-500">{ClosedProps.description}</span>
            </div>
            <div className={`h-8 transition-all ${ClosedProps.isOpen ? 'rotate-90' : ''}`}>
                <Arrow />
            </div>
        </li>
    )
}

