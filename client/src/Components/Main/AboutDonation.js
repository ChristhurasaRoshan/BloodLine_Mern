import React from 'react'
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
import Footer from './Footer';

const AboutDonation = () => {
    const data = [
        { title: "Registration", img: g1, description: "Registering as a blood donor is the first step towards saving lives. By registering, you become part of a network of donors who contribute to the health and well-being of those in need."  },
        { title: "Seeing", img: g2,description: "Before donating blood, you will undergo a medical screening to ensure that you are eligible to donate. This includes checking your vital signs, medical history, and hemoglobin levels."  },
        { title: "Donation", img: g3,description: "The blood donation process involves giving a small amount of blood, usually about one pint. This process is safe and typically takes less than an hour to complete. Your donation can save up to three lives."  },
        { title: "Save Life", img: g4,description: "By donating blood, you have the opportunity to save lives and make a positive impact on your community. Your donation can help patients undergoing surgeries, cancer treatments, and other medical procedures."  },
    ]
    return (
        <section>
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
                <div className="text-center"><br />
                    <h2 className='text-3xl font-bold'>Donation Process</h2>
                    <p>The donation process from the time you arrive center until the time you leave</p><br /><br />
                </div>
                <div className='grid grid-cols-4 place-items-center'>
                    {data.map((e, i) =>
                        <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={e.img} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>{i + 1} - {e.title}</h1>
                                <p className='text-justify'>{e.description}</p>
                            </div>
                        </div>
                    )}
                </div>
               
            </div>
            
            
        </section>
        <Footer />
        </section>
        
        
    )
}

export default AboutDonation