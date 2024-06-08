import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-blood text-white-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <h2 className="text-lg font-bold mb-2">Blood Line !!!</h2>
                        <p className="text-sm text-justify mb-4 max-w-[14rem]">Ensuring a safe and reliable blood supply for patients in need through collection, processing, and distribution of blood and its components.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white-900 hover:text-gray-light"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-white-900 hover:text-gray-light"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white-900 hover:text-gray-light"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white-900 hover:text-gray-light"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-white-900 hover:text-gray-light"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-2">Information</h2>
                        <ul className="text-sm">
                        <li>
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-gray-400">About Us</Link>
                </li>
                <li>
                    <Link to="/contactUs" className="text-white hover:text-gray-400">Contacts</Link>
                </li>
                <li>
                    <Link to="/register/donor" className="text-white hover:text-gray-400">Donate Blood</Link>
                </li>

                <li>
                    <Link to="/bloodDirect" className="text-white hover:text-gray-400">Looking For Blood</Link>
                </li>
                <li>
                    <Link to="/bloodCamps" className="text-white hover:text-gray-400">Blood Donation Camps</Link>
                </li>

                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold mb-2">Contact us</h2>
                        <p>Blood Line,Ministry of Health & Family Welfare,Sabaragamuwa.</p>
                        <p>Phone: (045) 269-9407</p>
                        <p>Email: bloodline@gmail.com</p>
                        </div>
                        <div>
   
        
    </div>
                    
                </div>
            </div>
            <hr className="border-gray-400 my-4" />
            <div className="text-center mt-4 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} BloodLine. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
