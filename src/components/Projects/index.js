import "./styles.css"
import id1 from '../../assets/id1.png';
import id2 from '../../assets/id2.jpg';
import id3 from '../../assets/id3.png';
import id4 from '../../assets/id4.jpg';
import id5 from '../../assets/id5.png';

const data = [
  {
    id: "1",
    name: "Checkpoint Front-end I",
    link: "https://github.com/awpadilha/checkpoint-I-front-end",
    image: id1
  },

  {
    id: "2",
    name: "Rocketseat",
    link: "https://github.com/awpadilha/projetos-rocketseat",
    image: id2
  },

  {
    id: "3",
    name: "Robot Framework",
    link: "https://github.com/awpadilha/teste-robot-framework",
    image: id3
  },

  {
    id: "4",
    name: "Full Stack Javascript",
    link: "https://github.com/awpadilha/projetos-fullstackjavascript",
    image: id4
  },

  {
    id: "5",
    name: "React Projeto Limpo",
    link: "https://github.com/awpadilha/react-projeto-limpo",
    image: id5
  },
];


export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link}) => (
          <a href={link} target="_blank" rel="noreferrer">
            <li className="item-list-projects">
              <img src={image} width={250} height={250} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}  