type PageProps = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
};

const styles = {
    block: {
        padding: 10
    }
};

export default function Nav(props: PageProps) {
    const pages = [`About`, `Tech`, `Projects`, `Random`, `Contact`];

    return (
        <div className="max-w-2xl mx-auto my-5 py-4 rounded-lg bg-[#8c8a5b]">
            <div className="flex flex-row gap-10 justify-center">
                {pages.map((page, index) => (
                    <div
                        className="font-bold py-2 px-4 rounded-lg"
                        key={`${index}`}
                        style={
                            (styles.block,
                            page === props.currentPage
                                ? {
                                      backgroundColor: `#000000`,
                                      color: `#8c8a5b`
                                  }
                                : {
                                      backgroundColor: `#8c8a5b`,
                                      color: `#000000`
                                  })
                        }
                        onClick={() => {
                            props.setCurrentPage(page);
                            console.log(page);
                        }}
                    >
                        {page}
                    </div>
                ))}
            </div>
        </div>
    );
}
