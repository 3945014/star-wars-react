import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems, PageContext} from "./utils/constants.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div className="container-fluid">
            <PageContext value={{setPage}}>
            <Header/>
            <Main page={page}/>
            <Footer/>
            </PageContext>
        </div>
    )
}

export default App
