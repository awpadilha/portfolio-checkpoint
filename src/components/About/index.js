import "./styles.css"
import foto from '../../assets/awp.jpg'


export default function About() {
    return(
        <main id="about">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra, neque eget viverra pellentesque, elit lectus vulputate nunc, quis consectetur elit tellus sed massa. Curabitur pharetra sed leo sed posuere. Nullam non ex sit amet ex auctor mollis ac ut orci. Proin eu sollicitudin sem, ac aliquam ex. Sed ut nisl sit amet tortor lacinia consectetur. Curabitur convallis sapien tellus, sit amet auctor dolor egestas quis. Suspendisse potenti. Vivamus tempus facilisis orci, sed ultricies tellus mollis id. Suspendisse potenti. Donec ac sodales felis, at eleifend quam. Nunc gravida ligula at sagittis placerat. Mauris quis sem eu metus pellentesque tincidunt vel eu justo.
            </p>
            <img src={foto}/>
        </main>
    )
}