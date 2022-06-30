import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <div className='footer'>
            <Link to='/about' className='footerlink cardo'>
                About
            </Link>
            <a href='https://www.etsy.com' className='footerlink cardo' target="_blank">Etsy</a>
            <a href='https://github.com/ShanFalk' className='footerlink cardo ' target="_blank">Shannon Falk</a>
            <a href='https://github.com/Chase-Riddick' className='footerlink cardo' target="_blank">Chase Riddick</a>
            <a href='https://github.com/connorwfitch' className='footerlink cardo' target="_blank">Connor Fitch</a>
            <a href='https://github.com/keimjm' className='footerlink cardo' target="_blank">Josh Keim</a>
        </div>
    )
}

export default Footer;