import './MyHeader.css'

export default function MyHeader(props){
    return (
        <header className='main-header'>
            <h1 className='title'>{props.tittle}</h1>
        </header>
    )
}