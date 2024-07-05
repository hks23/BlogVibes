import React from "react";
import { Container, Footer, Logo, LogoutBtn } from '../index'
import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header(){
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
        },
        {
            name: 'Login',
            slug: "/login",
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: "/signup",
            active: !authStatus
        },
        {
            name: 'All-Posts',
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: "/add-post",
            active: authStatus
        }
    ]
    return (
        <header className="py-4 px-2 shadow drop-shadow-2xl hover:drop-shadow-xl bg-indigo-300">
            <Container> 
                <nav className="flex drop-shadow-5xl px-5">
                    <div className="mr-4 drop-shadow-2xl">
                        <Link to='/'>
                         <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className="flex ml-auto text-blue-600 font-bold text-xl ">
                        {navItems.map((item)=> (
                            item.active ? (
                                <li key={item.name}>
                                    <button onClick={()=> navigate(item.slug)}
                                        className="inline-block px-6 py-7 duration-200 drop-shadow-2xl hover:bg-black hover:text-white rounded-xl">
                                        {item.name.toUpperCase()}
                                    </button>
                                </li>
                            ) : null
                        ))}
                        {/* display Logout Button only when authenticated */}
                        {authStatus && ( 
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header