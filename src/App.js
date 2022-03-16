import "./App.css";
import Listtodo from "./Todo/Listtodo";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <header>
            <div className='bg-gray-100'>
                <Listtodo />
            </div>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </header>
    );
}

export default App;
