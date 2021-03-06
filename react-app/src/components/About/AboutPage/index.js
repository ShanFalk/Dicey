import "./about.css"

function AboutPage () {
    return (
        <div>
            <h2>About Dicey</h2>
            <p>
                Dicey is a loose clone of the popular e-commerce site Etsy but 
                with a partiuclar focus on a hobby that all of the developers
                share: table-top RPGs! More specifically, instead of the 
                artisinally-crafted homegoods often found on Etsy, Dicey will 
                feature artisianlly-crafted homebrew content for Dungeons and 
                Dragons and other table-top RPGs. We hope you enjoy our site!
            </p>
            <div className="about-display">
                <a href="https://github.com/ShanFalk/Dicey" className="no-decor" target="_blank" rel="noreferrer">
                    GitHub Repo
                </a>
                <a href='https://www.etsy.com' className='no-decor' target="_blank" rel="noreferrer">
                    Etsy
                </a>
                <a href='https://github.com/ShanFalk' className='no-decor ' target="_blank" rel="noreferrer">
                    Shannon Falk
                </a>
                <a href='https://github.com/Chase-Riddick' className='no-decor' target="_blank" rel="noreferrer">
                    Chase Riddick
                </a>
                <a href='https://github.com/connorwfitch' className='no-decor' target="_blank" rel="noreferrer">
                    Connor Fitch
                </a>
                <a href='https://github.com/keimjm' className='no-decor' target="_blank" rel="noreferrer">
                    Josh Keim
                </a>
            </div>
        </div>

    )
}

export default AboutPage;
