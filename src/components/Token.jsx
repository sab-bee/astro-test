
import { useState } from 'react'
import './token.css'
const Token = () => {
  const [move, setMove] = useState(false)


  return (
    <div className="container cursor-pointer" >
  <div className={`${move && 'move'} carda`} id="card-u" onMouseOver={()=>{setMove(true)}} onMouseLeave={()=>{setMove(false)}}>
    <h2>This is Card</h2>
    <div className="details">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae quaerat enim
        fugiat aliquid voluptate, reiciendis accusamus quia quas aperiam ex voluptas hic odit,
        temporibus saepe non sunt. Fugiat fuga recusandae aspernatur beatae asperiores distinctio
        animi consequuntur cum dignissimos tenetur?
      </p>
      <button className="cta">confirm</button>
    </div>
  </div>
</div>
  )
}

export default Token