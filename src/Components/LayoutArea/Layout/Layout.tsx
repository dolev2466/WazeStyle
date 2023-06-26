import CenterButton from "../../MainArea/CenterButton/CenterButton";
import Map from "../../MainArea/Map/Map";
import Timer from "../../TimerArea/Timer/Timer";
import Footer from "../Footer/Footer";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <main className="main">
                <Map mapboxToken="pk.eyJ1IjoiZG9sZXYyNDY2IiwiYSI6ImNsaWF2ZDluMzA3ZjIzcm11cWphZXc0MTUifQ.5zBIwaojYggT-Dbltlqc3A"/>
                <Timer/>
            </main>
            <footer><Footer/></footer>
        </div>
    );
}

export default Layout;
