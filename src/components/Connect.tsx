interface Socials {
    name: string;
    url: string;
}

export default function Connect(): JSX.Element {
    const socials: Socials[] = [
        {
            name: `Email`,
            url: `mailto:info@justinle.me`
        },
        {
            name: `GitHub`,
            url: `https://github.com/justnle`
        },
        {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/itsjustinle/`
        }
    ];

    return (
        <div className="flex flex-col gap-4 mt-5 max-w-2xl mx-auto">
            <h1 className="text-xl">Let's connect via</h1>
            {socials.map((social, index) => (
                <div
                    className="my-2 py-5 rounded-lg bg-[#ecebe2]"
                    key={`${social}-container-${index}`}
                >
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-extrabold text-2xl hover:text-[#727143] duration-200"
                    >
                        {social.name}
                    </a>
                </div>
            ))}
        </div>
    );
}
