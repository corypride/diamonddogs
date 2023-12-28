import { Link } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import '../App.css';

export default function NotFound() {
    return (
        <main>
                    <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                        <div className="max-w-lg mx-auto text-center">
                            <div className="pb-6">
                                <img src="https://cdn1.iconfinder.com/data/icons/nature-and-farming-13/24/plant-sad-512.png" width={200} className="mx-auto" />
                            </div>
                            <h1 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                                Page not found
                            </h1>
                            <p className="text-gray-600 mt-3">
                                Sorry, the page you are looking for could not be found or has been removed.
                            </p>
                            <Link to='/'><button>Take me back Home</button></Link>
                        </div>
                    </div>
                </main>
    )
}