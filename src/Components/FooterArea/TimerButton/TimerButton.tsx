import "./TimerButton.css";
import timerImage from '../../../Assets/Images/timer.png';

function TimerButton(): JSX.Element {
    return (
        <div className="Container">
            <div className="TimerButtom">
                <img className="Timer-Image" src={timerImage}></img>
            </div>
        </div>
    );
}

export default TimerButton;
