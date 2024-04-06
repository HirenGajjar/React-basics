import styles from "./Item.module.css"
const Item = ({food} )=>{


    let btnClicked =(event)=>{
        console.log(event);
        console.log(`Add ${food}`)
    }
    return (
        <li  className={`${styles.KgItem} list-group-item`}
        ><span className={`${styles.KgSpan}`}>{food}</span>
        <button
        onClick={(event)=>btnClicked(event)}
        
        
        className={`${styles.btns} btn btn-info`}>Buy</button>
        
        
        </li>
    )
    
}
export default Item

