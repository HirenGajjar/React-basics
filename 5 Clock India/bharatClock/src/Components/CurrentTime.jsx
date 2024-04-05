let CurrentTime = ()=>{

    let time= new Date();
    return(<>
    <p>Current time is : {time.toLocaleDateString()} {  time.toLocaleTimeString()}</p>
    </>)
}
export default  CurrentTime