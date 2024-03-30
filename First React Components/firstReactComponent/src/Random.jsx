function Random(){
    let rand = Math.floor(Math.random() * 10);
    
    
    return <h2 style={{'backgroundColor' : "#ff0000" }}>{rand}</h2>
}
export default Random;