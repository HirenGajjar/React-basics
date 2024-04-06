import styles from "./Item.module.css"
const Item = ({food,btnClicked} )=>{



    return (
        <li  className={`${styles.KgItem} list-group-item`}
        ><span className={`${styles.KgSpan}`}>{food}</span>
        <button
        onClick={btnClicked}
        
        
        className={`${styles.btns} btn btn-info`}>Buy</button>
        
        
        </li>
    )
    
}
export default Item

