import styles from './FoodInput.module.css';
const FoodInput = ()=>{
    return (
        <>
        <input type="text" name="" id="" placeholder="Type Here"  className={styles.foodInput} 
        
        onChange={(e)=>console.log(e)}
        
        />
        </>
    )
}
export default FoodInput