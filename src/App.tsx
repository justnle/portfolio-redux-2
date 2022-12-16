import cookie from 'react-cookies';
import React, { useEffect } from 'react';
import './App.css';
import { About, Connect, Music, Nav, Projects } from './components';
interface Pages {
    About: JSX.Element;
    Connect: JSX.Element;
    // Music: JSX.Element;
    Projects: JSX.Element;
}

function App(): JSX.Element {
    const [currentPage, setCurrentPage] = React.useState('About');

    const pages: Pages = {
        About: <About />,
        Connect: <Connect />,
        // Music: <Music />,
        Projects: <Projects />
    };

    const initialPage = cookie.load(`currentPage`);

    useEffect(() => {
        if (initialPage) {
            setCurrentPage(initialPage);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App mx-5 my-5">
            <header className="">
                <h1 className="text-7xl pt-3 font-extrabold">Justin Le</h1>
            </header>
            <Nav
                currentPage={initialPage ? initialPage : currentPage}
                setCurrentPage={setCurrentPage}
            />
            {initialPage
                ? pages[initialPage as keyof Pages]
                : pages[currentPage as keyof Pages]}
        </div>
    );
}

export default App;
