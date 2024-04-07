import styles from "./Item.module.css"
const Item = ({food,btnClicked,bought} )=>{



    return (
        <li  className={`${styles.KgItem}  list-group-item ${bought && 'active'}`}
        ><span className={`${styles.KgSpan}`}>{food}</span>
        <button
        onClick={btnClicked}       
        className={`${styles.btns} btn btn-info`}>Buy</button>

        </li>
    )
    
}
export default Item

