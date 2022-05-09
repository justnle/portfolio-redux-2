import React from 'react';
import './App.css';
import { Nav, Projects } from './components';

function App() {
    const [currentPage, setCurrentPage] = React.useState('About');

    const pages = {};

    return (
        <div className="App">
            <header>
                <h1 className="text-7xl font-extrabold">Justin Le</h1>
            </header>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}

export default App;
