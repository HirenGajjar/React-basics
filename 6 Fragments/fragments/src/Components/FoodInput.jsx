import styles from './FoodInput.module.css';
const FoodInput = ({handleKeyDown})=>{
    
     return (
   
        <>
        <input type="text" name="" id="" placeholder="Type Here"  className={styles.foodInput} 
        
        onKeyDown={handleKeyDown}
        
        />
        </>
    )
}
export default FoodInput