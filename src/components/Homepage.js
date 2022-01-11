import {FaLinkedin, FaGithub} from "react-icons/fa"

const Homepage = () => {
    return (
        <>
        <section className="homepage">
            <div className="overlay">
            <h1>  Etukudoh Marvellous </h1>
            <p>Full Stack Web Developer</p>
            
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/marvvy-g18/" target="blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Marvvy-G" target="blank" rel="noopener noreferrer">
                         <FaGithub/>
                    </a>
                </li>
            </ul>

            </div>
        </section>
        </>
    )
}

export default Homepage