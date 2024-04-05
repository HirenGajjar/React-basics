import Item from './Item';

const FoodItems = ({food})=>{
    // let food = ['a','b','c','d','e'];
    
        return(
        <>
        <ul className="list-group">
           {
            food.map((item) =>(<Item key={item} food={item}/>))
           }
      </ul>
      </>);
}
export default FoodItems