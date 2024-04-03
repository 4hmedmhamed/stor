import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const StoreItem = ({ id, name, price, conent ,img}) => {
  


  return (
    <div  className="Appop d-flex justify-content-center border" >
  
 
    <div  className>





<div className="border rounded">
  <img src={img} style={{width:"100%" ,height: "100%"}}>
  </img>

</div>
         

   <div>
    <br></br>

<a href={ `whatsapp://send?text=http://localhost:3000/${name}&phone=+201018020470`}>
    <button className="btn btn-success">  
   طلب الباقه
</button>

</a>
 
   </div>
    <br></br>
     </div>
     </div>
  

  
  );
};

export default StoreItem;
