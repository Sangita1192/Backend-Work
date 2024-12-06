import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import usa from './../Images/usa.webp';
import canada from './../Images/canada.png';
import { Link } from 'react-router-dom';
import { FcNext, FcPrevious } from 'react-icons/fc';
import salewomen from './../Images/nav-sale1.webp';
import salemen from './../Images/nav-sale2.jpg';
import navSweater from './../Images/nav-sweaters.webp';
import navJackets from './../Images/nav-jackets.jpg';
import navMens1 from './../Images/nav-mens1.webp';
import navMens2 from './../Images/nav-mens2.webp';
import ourstory1 from './../Images/ourstory1.avif';
import ourstory2 from './../Images/ourstory2.webp';
import ourstory3 from './../Images/ourstory3.jpg';
import ourstory4 from './../Images/ourstory4.jpg';
import ourstory5 from './../Images/ourstory5.webp';
import ourstory6 from './../Images/ourstory6.webp';


function Nav() {
    return (
        <>
            <header>
                <div className='container-fluid bg-black p-0 m-0'>
                    <div className='container'>
                        <div className='row text-white justify-content-between align-items-center'>
                            <div className='col-9 border border-1 border-danger text-center'>
                                <div id="carouselExampleControls" class="carousel slide d-flex align-items-center" data-bs-ride="carousel">
                                    <FcPrevious role='button' data-bs-target="#carouselExampleControls" data-bs-slide='prev' />
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <p className='mb-0'>The Fall Sale: 25% off everything*— even our winter outerwear! For women For men</p>
                                        </div>
                                        <div class="carousel-item">
                                            <p className='mb-0'>Our loyalty program just got better! Explore the new perks</p>
                                        </div>
                                        <div class="carousel-item">
                                            <p className='mb-0'>Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men </p>
                                        </div>
                                    </div>
                                    <FcNext role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" />
                                </div>






                                {/* Our loyalty program just got better! Explore the new perks

                                Brrrrr! Warmth right this way. Sweaters for Women Sweaters for Men */}
                            </div>
                            <div className='col-2 dropdown border border-1 border-danger text-end'>

                                <button className="btn dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={usa} alt="" style={{ width: '40px', height: '30px' }} /> $ USD
                                </button>
                                <ul className="dropdown-menu bg-secondary-subtle">
                                    <li>
                                        <a className="dropdown-item mb-4" href="#"><img src={canada} alt="" style={{ width: '30px', height: '20px' }} /> $ CANADA </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><img src={usa} alt="" style={{ width: '30px', height: '20px' }} /> $ USD </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='container-fluid bg-white border border-1 border-danger'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid position-relative">
                            <a className="navbar-brand fw-bold" href="#">Frank And Oak</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse row " id="navbarSupportedContent ">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-5 justify-content-evenly fs-6">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Sale</a>
                                        <div className="row w-100 m-0 p-0 py-3 bg-white position-absolute top-100 z-3 sale-sublist" >
                                            <div className="col-2">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2 fs-6">
                                                        Women Sale
                                                    </li>
                                                    <li>Shop All</li>
                                                    <li>Jackets & Coats</li>
                                                    <li>Tops</li>
                                                    <li>Sweaters</li>
                                                    <li>Bottoms</li>
                                                    <li>Last Chance</li>
                                                </ul>
                                            </div>
                                            <div className="col-2">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2">
                                                        Mens Sale
                                                    </li>
                                                    <li>Shop All</li>
                                                    <li>Jackets & Coats</li>
                                                    <li>Tops</li>
                                                    <li>Sweaters</li>
                                                    <li>Bottoms</li>
                                                    <li>Last Chance</li>
                                                </ul>
                                            </div>
                                            <div className="col-4 overflow-hidden position-relative">
                                                <img src={salewomen} alt="Shop for women" className='w-100 h-100 shifted-img ' />
                                                <h5 className="text-white position-absolute sublist-text">Women's Sale</h5>
                                            </div>
                                            <div className="col-4 overflow-hidden position-relative">
                                                <img src={salemen} alt="Shop for women" className='w-100 h-100 shifted-img' />
                                                <h5 className="text-white position-absolute sublist-text">Men's Sale</h5>
                                            </div>

                                        </div>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Women</a>
                                        <div className="row w-100 m-0 p-0 py-3 bg-white position-absolute top-100 z-3 sale-sublist" >
                                            <div className="col-2">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2 fs-6">
                                                        Featured
                                                    </li>
                                                    <li>New In</li>
                                                    <li>Best Sellers</li>
                                                    <li>The Skyline</li>
                                                    <li>Workwear</li>
                                                    <li>Gift Cards</li>
                                                    <li className="text-danger">Sale</li>
                                                </ul>
                                            </div>
                                            <div className="col-2">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2">
                                                        Clothing
                                                    </li>
                                                    <li>Shop All</li>
                                                    <li>Tshirt & Tops</li>
                                                    <li>Blouse & Shirts</li>
                                                    <li>Sweaters & Cardigans</li>
                                                    <li>Blazers & Overshirts</li>
                                                    <li>Jackets & Coats</li>
                                                    <li>Denim</li>
                                                    <li>Pants</li>
                                                    <li>Dresses</li>
                                                    <li>Skirts & Shorts</li>
                                                    <li>Matching Shirts</li>
                                                </ul>
                                            </div>
                                            <div className="col-2">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2">
                                                        Accessories
                                                    </li>
                                                    <li>Shop All</li>
                                                    <li>Beanies & Caps</li>
                                                    <li>Socks</li>
                                                    <li>Shoes</li>
                                                    <li>Bags</li>
                                                </ul>
                                            </div>
                                            <div className="col-3 position-relative">
                                                <img src={navSweater} alt="Shop for women" className='w-100 h-100 ' />
                                                <h5 className="text-white position-absolute sublist-text">Sweaters</h5>
                                            </div>
                                            <div className="col-3 position-relative">
                                                <img src={navJackets} alt="Shop for women" className='w-100 h-100' />
                                                <h5 className="text-white position-absolute sublist-text">Jackets</h5>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Men</a>
                                        <div className="row w-100 m-0 p-0 py-3 bg-white position-absolute top-100 z-3 sale-sublist" >
                                            <div className="col-2">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2 fs-6">
                                                        Featured
                                                    </li>
                                                    <li>New In</li>
                                                    <li>Best Sellers</li>
                                                    <li>The Skyline</li>
                                                    <li>Workwear</li>
                                                    <li>Gift Cards</li>
                                                    <li className="text-danger">Sale</li>
                                                </ul>
                                            </div>
                                            <div className="col-2 ">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2">
                                                        Clothing
                                                    </li>
                                                    <li>Shop All</li>
                                                    <li>Tshirt</li>
                                                    <li>Shirts & Polo Shirts</li>
                                                    <li>Sweaters & Cardigans</li>
                                                    <li>Blazers & Overshirts</li>
                                                    <li>Jackets & Coats</li>
                                                    <li>Denim</li>
                                                    <li>Pants</li>
                                                    <li>Shorts</li>
                                                </ul>
                                            </div>
                                            <div className="col-2">
                                                <ul className='list-unstyled'>
                                                    <li className="text-decoration-underline mb-2">
                                                        Accessories
                                                    </li>
                                                    <li>Shop All</li>
                                                    <li>Beanies & Caps</li>
                                                    <li>Gloves</li>
                                                    <li>Ties</li>
                                                    <li>Socks</li>
                                                    <li>Shoes</li>
                                                    <li>Bags</li>
                                                </ul>
                                            </div>
                                            <div className="col-3 position-relative ">
                                                <img src={navMens1} alt="Shop for women" className='w-100 h-100' />
                                                <h5 className="text-white position-absolute sublist-text">Sweaters</h5>
                                            </div>
                                            <div className="col-3 position-relative">
                                                <img src={navMens2} alt="Shop for women" className='w-100 h-100' />
                                                <h5 className="text-white position-absolute sublist-text">Jackets</h5>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Our story</a>
                                        <div className="row w-100 m-0 p-0 py-3 bg-white position-absolute top-100 z-3 sale-sublist" >
                                            <div className="col-2 position-relative">
                                                <img src={ourstory1} alt="Shop for women" className='w-100 h-100' />
                                                <h5 className="text-white position-absolute sublist-text">Who we are?</h5>
                                            </div>
                                            <div className="col-2 position-relative">
                                                <img src={ourstory2} alt="Shop for women" className='w-100 h-100'/>
                                                <h5 className="text-white position-absolute sublist-text">Sustainable Practices</h5>
                                            </div>
                                            <div className="col-2 position-relative">
                                                <img src={ourstory3} alt="Shop for women" className='w-100 h-100'/>
                                                <h5 className="text-white position-absolute sublist-text">Design Philosphy</h5>
                                            </div>
                                            <div className="col-2 position-relative">
                                                <img src={ourstory4} alt="Shop for women" className='w-100 h-100 '/>
                                                <h5 className="text-white position-absolute sublist-text">Fabrics</h5>
                                            </div>
                                            <div className="col-2 position-relative">
                                                <img src={ourstory5} alt="Shop for women" className='w-100 h-100 ' />
                                                <h5 className="text-white position-absolute sublist-text">Circular Denims</h5>
                                            </div>
                                            <div className="col-2 position-relative">
                                                <img src={ourstory6} alt="Shop for women" className='w-100 h-100' />
                                                <h5 className="text-white position-absolute sublist-text">Partners & Factories</h5>
                                            </div>

                                        </div>
                                    </li>

                                </ul>
                                <div className='col-2 fs-3 d-flex justify-content-around  align-items-center border border-1 border-danger'>
                                    <IoSearchOutline />
                                    <Link to="/admin" className='text-black' > <FaRegUserCircle /> </Link>
                                    <CiHeart />
                                    <IoBagOutline />

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Nav