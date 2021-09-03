import './style.css'
function CenterCard (props ){
    return (
        <div className ='children' >
            <span>
                Children {props.number}
            </span>
        </div>
    )
}

export default CenterCard; 