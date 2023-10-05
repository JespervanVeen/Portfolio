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
                <p>Hallo</p>
            </div>
        </div>  
    ); 
}
 
export default Nav;