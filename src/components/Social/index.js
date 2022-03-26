import  {FaInstagram, FaGithub,FaLinkedin} from "react-icons/fa";


export default function Social() {
    return(
        <div className="content-social" id="social" >

            <a href="https://www.instagram.com/awpadilha/">
            <FaInstagram size={80} />
            </a>
            
            <a href="https://www.linkedin.com/in/awpadilha/">
            <FaLinkedin size={80} />
            </a>

            <a href="https://github.com/awpadilha">
            <FaGithub size={80} />
            </a>
        </div>
    )
}

