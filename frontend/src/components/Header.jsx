import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';

function Header() {
    const { id } = useParams();
    return (
        <div className="w-full px-4 shadow-lg ">
            <div className="container-xl mx-auto h-20 flex justify-between items-center">
                <span className='text-xl font-semibold uppercase'>
                    <Link to='/'>Book Store</Link>
                </span>
                <nav className='lg:flex space-x-8 text-lg leading-4 uppercase tracking-wide font-medium hidden'>
                    <Link to='/' className='hover:text-amber-500'>Home</Link>
                    <Link to='/books/create' className='hover:text-amber-500'>Create Book</Link>
                    <Link className='hover:text-amber-500'>Show Book</Link>
                    <Link className='hover:text-amber-500'>Edit Book</Link>
                    <Link className='hover:text-amber-500'>Delete Book</Link>
                </nav>
                <span className="lg:hidden text-lg leading-4 uppercase tracking-wide font-medium">
                    <Link to='/books/create' className='hover:text-amber-500'>Create Book</Link>
                </span>
            </div>
        </div>
    )
}

export default Header


