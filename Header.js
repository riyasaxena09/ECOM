import './Header.css';
import Button from './Button';
function Header(){
return(
<>
<header className='button'>
    <ul className='head'>
        <li>Home</li>
        <li>Store</li>
        <li>About</li>
      <li><Button className='button'></Button></li>  
    </ul>
   
</header>

</>
);
}
export default Header;