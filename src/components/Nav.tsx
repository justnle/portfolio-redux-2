type PageProps = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
};

const styles = {
    activeBlock: {
        backgroundColor: `#000000`,
        color: `#8c8a5b`
    },
    inactiveBlock: {
        // color: `#000000`
    }
};

export default function Nav(props: PageProps) {
    const pages = [`About`, `Tech`, `Projects`, `Random`, `Contact`];

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
