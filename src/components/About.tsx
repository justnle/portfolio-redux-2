export default function About(): JSX.Element {
    return (
        <div className="max-w-2xl mx-auto my-10">
            <h1 className="text-xl">Hey, thanks for visiting!</h1>
            <br></br>
            <p>
                I am a Full Stack Engineer based in <b>Seattle, WA</b>. I love
                to design and create applications that look as great as they are
                user-friendly. At the moment, TypeScript is my favorite
                language. I am currently freelancing and looking to contribute
                to the success of a team/company that is striving to make an
                impact on the world, no matter the size. Let's collaborate!
            </p>
            <br></br>
            <p>
                Outside of the office, you can find me biking or working out at
                the gym.
            </p>
            <br></br>
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
