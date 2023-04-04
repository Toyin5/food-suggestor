import Random from "./Random";
import logo from '../public/food.svg'

export default function App() {
    return (
        <div className="app">
            <h1><img src={logo} alt="logo" /> Food Generator</h1>
            <p className="app__subtitle">Welcome, hacker!</p>
            <p className="app__description">Wanna have a meal out?</p>
            <Random />
        </div>
    );
}
