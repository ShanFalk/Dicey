import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    // TODO: github, link to about page, link to etsy, names(link to our individual github)
    return (
        <div className='footer'>
            <Link to='/about' className='footerlink'>
                About
            </Link>
            <a href='https://www.etsy.com' className='footerlink'>Etsy</a>
            <a href='https://github.com/ShanFalk' className='footerlink'>Shannon Falk</a>
            <a href='https://github.com/Chase-Riddick' className='footerlink'>Chase Riddick</a>
            <a href='https://github.com/connorwfitch' className='footerlink'>Connor Fitch</a>
            <a href='https://github.com/keimjm' className='footerlink'>Josh Keim</a>
        </div>
    )
}

export default Footer;