import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Error = () => {
    return (
        <>
        <section 
        className="error" 
        style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
        <h1>Error, Page not found</h1>
        <Link 
        to="/" 
        style={{
            backgroundColor: "#00b392",
            padding:10, 
            color:"white"
            }}>
                Homepage
            </Link>
        </section>
        </>
    )
}

export default Error
