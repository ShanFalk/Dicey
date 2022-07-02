import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <>

        <div className='footer'>
        <div className='purple-extension'></div>
        <div className='footer-main'>
            <div className='col'>
                <p className='col-header'> Development </p>
                <Link to='/about' className='footerlink cardo'>About</Link>
                <a href='https://github.com/ShanFalk' className='footerlink cardo ' target="_blank">Shannon Falk</a>
                <a href='https://github.com/Chase-Riddick' className='footerlink cardo' target="_blank">Chase Riddick</a>
                <a href='https://github.com/connorwfitch' className='footerlink cardo' target="_blank">Connor Fitch</a>
                <a href='https://github.com/keimjm' className='footerlink cardo' target="_blank">Josh Keim</a>
            </div>

            <div className='col'>
                <p className='col-header'> Backend Stack </p>
                <a href="https://docs.python.org/3/index.html" className='footerlink cardo' target="_blank">Python</a>
                <a href="https://flask.palletsprojects.com/en/1.1.x/" className='footerlink cardo' target="_blank">Flask</a>
                <div className='col-item'><a href="https://wtforms.readthedocs.io/en/2.3.x/" className='footerlink cardo' target="_blank">WTForms</a> / <a href="https://flask-wtf.readthedocs.io/en/stable/" className='footerlink cardo' target="">FlaskWTF</a></div>
                <a href="https://flask-sqlalchemy.palletsprojects.com/en/2.x/" className='footerlink cardo' target="_blank">FlaskSQLAlchemy</a>
                <a href="https://alembic.sqlalchemy.org/en/latest/" className='footerlink cardo' target="_blank">Alembic</a>
                {/* <a href="" className='footerlink cardo' rel='noreferrer' target="https://numpy.org/">NumPy</a> */}

            </div>

            <div className='col'>
            <p className='col-header'> Frontend Stack </p>
                <a href="https://www.javascript.com/" className='footerlink cardo' target="_blank">Javascript</a>
                <a href="https://reactjs.org/docs/getting-started.html" className='footerlink cardo' target="_blank">React.js</a>
                <a href="https://nodejs.org/en/" className='footerlink cardo' target="_blank">Node.js</a>
                <a href="https://github.com/raymon-zhang/react-star-rate#readme" className='footerlink cardo' rel='noreferrer' target="_blank">React-Star-Rate</a>
                <a href="https://momentjs.com/" className='footerlink cardo' rel='noreferrer' target="_blank">Moment</a>
            </div>

            {/* <div className='col'>


                <a href="" className='footerlink cardo' rel='noreferrer' target="_blank"></a>
            </div> */}


        </div>
        </div>
        </>
    )
}

export default Footer;