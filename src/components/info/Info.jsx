import "./Info.css"

export default function Info(props) {
    return (
        <div className="info">
            <h2>{props?.tittle}</h2>
            <p>{props?.description}</p>
        </div>
    )
}