import  XxxPreview  from "./xxxPreview";

export function XxxList({ xxxs }) {
console.log("🚀 ~ file: xxx-list.jsx:4 ~ XxxList ~ xxxs", xxxs)

    return (
        <section className="robot-list simple-cards-grid">
            { xxxs.map(xxx =>
                <XxxPreview xxx={xxx}/>  // <RobotPreview onRemoveRobot={onRemoveRobot}key={robot._id} robot={robot} />
            ) }
        </section>
    )
}
