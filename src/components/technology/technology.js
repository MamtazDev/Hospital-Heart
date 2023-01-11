import React, { Fragment } from "react";
// import TechImg from '../../assets/images/tech_advance.png'
// import TechImg2 from '../../assets/images/HTA-section-pic.jpg'
import TechImg2 from "../../assets/images/HTA-section-pic.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import './technology.css'
 

const Technology = () => {

    const edges = [
        {
            image : TechImg2,
            title : "Artis-Zeego Endovascular Cath Lab",
            content : "The Artis-Zeego has a multi-axis robotic arm that offers unparalleled flexibility and enables patients to be in the position that is most conducive to the procedure at hand. In order to give the most cutting-edge care possible, this hybrid OT enables cardiac surgeons and interventional cardiologists to operate together, concurrently, in the same room."
        },
        {
            image : TechImg2,
            title : "Dedicated Isolation Ward",
            content : "The Da Vinci robotic enables contemporary, minimally invasive surgery. Surgeons can carry out delicate and intricate procedures without needing to make a significant incision by using micro incisions. The surgeon's actions are translated into comparable tiny movements of instruments inside the patient's body via the ergonomic console."
        },
        {
            image : TechImg2,
            title : "O-ARM Technology",
            content : "The O-Arm system has robotic motion controls, laser alignment, and numerous picture protocols that may be saved. It is a 2D and 3D intraoperative imaging system. It enhances surgical productivity, patient dosage, and image quality."
        },
        {
            image : TechImg2,
            title : "Tesla MRI- ",
            content : "The 3.0 Tesla MRI technology enables our medical staff to offer you an early diagnosis and treatment, hence minimising any problems. A highly effective technique, the 3.0 Tesla MRI enables quicker scan times and increased patient comfort without compromising scan quality. The image clarity of this technology is extremely beneficial for pathological conditions of the brain, spine, and musculoskeletal system."
        },
        {
            image : TechImg2,
            title : "Extracorporeal membrane oxygenation (ECMO)- ",
            content : "Extracorporeal membrane oxygenation (ECMO) involves pumping blood to a heart-lung machine outside of the body, which eliminates carbon dioxide before returning the oxygen-rich blood to body tissues. It is used complex heart surgeries. "
        }
    ]

    return(
        <Fragment>

            <div className="technology_section">
                <div className="container">
                    <div className="technology_title">
                        <h2>Our Cutting-edge technology and Treatments</h2>
                        <p>Our advance technology makes heart surgeries easier, less invasive, and recover faster.</p>
                    </div>
                    <div className="technology_inner">
                        <Row>
                            {/* <Col md={6}>
                                <div className="tech_img">
                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation={true}
                                    
                                    // autoplay={{
                                    //     delay: 2000,
                                    //     disableOnInteraction: false
                                    // }}
                                    // loop={true}  

                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    >
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Trained Nursing Staffs</h2>
                                            <Row className=" tech_slider_inner align-items-center tech_sm_slide">
                                                <Col>
                                                    <img style={{ paddingLeft:"12px", borderRadius: '30px', paddingBottom:"23px" }} width="100%" src={TechImg2} alt="" />
                                                </Col>
                                                <Col>
                                                    <p> 
                                                        Bone Marrow transplant required zero negligence as immune system of patients is suppressed. Our all centers have well-trained and highly educated and experienced to deal with BMT patients. 
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider_text">
                                            <h2>Dedicated Isolation Ward </h2>
                                            <Row className=" tech_slider_inner align-items-center tech_sm_slide">
                                                <Col>
                                                    <img style={{ paddingLeft:"12px", borderRadius: '30px', paddingBottom:"23px" }} width="100%" src={TechImg2} alt="" />
                                                </Col>
                                                <Col>
                                                    <p> 
                                                        All the hospitals tied-up with Marlin are well-equipped with seamless anti-infection technology and reliable monitoring systems that minimize the infection rate and ensure patients safety. 
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </SwiperSlide> 
                                </Swiper>
                                </div>
                            </Col> */}
                            <Col md={12}>
                                <div className="tech_slider">
                                    <Swiper
                                        
                                        breakpoints={{
                                            // when window width is >= 640px
                                            0: {
                                            //   width: 640,
                                              slidesPerView: 1,
                                            },
                                            // when window width is >= 768px
                                            768: {
                                            //   width: 768,
                                              slidesPerView: 2,
                                            },
                                          }}

                                          
                                        modules={[Autoplay, Navigation]}
                                        spaceBetween={0}
                                        slidesPerView={2}
                                        navigation={true}
                                        
                                        // autoplay={{
                                        //     delay: 2000,
                                        //     disableOnInteraction: false
                                        // }}
                                        loop={true} 

                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        >
                                        {
                                            edges.map((item, index)=>{
                                                return(
                                                    <SwiperSlide key={index}>
                                                        <div className="slider_text">
                                                            <h2>{item.title}</h2>
                                                            <Row className=" tech_slider_inner align-items-center tech_sm_slide">
                                                                <Col lg={6}>
                                                                    <div className="image">
                                                                    <img style={{ paddingLeft:"12px", borderRadius: '30px', paddingBottom:"23px" }} width="100%" src={item.image} alt="image" />
                                                                    </div>
                                                                </Col>
                                                                <Col lg={6}>
                                                                    <div className="content">
                                                                        <p> {item.content} </p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </Col>
                         
                        </Row>
                    </div>
                </div>
            </div>

        </Fragment>
    )

}

export default Technology