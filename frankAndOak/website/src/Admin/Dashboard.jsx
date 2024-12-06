import React, { useEffect, useState } from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { CiDroplet } from 'react-icons/ci'
import { FaBarsStaggered } from 'react-icons/fa6'
import profile from './../Images/profile.jpg';
import { MdOutlineEditNote, MdOutlineHistory, MdOutlineKeyboardArrowDown, MdOutlineProductionQuantityLimits, MdOutlineStickyNote2, MdPhotoSizeSelectActual, MdShoppingCart } from 'react-icons/md'
import { RiProfileFill } from 'react-icons/ri';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';


function Dashboard() {
    const nav = useNavigate();
    const [dropdown, setDropdown] = useState(true);
    

    const handleLogout =()=>{
        Cookies.remove('admin-credential');
        nav('/admin');
    }

    //to check if admin login or not, if not then it will restrict to navigate into dashboard pages
    useEffect(()=>{
        const adminData = Cookies.get('admin-credential');
        if(!adminData) nav('/admin');      //if cookies doesn't have admin credential then stay on login page.
    },[]);

    const path = useLocation();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 collapse d-flex flex-column text-white px-0 py-2 border border-1 border-danger adm-navbar" id="dashbordToggler">
                        <header className='px-0'>
                            <h4 className='w-100 py-2 text-center'>Frank and Oak</h4>
                            <hr />
                        </header>
                        <main className='max-vh-75'>
                            <ul className='list-unstyled'>
                                <Link to="/admin/dashboard/dashboard">
                                    <li>
                                        <span className='d-flex gap-3 align-items-center'> <AiFillDashboard /> Dashboard</span>
                                    </li>
                                </Link>
                                <Link to='/admin/dashboard/profile'>
                                    <li className=' text-white'>
                                        <span className='d-flex gap-3 align-items-center text-decoration-none'> <RiProfileFill /> Profile  </span>
                                    </li>
                                </Link>

                            </ul>
                            <h6 className='w-100 text-secondary text-center text-bold'>ECOMMERCE COMPONENTS</h6>
                            <ul className='list-unstyled accordion' id="admin-dash">
                                <li data-bs-toggle="collapse" data-bs-target="#collapse-1">
                                    <span className='d-flex gap-3 align-items-center'> <MdPhotoSizeSelectActual />  Size  </span> <MdOutlineKeyboardArrowDown />
                                </li>
                                <ul id="collapse-1" className="collapse" data-bs-parent="#admin-dash">
                                    <Link to="/admin/dashboard/profile/sizedetails"> <li>Size details</li> </Link>
                                    <Link to="/admin/dashboard/profile/viewsize" >
                                        <li>View sizes</li>
                                    </Link>
                                </ul>
                                <li data-bs-toggle="collapse" data-bs-target="#collapse-2">
                                    <span className='d-flex gap-3 align-items-center'> <CiDroplet />  Color  </span>
                                    <MdOutlineKeyboardArrowDown />
                                </li>
                                <ul id="collapse-2" className="collapse" data-bs-parent="#admin-dash">
                                    <Link to="/admin/dashboard/profile/addcolor">
                                        <li>Add color</li>
                                    </Link>
                                    <Link to="/admin/dashboard/profile/viewcolor">
                                        <li>View color</li>
                                    </Link>
                                </ul>
                                <li data-bs-toggle="collapse" data-bs-target="#collapse-3">
                                    <span className='d-flex gap-3 align-items-center'> <FaBarsStaggered />  Parent Category  </span>
                                    <MdOutlineKeyboardArrowDown />
                                </li>
                                <ul id="collapse-3" className="collapse" data-bs-parent="#admin-dash">
                                    <Link to="/admin/dashboard/profile/addcategory">
                                        <li>Add Category</li>
                                    </Link>
                                    <Link to="/admin/dashboard/profile/viewcategory">
                                        <li>View Category</li>
                                    </Link>
                                </ul>
                                <li data-bs-toggle="collapse" data-bs-target="#collapse-4">
                                    <span className='d-flex gap-3 align-items-center'>  <MdShoppingCart />Product Category  </span>
                                    <MdOutlineKeyboardArrowDown />
                                </li>
                                <ul id="collapse-4" className="collapse" data-bs-parent="#admin-dash">
                                    <Link to="/admin/dashboard/profile/addproductcategory">
                                        <li>Add product category</li>
                                    </Link>
                                    <Link to="/admin/dashboard/profile/viewproductcategory">
                                        <li>View product category</li>
                                    </Link>
                                </ul>
                                <li data-bs-toggle="collapse" data-bs-target="#collapse-5">
                                    <span className='d-flex gap-3 align-items-center'> <MdOutlineProductionQuantityLimits /> Product </span>
                                    <MdOutlineKeyboardArrowDown />
                                </li>
                                <ul id="collapse-5" className="collapse" data-bs-parent="#admin-dash">
                                    <Link to="/admin/dashboard/profile/productadd">
                                        <li>Add product</li>
                                    </Link>
                                    <Link to="/admin/dashboard/profile/productview">
                                        <li>View product</li>
                                    </Link>
                                </ul>
                                <li data-bs-toggle="collapse" data-bs-target="#collapse-6">
                                    <span className='d-flex gap-3 align-items-center'> <MdOutlineHistory /> Story  </span>
                                    <MdOutlineKeyboardArrowDown />
                                </li>
                                <ul id="collapse-6" className="collapse" data-bs-parent="#admin-dash">
                                    <Link to="/admin/dashboard/profile/storydetails">
                                        <li>Story details</li>
                                    </Link>
                                    <Link to="/admin/dashboard/profile/viewstory">
                                        <li>Story view</li>
                                    </Link>
                                </ul>
                                <Link to="/admin/dashboard/profile/order">
                                    <li>
                                        <span className='d-flex gap-3 align-items-center'> <MdOutlineEditNote /> Order  </span>
                                    </li>
                                </Link>


                                <li data-bs-toggle="collapse" data-bs-target="#collapse-7">
                                    <span className='d-flex gap-3'> <MdOutlineHistory /> Slider </span>
                                    <MdOutlineKeyboardArrowDown />
                                </li>
                                <ul id="collapse-7" className="collapse" data-bs-parent="#admin-dash">
                                    <Link to="/admin/dashboard/profile/slider">
                                        <li>Slider details</li>
                                    </Link>

                                </ul>
                                <li>
                                    <span className='d-flex gap-3'> <MdOutlineStickyNote2 /> Terms and Conditions </span>
                                </li>

                            </ul>
                        </main>
                        <footer className='text-end text-white-50 '>
                            <hr />
                            <Link to="/admin">
                                <BiLogOut className='fs-1 pe-2' role='button' />
                            </Link>

                        </footer>
                    </div>
                    <section className="col-10 p-0 position-relative border border-1 border-danger">
                        <nav class="navbar navbar-dark shadow-lg">
                            <div class="container-fluid row justify-content-between position-relative">
                                <button class="navbar-toggler col-6" type="button" data-bs-toggle="collapse" data-bs-target="#dashbordToggler" aria-controls="dashboardToggler" aria-expanded="false" aria-label="Toggle navigation">
                                    <div className='d-flex align-items-center gap-3'>
                                        <span className="navbar-toggler-icon bg-dark-subtle p-4 rounded-3"></span>
                                        <p className='text-secondary'>Dashboard</p>
                                    </div>
                                </button>
                                <div className="col-6 text-end">
                                    <img src={profile} className='rounded-circle cursor-pointer' style={{ width: "40px", height: '40px' }} alt="" onClick={() => setDropdown(!dropdown)} />
                                </div>
                                {
                                    (dropdown) ?
                                        ''
                                        :
                                        <div className="col-2 text-center position-absolute top-100 end-0 shadow-sm bg-light">
                                            <ul className='list-unstyled'>
                                                <li className='border-bottom border-bottom-2 border-bottom-secondary py-2 '>Profile</li>
                                                <li
                                                    className=' border-bottom border-bottom-2 border-bottom-secondary py-2 '
                                                    onClick = {handleLogout}>
                                                    Logout
                                                </li>
                                            </ul>
                                        </div>
                                }

                            </div>
                        </nav>
                        <div className="row shadow-lg m-0 px-3 py-3"> {path.pathname}</div>
                        <div className='container-fluid'>
                            <Outlet />
                        </div>

                        <footer className='position-absolute bottom-0 start-50'>
                            <p className='text-center'>developed@admin</p>
                        </footer>
                    </section>

                </div>

            </div>

        </>
    )
}

export default Dashboard