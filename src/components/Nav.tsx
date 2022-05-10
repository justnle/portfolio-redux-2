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
        color: `#8c8a5b`
    }
};

export default function Nav(props: PageProps): JSX.Element {
    const pages: string[] = [`About`, `Projects`, `Contact`];

    return (
        <div className="max-w-2xl mx-auto my-5 py-4 rounded-lg bg-[#8c8a5b]">
            <div className="flex flex-row gap-10 justify-center">
                {pages.map((page, index) => (
                    <div
                        className="font-bold py-2 px-4 rounded-lg hover:bg-[#5c5a3d] hover:text-[#8c8a5b] text-black active:bg-[#2f2e22] focus:outline-none focus:ring"
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
