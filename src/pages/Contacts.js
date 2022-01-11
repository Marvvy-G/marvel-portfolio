
import {FaPhone, FaEnvelope} from "react-icons/fa"
const Contacts = () => {
    return (
        <>
          <section className="contacts">
          <h1>Contact me</h1>  
              <ul>
                  <li><a href="tel:+2348126905210"><FaPhone /> +234 8126 905 210</a></li>
                  <li><a href="mailto:marveletukudoh@gmail.com">  <FaEnvelope  />  marveletukudoh@gmail.com</a></li>
              </ul>
          </section>
        </>
    )
}

export default Contacts
