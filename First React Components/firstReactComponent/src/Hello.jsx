function Hello(){
    let number = 1;
let name = "ABC";
let fullName = () =>{
    return name;
}
    return <h3>Hello, Number = {number} {fullName()}</h3>
}
export default Hello