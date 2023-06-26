import TimerButton from "../../FooterArea/TimerButton/TimerButton";
import NavigationStatus from "../../FooterArea/NavigationStatus/NavigationStatus";
import "./Footer.css";
import Clock from "../../FooterArea/Clock/Clock";
import MissionName from "../../FooterArea/MissionName/MissionName";

function Footer(): JSX.Element {
    return (
            <div className="container">
                <div className="circle-left">
                    <div className="iner-circle-left">
                        <NavigationStatus/>
                    </div>
                </div>
                <div className="mid">
                    <button className="swipe"></button>
                    <div className="iner-mid">
                        <Clock/>
                        <MissionName missionName="אימונים נמוך דולב" />  
                    </div>
                </div>
                <div className="circle-right">
                    <div className="iner-circle-right">
                    </div>
                    <TimerButton/>
                </div>
            </div>
    );
}

export default Footer;
