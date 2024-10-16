type FooterProps = {
    content?: string;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
    const name = (content) ? content : 'Sebastian Sonne';

    return (
        <div className='relative bottom-2 flex justify-center align-middle w-full h-6 my-2'>
            <p className="text-gray-500 font-normal">&copy; 2024
                <a href="https://github.com/sebastian-sonne"
                    className="text-slate-600 hover:text-blue-500 transition-colors" target="_blank"> {name}</a>
            </p>
        </div>
    );
}