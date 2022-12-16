import cookie from 'react-cookies';

interface PageProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

interface Styles {
    activeBlock: {
        backgroundColor: string;
        color: string;
    };
}

const styles: Styles = {
    activeBlock: {
        backgroundColor: `#000000`,
        color: `#ffffff`
    }
};

export default function Nav(props: PageProps): JSX.Element {
    const pages: string[] = [`About`, `Projects`, `Connect`];
    // const pages: string[] = [`About`, `Projects`, `Music`, `Connect`];

    return (
        <div className="max-w-2xl mx-auto my-5 py-4 rounded-lg bg-[#8c8a5b]">
            <div className="flex flex-row justify-around">
                {pages.map((page, index) => (
                    <div
                        className="font-bold py-2 px-4 rounded-lg hover:text-[#ffffff] text-black active:bg-[#2f2e22] duration-200 focus:outline-none focus:ring hover:cursor-pointer"
                        key={`${index}`}
                        style={
                            page === props.currentPage ? styles.activeBlock : {}
                        }
                        onClick={() => {
                            cookie.save(`currentPage`, page);
                            props.setCurrentPage(page);
                        }}
                    >
                        {page}
                    </div>
                ))}
            </div>
        </div>
    );
}
