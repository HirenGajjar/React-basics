import Item from './Item';

const FoodItems = ({food})=>{   
        return(
        <>
        <ul className="list-group">
           {
            food.map((item) =>(<Item key={item}
                  btnClicked={()=>console.log(`${item} is clicked`)}   //Passing function as a prop
                  food={item}/>))
           }
      </ul>
      </>);
}
export default FoodItems