 import './Items.css';
function Item(props){
    return(
        <>
        <div style={{display:"flex" , justifyContent:"space-around"}}>
      {props.item.map((p)=>{
        return(
<div >
    <div style={{width:"100%"}}>
      <div className='title'>{p.title}</div>
    <img src={p.imageUrl} style={{width:"100%"}}></img>
        <p className='price'>{p.price} <button className='add'>addto</button></p>
    </div>
    </div>
        )
      })}
        </div>
        </>
    )
}
export default Item;