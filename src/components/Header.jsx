import logo from '../images/restaurants.png';
import './layout.css'

export function Header() {
  return <header className='header'>
    <h2>Our best restaurants</h2>
    <img src={logo} width={80}></img>
  </header>;
}
