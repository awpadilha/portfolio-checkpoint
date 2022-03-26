import "./styles.css"
import perfil from '../../assets/perfil.png';


export default function About() {
    return (
        <main id="about" >
            <div className="background-texto">
                <h1>Oi, eu sou André Padilha</h1>
                <p>Sou engenheiro eletricista especializado em dispositivos médicos.</p>
                <p>Atualmente sou estudante do Certified Tech Developer pela Digital House.</p>
                <p>Cursando carreira de desenvolvedor full-stack visando especialização frontend.</p>
                <p>Obrigado por sua visita!</p>
            </div>
            <div className="background-texto">
                <img src={perfil} />
            </div>
        </main>
    )
}