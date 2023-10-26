import logo from '../logo.png'

const Nav = ({ scrollTo, scrollToExp }) => {
    return (
            <div className="nav">
                <div className="logoarea">
                    <img id="logo" src={logo} alt="lowl" />
                </div>
                <div className="links">
                    <a onClick={scrollTo}>Projects</a>
                    <a onClick={scrollToExp}>Experience</a>
                </div>
            </div>
    ); 
}
 
export default Nav;