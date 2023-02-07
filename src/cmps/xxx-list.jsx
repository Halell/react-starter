// import { RobotPreview } from "./RobotPreview";

export function XxxList({ xxxs }) {

    return (
        <section className="robot-list simple-cards-grid">
            { xxxs.map(xxx =>
                <div>{ xxx.name }</div>  // <RobotPreview onRemoveRobot={onRemoveRobot}key={robot._id} robot={robot} />
            ) }
        </section>
    )
}
