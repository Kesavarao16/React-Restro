import React ,{useState} from 'react'
import { itemData } from '../data'

const ItemsDisplay = () => {
const [displayItem,setDisplayItem] =useState(itemData)

  return (
   <section className='itemSection'>

{displayItem.map((p)=>{
return(
  <div className="gallery">
    <img src={p.item_img} alt={p.item_img} />
  </div>
)
})}
   </section>
  )
}

export default ItemsDisplay