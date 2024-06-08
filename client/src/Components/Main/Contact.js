import React from 'react';
import cc from "../../assets/cc.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import bannerImage from '../../assets/banner5.jpg'; // Import the banner image

const Contact = () => {
    const data = [
        {
            title: "Our Location", 
            icon: faMapMarkerAlt,
            body: [
                " Pinnawala Road,",
                "Balangoda,",
                "Sabaragamuwa, ",
                "70100."
            ]
        },
        {
            title: "Phone Number", 
            icon: faPhone,
            body: [
                "(045) 269-9407",
                "Blood Line,",
                "Ministry of Health & Family Welfare,",
                "Sabaragamuwa."
            ]
        },
        { 
            title: "Email Address", 
            icon: faEnvelope,
            body: [
                "bloodline@gmail.com",
                "Blood Line,",
                "Ministry of Health & Family Welfare,",
                "Sabaragamuwa."
            ] 
        }
    ];
    
    return (
        <div>
            {/* Banner */}
            <div className="bg-cover bg-center h-64 p-0" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="bg-gray-900 bg-opacity-50 h-full flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Contact Us</h1>
                </div>
            </div>

            {/* Contact Details */}
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='px-64 mb-8'><br />
                    <h2 className='text-center text-3xl font-bold dark:text-white-900'>Contact Details</h2><br />
                    <div className='flex justify-center items-center mb-4'>
                        <img src={cc} draggable={false} width="50%" alt="CDAC Logo" />
                    </div>
                    <div className='flex justify-around'>
                        {data.map((e, index) => (
                            <div key={index} style={{ backgroundColor: 'pink' }} className={`w-1/3 p-4 border border-gray-300 rounded-lg ${index !== data.length - 1 ? 'mr-6' : ''}`}>
                                <div className="flex justify-center">
                                    <FontAwesomeIcon icon={e.icon} className='mr-2'  size="3x" color='red'/>
                                </div>
                                <p className='text-xl font-bold text-center'>
                                    {e.title}
                                </p>
                                <p className="text-center p-2" > 
                                    {e.body.map((k, i) => (
                                        <p key={i} className='text-md'>{k}</p>
                                    ))}
                                </p><br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Contact;
