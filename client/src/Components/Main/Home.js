import React from 'react';
import bg from "../../assets/bg.png";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
import Footer from './Footer';

const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", receive: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", receive: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", receive: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", receive: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", receive: "A- O-" },
        { blood: "O-", donate: "Everyone", receive: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", receive: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", receive: "AB- A- B- O-" }
    ];

    const temp2 = [
        { 
            title: "Registration", 
            img: g1, 
            description: "Registering as a blood donor is the first step towards saving lives. By registering, you become part of a network of donors who contribute to the health and well-being of those in need." 
        },
        { 
            title: "Seeing", 
            img: g2, 
            description: "Before donating blood, you will undergo a medical screening to ensure that you are eligible to donate. This includes checking your vital signs, medical history, and hemoglobin levels." 
        },
        { 
            title: "Donation", 
            img: g3, 
            description: "The blood donation process involves giving a small amount of blood, usually about one pint. This process is safe and typically takes less than an hour to complete. Your donation can save up to three lives." 
        },
        { 
            title: "Save Life", 
            img: g4, 
            description: "By donating blood, you have the opportunity to save lives and make a positive impact on your community. Your donation can help patients undergoing surgeries, cancer treatments, and other medical procedures." 
        },
    ];

    return (
        <div className="dark:text-white-900">
            <img src={bg} alt="" />
            <div className='grid grid-cols-2 place-items-center mt-8 mb-8 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the reason <br />for <br />someone's heartbeat
                    </p>
                </div>
            </div>
            <h1 className='font-bold text-center text-4xl text-blood mt-20 mb-8  underline'>Learn About Donation</h1>
            <div className='flex px-20'>
                <div>
                    <img src={donationFact} width="90%" alt="" />
                    <p className='text-center text-2xl '>
                        After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.
                    </p>
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e, index) => (
                            <tr key={index}>
                                <td className='border w-max text-lg'>{e.blood}</td>
                                <td className='border w-max text-lg'>{e.donate}</td>
                                <td className='border w-max text-lg'>{e.receive}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <p className='text-4xl underline font-bold text-blood text-center mt-20 mb-10'>
                Blood Donation Process
            </p>
            <div className='grid grid-cols-2 place-items-center px-20'>
                {temp2.map((e, index) => (
                    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2' key={index}>
                        <div><img src={e.img} draggable={false} width="100%" height="400px" alt="" /></div>
                        <div className='m-4'>
                            <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{index + 1} - {e.title}</h1>
                            <p className='text-justify'>{e.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Home;
