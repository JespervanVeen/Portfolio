import logo from './img/logo.png'

const Nav = () => {
    return (  
        <div className="nav">
            <div className="logoarea">
                <img id="logo" src={logo} alt="lowl" />
            </div>
            <div className="links">
                <a href='/'>About me</a>
                <a href='/'>Projects</a>
            </div>
        </div>
    );
}
 
export default Nav;