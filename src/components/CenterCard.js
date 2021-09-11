import './style.css'
function CenterCard (props){
    return (
        <div className ='children' >
            <span>
                {props.children}
            </span>
        </div>
    )
}

export default CenterCard; 