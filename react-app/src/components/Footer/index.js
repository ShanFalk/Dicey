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
                <a href="Python" className='footerlink cardo' target="https://docs.python.org/3/index.html">Python</a>
                <a href="" className='footerlink cardo' target="https://flask.palletsprojects.com/en/1.1.x/">Flask</a>
                <div className='col-item'><a href="" className='footerlink cardo' target="https://wtforms.readthedocs.io/en/2.3.x/">WTForms</a> / <a href="" className='footerlink cardo' target=" https://flask-wtf.readthedocs.io/en/stable/">FlaskWTF</a></div>
                <a href="" className='footerlink cardo' target="https://flask-sqlalchemy.palletsprojects.com/en/2.x/">FlaskSQLAlchemy</a>
                <a href="" className='footerlink cardo' target="https://alembic.sqlalchemy.org/en/latest/">Alembic</a>
                {/* <a href="" className='footerlink cardo' rel='noreferrer' target="https://numpy.org/">NumPy</a> */}

            </div>

            <div className='col'>
            <p className='col-header'> Frontend Stack </p>
                <a href="" className='footerlink cardo' target="https://www.javascript.com/">Javascript</a>
                <a href="" className='footerlink cardo' target="https://reactjs.org/docs/getting-started.html">React.js</a>
                <a href="" className='footerlink cardo' target="https://nodejs.org/en/">Node.js</a>
                <a href="" className='footerlink cardo' rel='noreferrer' target="https://github.com/raymon-zhang/react-star-rate#readme">React-Star-Rate</a>
                <a href="" className='footerlink cardo' rel='noreferrer' target="https://momentjs.com/">Moment</a>
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