import Item from './Item';
import { useState } from 'react';

const FoodItems = ({food})=>{   

      let [activeItems,setActiveItems] = useState([]);
let onBuyBtn = (item,e)=>{
            let newItems = [...activeItems,item];
            setActiveItems(newItems);
}

        return(
        <>
        <ul className="list-group">
           {
            food.map((item) =>(<Item key={item}
                  bought={activeItems.includes(item)}
                  btnClicked={(e)=>onBuyBtn(item,e)}
                  food={item}/>))
           }
      </ul>
      </>);
}
export default FoodItems