import logo from '../logo.png'

const Nav = ({ scrollTo, scrollToExp }) => {
    const scrollTop = () => {
        const top = document.querySelector(".nav");
        top.scrollIntoView({behavior: 'smooth'})
    }

    return (
            <div className="nav">
                <div className="logoarea">
                    <img id="logo" src={logo} alt="lowl" onClick={scrollTop}/>
                </div>
                <div className="links">
                    <a onClick={scrollTo}>Projects</a>
                    <a onClick={scrollToExp}>Experience</a>
                </div>
            </div>
    ); 
}
 
export default Nav;