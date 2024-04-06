import styles from './FoodInput.module.css';
const FoodInput = ()=>{
    const handleChange =(e)=>{console.log(e.target.value);}
     return (
   
        <>
        <input type="text" name="" id="" placeholder="Type Here"  className={styles.foodInput} 
        
        onChange={handleChange}
        
        />
        </>
    )
}
export default FoodInput