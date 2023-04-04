import Random from "./Random";
import Footer from "./Footer";
import logo from '../public/food.svg'

export default function App() {
    return (
        <div className="app">
            <h1><img src={logo} alt="logo" /> Food Generator</h1>
            <p className="app__subtitle">Welcome, Hacker!</p>
            <p className="app__description">Wanna have a meal out?</p>
            <Random />
	    <Footer />
        </div>
    );
}
