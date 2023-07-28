import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
            <header class="p-3 text-bg-dark sticky-top">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">

                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <Link to="/index" class="navbar-brand mb-0 h1">Vegetable Market
                                Logs</Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <span style={{ width: 60 }}></span>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item"><Link to="/index" class="nav-link text-white">Home</Link></li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link text-white dropdown-toggle" href="#">Shop</a>
                                        <div class="dropdown-menu dropdown-menu-dark">
                                            <Link to="/shop" class="dropdown-item">Shop</Link>
                                            <a class="dropdown-item" >Cart</a>
                                            <a class="dropdown-item" >Checkout</a>
                                        </div>
                                    </li>
                                    <li class="nav-item"><a href="#sec5" class="nav-link text-white">Membership</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-white">About</a></li>
                                </ul>
                            </div>
                        </nav>

                        <ul class="nav col-auto">
                            <li class="nav-item">
                                <button type="button" class="btn btn-outline-light me-2"
                                onClick={() => navigate("/login")}
                                >Login</button>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn btn-warning"
                                onClick={() => navigate("/register")}
                                >Sign-up</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </header>
    );
}

export default Header;
