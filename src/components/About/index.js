import "./styles.css"
import perfil from '../../assets/perfil.png';


export default function About() {
    return (
        <main  id="about" >
            <div className="background-texto">
                <h1> >_ Olá, eu sou o André Padilha</h1>
                <p>Sou engenheiro eletricista especializado em dispositivos médicos.</p>
                <p>Atualmente sou estudante do Certified Tech Developer pela Digital House.</p>
                <p>Cursando a carreira de desenvolvedor Full-Stack visando a especialização em Front-End.</p>
                <p>Obrigado por sua visita!</p>
            </div>
            <div className="img">
                <img src={perfil} width={500} height={500}/>
            </div>
        </main>
    )
}