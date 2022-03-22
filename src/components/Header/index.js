import "./styles.css"
import logo from '../../assets/logo.png';


export default function Header() {

    // function scrollToProject(){
    //     document.getElementById('projects').scrollIntoView();
    // }

    // function scrollToAbout(){
    //     document.getElementById('about').scrollIntoView();
    // }

    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView();
     }
        


    return (
        <header className>
            <img src={logo} width={60} />

            <ul className="menu">

                <li className="item-menu" onClick={()=>scrollToComponent("header")}>Home</li>
                <li className="item-menu" onClick={()=>scrollToComponent("about")}>About</li>
                <li className="item-menu" onClick={()=>scrollToComponent("projects")}>Portfolio</li>
                <li className="item-menu" onClick={()=>scrollToComponent("social")}>Contato</li>

                {/* <li className="item-menu" onClick={scrollToProject}>Projetos</li>
                <li className="item-menu" onClick={scrollToAbout}>About</li> */}
            </ul>
        </header>
    )
} 