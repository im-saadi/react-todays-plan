function Plan(props){
    return <>
   
    <li>{props.value}</li>
    <button className="btn btn-danger my-2 col-sm-3 offset-1" onClick={() => { props.sendData(props.id) }}>X</button>
    </>
}
export default Plan;