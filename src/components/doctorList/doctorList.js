import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
// import {doctor} from './doctorApi';

import image1 from "../../../src/doctor/Naresh-Trehan.jpeg";
import image2 from "../../../src/doctor/YK-Mishra.jpeg";
import image3 from "../../../src/doctor/dr-sandeep-attawar.jpg";
import image4 from "../../../src/doctor/Balbir-Singh.jpg";
import image5 from "../../../src/doctor/dr-bhaba-nanda-das.jpg";
import image6 from "../../../src/doctor/Dr-Z-S-Meharwal.jpg";
import image7 from "../../../src/doctor/Shayam-Sunder.jpg";

import './doctorList.css'
 

const DoctorList = () => {

    const doctor = [
        {
            id: 1,
            name: "Dr. Naresh Trehan",
            image: image1,
            title:"Chairman & Managing Director - Heart Institute",
            hospital_name: "Medanta the Medicity, Gurgaon"
        },
        {
            id: 2,
            name: "DR. YUGAL KISHORE MISHRA",
            image: image2,
            title:"Chief of Clinical Services, Head of Cardiac Sciences and Chief Cardio Vascular Surgeon",
            hospital_name: "Manipal Hospital, Delhi"
        },
        {
            id: 3,
            name: "Dr Attawar Sandeep",
            image: image3,
            title:"Founder Director & Chair of Advanced Heart Failure",
            hospital_name: "KIMS Hospital, Hyderabad"
        },
        {
            id: 4,
            name: "Dr. Balbir Singh",
            image: image4,
            title:"Chairman & Head of Cardiology ",
            hospital_name: "Max Healthcare, Saket Delhi"
        },
        {
            id: 5,
            name: "Dr. Bhaba Nanda Das ",
            image: image5,
            title:"Cardiothoracic & Vascular Surgeon ",
            hospital_name: "Indraprastha Apollo, Delhi"
        },
        {
            id: 6,
            name: "Dr. Z S Mehrawal",
            image: image6,
            title:"Executiv Director-Cardiothoracic & Vascular Surgeon ",
            hospital_name: "Fortis Escort Heart Institute, Delhi"
        },
        {
            id: 7,
            name: "Dr. Shyam Sunder Bansal",
            image: image7,
            title:"Chief Medical Director ",
            hospital_name: "SSB Hospital, Faridabad"
        },
    ]

    return (
        <Fragment>
            <div className="doctor_section">
                <div className="container-fluid">
                    <div className="doctor_area">
                        <Row>
                            <Col>
                            <div className="doctor_title text-center">
                                <h2>CONSULT OUR CARDIAC SPECIALISTS</h2>
                                <p>Consult our team of specialized consultant and surgeons for heart problems, including operative and non-operative procedures like CABG, Valve replacement, LVAD etc.</p>
                            </div>
                            </Col>
                        </Row>
                       
                        <div className="doctor_list_section">
                        <Swiper
                            modules={[Pagination, Autoplay, FreeMode]}
                            breakpoints={{
                                0: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                                 
                              }}
                            freeMode={true}
                            spaceBetween={30}
                            slidesPerView={6}
                            slidesPerGroup={6}
                            pagination={{ clickable: true }}
                    
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            // loop={true}
                            
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                {
                                    doctor.map((doc) => {
                                    const { id, name , image , title , hospital_name} = doc
                                    return <SwiperSlide key={id}> 
                                        <div className="doctro_slider_content">
                                            <img height="250px" width="100%" src={image} alt="" />
                                            <div className="s_body">
                                                <h4>{name}</h4>
                                                <p>{title}</p>
                                                <p><strong>{hospital_name}</strong></p>
                                            </div>
                                        </div>
                                    </SwiperSlide> 
        
                                    })
                                } 

                         </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default DoctorList