import logo from './img/logo.png'

const Nav = () => {
    return (
        <div className="cover">
            <div className="nav">
                <div className="logoarea">
                    <img id="logo" src={logo} alt="lowl" />
                </div>
                <div className="links">
                    <a href='/'>About me</a>
                    <a href='/'>Projects</a>
                </div>
            </div>
            <div className="navcenter-area">
                <div className="infocard">
                    <div className="title">
                        <h1>Jesper</h1>
                        <h3>Software Developer</h3>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h1>About me</h1>
                        </div>
                        <div className="card">
                            <h1>Projects</h1>
                        </div>
                        <div className="card">
                            <h1>Resume</h1>
                        </div>
                        <div className="card">
                            <h1>GitHub</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    ); 
}
 
export default Nav;