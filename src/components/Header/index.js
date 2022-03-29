import "./styles.css"
import logo from '../../assets/logo.png';
import React from 'react'

export default function Header() {

    // function scrollToProject(){
    //     document.getElementById('projects').scrollIntoView();
    // }

    // function scrollToAbout(){
    //     document.getElementById('about').scrollIntoView();
    // }

    function scrollToComponent(id) {
        const verticalScroll = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset + - 120;
        window.scrollTo({ top: verticalScroll })
     }
        
    return (
        <header>
            <img src={logo} width={120} />

            <ul className="menu">

                <li className="item-menu" onClick={()=>scrollToComponent("about")}>About</li>
                <li className="item-menu" onClick={()=>scrollToComponent("projects")}>Portfolio</li>
                <li className="item-menu" onClick={()=>scrollToComponent("social")}>Contato</li>

                {/* <li className="item-menu" onClick={scrollToProject}>Projetos</li>
                <li className="item-menu" onClick={scrollToAbout}>About</li> */}
            </ul>
        </header>
    );
} 