import styles from "./Item.module.css"

const Item = ({food} )=>{
    return (
        <li  className={`${styles.KgItem} list-group-item`}
        ><span className={`${styles.KgSpan}`}>{food}</span></li>
    )
    
}
export default Item

