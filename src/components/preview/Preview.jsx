import "./Preview.css"

export default function Preview(props) {
    return (
        <img className="preview" src={props.src}>
        </img>
    )
}