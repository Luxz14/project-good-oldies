import { CartWidget } from '../CartWidget/CartWidget';


export const Navbar = () => {
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand custom-navbar nav-link" href="#">
                    <img src="../src/assets/logo.png" alt="Logo" width="70" height="70" className="d-inline-block align-text-top"/></a>
                </div>
                <nav className="navbar navbar-expand-lg custom-navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand custom-navbar nav-link" href="#">Home</a>
                        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link custom-navbar" aria-current="page" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-navbar" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-navbar" href="#"><CartWidget /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </header>
        </>
    )
}


