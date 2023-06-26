import { useEffect, useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {
    
    const [time,setTime] = useState<string>("time....")

    useEffect(()=>{
            const timerID= setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString();
            setTime(time);
        },1000);

        return () => clearInterval(timerID)
    },[])

    return (
        <div className="Clock">
			<span>{time}</span>
        </div>
    );
}

export default Clock;
