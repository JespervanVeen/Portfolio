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
                    <h1>Jesper</h1>
                </div>
            </div>
        </div>  
    ); 
}
 
export default Nav;