import "./styles.css"
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Social() {
    return (
        <>
            <div className="content-social" id="social" >

                <a href="https://www.linkedin.com/in/awpadilha/" target="_blank">
                    <FaLinkedin size={50} />
                </a>

                <a href="https://github.com/awpadilha" target="_blank">
                    <FaGithub size={50} />
                </a>

                <a href="mailto:awpadilha.dev@gmail.com" target="_blank">
                    <SiGmail size={50} />
                </a>

            </div>

            <div className="footer">
                <p> awpadilha.dev - Todos os direitos reservados</p>
            </div>

        </>

    )
}

