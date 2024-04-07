import styles from '../App.module.css' 
const Display = ({calVal})=>{
    return (<>
       <input type="text" className={styles.display} readOnly value={calVal}/>
       </>);
}
export default Display