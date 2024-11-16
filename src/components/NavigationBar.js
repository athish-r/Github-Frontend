import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header
            style={{
                backgroundColor: "#1aac83",
                padding: "10px 20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                    }}
                >
                    Erino
                </Link>
                <nav>
                    <ul
                        style={{
                            display: "flex",
                            listStyle: "none",
                            gap: "20px",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <li>
                            <Link
                                to="/about"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#dff4eb")}
                                onMouseLeave={(e) => (e.target.style.color = "white")}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#dff4eb")}
                                onMouseLeave={(e) => (e.target.style.color = "white")}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#dff4eb")}
                                onMouseLeave={(e) => (e.target.style.color = "white")}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;