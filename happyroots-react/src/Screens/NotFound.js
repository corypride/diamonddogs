import { Link } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import '../App.css';

export default function NotFound() {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <h2>Oops, that page doesn't seem to be here.</h2>
            <Link to='/'>Home</Link>
        </div>
    )
}