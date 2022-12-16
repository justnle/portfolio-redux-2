export default function About(): JSX.Element {
    return (
        <div className="max-w-2xl mx-auto my-10">
            <h1 className="text-xl">Hey, thanks for visiting!</h1>
            <br />
            <p>
                I am a Full Stack Engineer based in <b>Seattle, WA</b>. I love
                to design and create applications that look as great as they are
                user-friendly using React and TypeScript. I am currently working
                as the Lead Front-End Developer at{' '}
                <b>
                    <a
                        className="text-[#7378e8] hover:text-[#4e4f94] cursor-pointer"
                        href="https://www.samaritan.city/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Samaritan
                    </a>
                </b>
                , contributing to the product that helps those experiencing
                homelessness gain the social and financial support needed to
                find a stable home.
            </p>
            <br />
            <p>
                Outside of the office, you can find me biking or working out at
                the gym.
            </p>
            <br />
            <button
                type="button"
                className="text-white bg-black rounded-lg py-3 px-5 hover:bg-[#8c8a5b] duration-200"
            >
                <a
                    href="mailto:info@justinle.me"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold"
                >
                    Say Hello 👋
                </a>
            </button>
        </div>
    );
}
