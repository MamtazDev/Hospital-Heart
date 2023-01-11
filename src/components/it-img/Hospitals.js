import React, { Fragment } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './it-img.css';

import image1 from "../../assets/images/hospital1.jpg"
import image2 from "../../assets/images/hospital2.jpg"
import image3 from "../../assets/images/hospital3.jpg"
import image4 from "../../assets/images/hospital4.jpg"
import image5 from "../../assets/images/hospital5.jpg"
import image6 from "../../assets/images/hospital6.jpeg"
import image7 from "../../assets/images/hospital7.jpeg"
import image8 from "../../assets/images/hospital8.jpeg"

import image9 from "../../assets/images/nabh.png"
import image10 from "../../assets/images/nabl.png"

const Hospitals = () => {
    const hospital__info = [
        {
            image    : image1,
            title    : "Fortis Escorts",
            location : "Okhla Road, New Delhi - 110 025 (India)",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image2,
            title    : "Medanta The Medicity",
            location : "Sec-38 Gurugram, Haryana 122001, India",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image3,
            title    : "Indraprastha Apollo Hospital ",
            location : "Mathura Rd, New Delhi, Delhi 110076",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image4,
            title    : "Fortis Memorial Research Institute (FMRI)",
            location : "Sector - 44, Opposite HUDA City Centre Gurgaon, Haryana - 122002, India",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image5,
            title    : "Max Super Specialty Hospital",
            location : "1 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi, Delhi 110017",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image6,
            title    : "Artemis Hospital ",
            location : "Sector 51 Near Unitech Cyber Park, Gurugram",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image7,
            title    : "Aakash Hospital",
            location : "90, 43, Malviya Nagar Rd, Malviya Nagar, New Delhi, Delhi 110017",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image8,
            title    : "SSB Hospital",
            location : "Sector 16 A, Faridabad (NCR) – 121002. India",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image9,
            title    : "Manipal Hospital",
            location : "Patel Garden, Block B, Sector 15 Dwarka, Dwarka, Delhi",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
    ]

    return (
        <Fragment>
            <div className="it-img_section">
                <div className="container">
                    <div className="it-img_area"> 
                        <div className="it-img_list_section">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            loop={true} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
                                {
                                    hospital__info.map((item, index)=>
                                        <SwiperSlide key={index}> 
                                            <div className="it-img-txt">
                                                <Row className="align-items-center">
                                                    <Col md={6}>
                                                        <img width="100%" src={item?.image} alt="image" />
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="content">
                                                            <h4>{item.title}</h4>
                                                            <span>{item.location}</span>
                                                            <div className="sm_item d-flex">
                                                                <div className="sm_img">
                                                                    <img src={item.image2} alt="image" />
                                                                </div>
                                                                <div className="sm_txt">
                                                                    <p>Our <strong>NABH & ISO</strong>  accredited hospitals offer <br /> <strong>best in class services to our patients</strong></p>
            
                                                                </div>
                                                            </div>
                                                            <div className="sm_item d-flex">
                                                                <div className="sm_img">
                                                                    <img src={item.image3} alt="image" />
                                                                </div>
                                                                <div className="sm_txt">
                                                                    <strong>NABL</strong>
                                                                    <p>accredited Labs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            
                         </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Hospitals;