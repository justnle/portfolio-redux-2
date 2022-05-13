export default function Projects() {
    const projects = [
        {
            name: `Twordle`,
            desc: `description of the project`,
            tech: [
                `TypeScript`,
                `React.js`,
                `Vite.js`,
                `Zustand`,
                `Tailwind CSS`
            ],
            url: `link to the project`,
            repo: `repo`,
            img: `screenshot of the project`
        },
        {
            name: `Order Up`,
            desc: `description of the project`,
            tech: [
                `TypeScript`,
                `React.js`,
                `Vite.js`,
                `Zustand`,
                `Tailwind CSS`
            ],
            url: `link to the project`,
            repo: `repo`,
            img: `screenshot of the project`
        },
        {
            name: `BZY-KAI`,
            desc: `description of the project`,
            tech: [
                `TypeScript`,
                `React.js`,
                `Vite.js`,
                `Zustand`,
                `Tailwind CSS`
            ],
            url: `link to the project`,
            repo: `repo`,
            img: `screenshot of the project`
        }
    ];

    return (
        <div className="flex flex-col gap-6 mt-5 max-w-2xl mx-auto">
            {projects.map((project, index) => (
                <div className="my-2 rounded-lg bg-[#ecebe2]">
                    <div className="py-8">
                        <h2 className="font-bold text-l">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {project.name}
                            </a>
                        </h2>
                        <p>{project.desc}</p>
                        <div className="flex gap-3 justify-center">
                            {project.tech.map((tech, index) => (
                                <div>{tech}</div>
                            ))}
                        </div>
                        <button className="rounded-full bg-black text-white font-bold px-3 py-1 mt-2">
                            {project.repo}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
