export default function Projects() {
    const projects = [
        {
            name: `Twordle`,
            date: `2022`,
            desc: `Wordle game clone built with a custom word list. Test driven development with Vitest.`,
            tech: [
                `TypeScript`,
                `React.js`,
                `Tailwind`,
                `Vite.js`,
                `Vitest`,
                `Zustand`
            ],
            url: `https://twordle-game.herokuapp.com/`,
            repo: `https://github.com/twopcz/twordle`,
            img: `screenshot of the project`
        },
        {
            name: `ANTKAI.com`,
            date: `2021`,
            desc: `Landing page for a Seattle based artist, with a custom coded portfolio gallery. Created with a mobile-first/responsive design in mind.`,
            tech: [`Bootstrap`, `Email.js`, `React.js`, `React Bootstrap`],
            url: `https://antkai.com/`,
            repo: `https://github.com/twopcz/bzy-kai`,
            img: `screenshot of the project`
        },
        {
            name: `Order Up`,
            date: `2020`,
            desc: `A restaurant management system that allows the admin to manage the inventory, employees and their shifts, table reservations, and food order tickets. It also incorporates user authentication and permission restrictions for specific routes in the web app.`,
            tech: [
                `Axios`,
                `Bootstrap`,
                `Express.js`,
                `MongoDB`,
                `Node.js`,
                `React.js`
            ],
            url: `https://order-up-jkrtr.herokuapp.com/`,
            repo: `https://github.com/twopcz/order-up`,
            img: `screenshot of the project`
        },
        {
            name: `Sneaker Store CRM`,
            date: `2020`,
            desc: `A customer relationship management system for a sneaker store. This CRM presents visual data and has standard features like inventory/vendor management, user authentication, and report generation.`,
            tech: [
                `Bootstrap`,
                `Bcrypt`,
                `Chart.js`,
                `Express.js`,
                `MySQL`,
                `Node.js`,
                `React.js`,
                `Sequelize`
            ],
            url: `http://jlr-sneaker-crm.herokuapp.com/`,
            repo: `https://github.com/twopcz/jlr-sneaker-crm`,
            img: `screenshot of the project`
        },
        {
            name: `Books Search Engine`,
            date: `2020`,
            desc: `A search engine for books that calls Google's books API. This app allows the user to search for books and save them to their personal library or view them on the Google Play Store.`,
            tech: [
                `Axios`,
                `Express.js`,
                `MongoDB`,
                `Mongoose`,
                `Node.js`,
                `React.js`
            ],
            url: `https://jle-google-books.herokuapp.com/`,
            repo: `https://github.com/twopcz/Budget-Tracker`,
            img: `screenshot of the project`
        }
    ];

    return (
        <div className="flex flex-col gap-6 mt-5 max-w-2xl mx-auto">
            <button className="rounded-lg bg-black text-white font-bold px-7 py-2">
                <a
                    href="https://github.com/twopcz"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </button>
            {projects.map((project, index) => (
                <div className="my-2 rounded-lg bg-[#ecebe2]">
                    <div className="py-8">
                        <h3 className="mb-2">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold text-xl uppercase"
                            >
                                {project.name}
                            </a>
                            <p className="text-xs">{project.date}</p>
                        </h3>
                        <p className="px-4 text-sm">{project.desc}</p>
                        <div className="flex gap-3 justify-center">
                            {project.tech.map((tech, index) => (
                                <div className="bg-[#9f9d75] text-white px-3 py-1 my-3 rounded-full font-bold text-xs">
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <button className="rounded-lg bg-black text-white font-bold px-7 py-2">
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noreferrer"
                            >
                                repo
                            </a>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
