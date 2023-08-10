
function Cart({table}){
    console.log(table.length)
    return(
        <>
        <div style={{display:"flex",margin:"10px"}}>
            <span style={{marginRight:"70px" ,}}>Item</span>
            <span style={{marginRight:"30px"}}>Price</span>
            <span  style={{marginRight:"50px"}}>quantity</span>
        </div>
    {
           table.map((pro,proIndex)=>{
            return(
                <div><img src={pro.imageUrl} width={40}></img>
                <span>{pro.title}</span>
              
                <span>{pro.quantity}</span>
                
                <span>${pro.price}</span>
                <button>Remove</button>
                </div>
            )
           })
              }
        
    <h2>Total
    {table.map(item=>item.price).reduce((total,value)=>total+value,0)
}
    </h2>

    

   
</>
    )
}
export default Cart;