

function ForumItem(props) {

    return(
        <div className='area'>
            <h3>{props.name}:</h3>
            <p>{props.massage}</p>
        </div>
    )
}

export default ForumItem;