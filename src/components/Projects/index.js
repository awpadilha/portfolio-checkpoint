import "./styles.css"

const data = [
  {
    id: "1",
    name: "Checkpoint Front-end I",
    link: "https://github.com/awpadilha/checkpoint-I-front-end",
    image:
      "https://i.postimg.cc/FFfzN7MG/id1.png",
  },
  {
    id: "2",
    name: "Rocketseat",
    link: "https://github.com/awpadilha/projetos-rocketseat",
    image:
      "https://i.postimg.cc/X7SjWxc7/id2.jpg",
  },
  {
    id: "3",
    name: "Robot Framework",
    link: "https://github.com/awpadilha/teste-robot-framework",
    image:
      "https://i.postimg.cc/1XMJvvyc/id3.png",
  },
  {
    id: "4",
    name: "Full Stack Javascript",
    link: "https://github.com/awpadilha/projetos-fullstackjavascript",
    image:
      "https://i.postimg.cc/HsTyHQg5/id4.jpg",
  },
  {
    id: "5",
    name: "Web Moderno",
    link: "https://github.com/awpadilha/curso-web-moderno",
    image:
      "https://i.postimg.cc/tgdbXVyZ/id5.jpg",
  },
];


export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ image, name, link}) => (
          <a href={link}>
            <li className="item-list-projects">
              <img src={image} width={300} />
              <h3 className="name-project">{name}</h3>
            </li>
          </a>
        ))}
      </ul>
    </div>
  )
}  