import "./MissionName.css";

interface MissionNameProps {
	missionName :string
}

function MissionName(props: MissionNameProps): JSX.Element {
    return (
        <div className="MissionName">
			<span>{props.missionName}</span>
        </div>
    );
}

export default MissionName;
