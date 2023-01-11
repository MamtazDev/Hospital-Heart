import React, { Fragment, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./accordion.css";

const Accordionn = () => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className="question_section">
        <div className="container">
          <div className="question_title">
            <h2 className="text-center">Treatment available for</h2>
            <p>
              All types of cardiac problems are diagnosed and treated by our
              highly skilled and qualified specialists and surgeons from
              different cardiac subspecialties like; Rheumatic Heart Disease,
              Hypertensive Heart Disease, Ischemic Heart Disease, Inflammatory
              Heart Disease, Cerebrovascular Disease, Heart Block, Heart Attack,
              Angina, Arrhythmia, Atrial Septal Defect, Heart Valve Leakage,
              Heart Failure.a, Atrial Septal Defect, Heart Valve Leakage, Heart
              Failure.
            </p>
            {/* {
                            show &&  <div className="reademoretxt">
                            <strong>We provide all of the following bone marrow transplant procedures</strong>
                            <p>Allogeneic and autologous transplants are the two most common forms, depending on who provides the bone marrow or stem cells</p>
                            <strong>Autologous bone marrow transplant: </strong> <span style={{ marginBottom: "10px", display:'inline-block' }}>The patient's own bone marrow is used to harvest healthy bone marrow cells.</span><br />
                            <strong>Allogenic bone marrow transplant: </strong> <span>Bone marrow cells are obtained from a related donor. </span>
                            <div className="read_txt_list">
                                <ul>
                                    <li>- It can be matched related, in which case the donor is a sibling or other HLA-matched relative.</li>
                                    <li>- Matched Unrelated, when the donor is typically found from one of the numerous national or international registries and is not a family of the patient.</li>
                                    <li>- In a partially matched related case, the donor comes from the patient's family (haploidentical)</li>
                                </ul>
                            </div>
                            <strong  style={{ marginTop: "10px", display:'inline-block' }}>How does HLA typing work? </strong><br />
                            <p>HLA typing is just blood test that is administered to patients and potential donors to determine how closely the recipient and potential donors match each other. This makes it feasible to choose the ideal donor for an allogeneic transplant.</p>
                            <strong>How can I consult top doctors for Bone Marrow Transplant for second opinion or medical advice?</strong><br />
                            <div className="second_list">
                                <ul>
                                    <li>- Contact us by sending your information via Email, WhatsApp etc</li>
                                    <li>- Get appointment with doctors for bone marrow transplants.</li>
                                    <li>- Get in touch with the Marlin Healthcare Services' staff</li>
                                </ul>
                            </div>
                            <strong style={{ marginTop: "10px", display:'inline-block' }}>The procedure of bone marrow transplant</strong>
                            <p>The first step is the extraction of the bone marrow cells from the donor by making punctures under general anesthesia. In the second step, pre-engraftment is done in which high-dose chemo-radiotherapy is done. Here the blood stem cells are destroyed and the normal blood cells are not produced. The patient has to be kept in a clean room at this time. The third step is post-engraftment. Here the donated stem cell will start functioning. The patient can come out of critical isolation at this time.</p>
                            <strong>Bone Marrow Transplant can be done when;</strong>
                        </div>
                        } */}
          </div>
          <div className="question_inner">
            <Row>
              <Col md={6}>
                <div className="question_item">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Cardiothoracic and Vascular Surgery
                      </Accordion.Header>
                      <Accordion.Body>
                        Our associated CTVS departments provide a wide range of
                        cardiovascular therapies with the support of
                        multidisciplinary team of cardiology consultants,
                        intensivists, pediatricians, pediatric intensivists, and
                        pediatric anesthetists.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Electrophysiology & Arrhythmia{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        Our associated hospitals provide standard
                        electrophysiology and arrhythmia services for in-depth
                        assessment and treatment of patients with a range of
                        cardiac rhythm abnormalities. Our cardiac team assesses
                        arrhythmias using gentle, cutting-edge echocardiography
                        and the latest catheterization.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Coronary Artery Bypass Grafting (CABG)
                      </Accordion.Header>
                      <Accordion.Body>
                        CABG is one of the most common and popular medical
                        surgeries which is useful in treating severe cases of
                        coronary artery blockage. CABG is also known as Bypass
                        Surgery, Coronary Artery Bypass Surgery, as well as
                        Heart Bypass Surgery. A relatively prevalent heart
                        condition characterised by blocked or restricted
                        arteries, coronary artery disease, is successfully
                        treated surgically at our heart centres for long-term
                        relief.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Minimal Invasive Cardiac Surgery
                      </Accordion.Header>
                      <Accordion.Body>
                        The Minimal Invasive Cardiac Surgery, or MICS, facility
                        is furnished with cutting-edge equipment and
                        robot-assisted devices. The team of cardiovascular
                        surgeons and specialists has extensive training and
                        experience in performing delicate minimally invasive
                        cardiac procedures. Many cardiac conditions are treated
                        using MICS, which lowers the chance of any
                        post-operative complications and has proven to be very
                        effective in treating even the most complex heart
                        conditions.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Nuclear Cardiology</Accordion.Header>
                      <Accordion.Body>
                        The Nuclear Cardiology Department is outfitted with
                        state-of-the-art technology to provide accurate
                        diagnostic and nuclear imaging for the most difficult
                        heart problems. The laboratory carries out a range of
                        non-invasive cardiovascular tests to the highest
                        standards for the detection and treatment of coronary
                        artery disease.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col md={6}>
                <div className="question_item">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Transcatheter aortic valve implantation (TAVI)
                      </Accordion.Header>
                      <Accordion.Body>
                        is a less invasive surgical treatment we use to give
                        comprehensive care to patients with severe aortic
                        stenosis. The most complex heart surgeries are carried
                        out by our team of highly skilled cardiovascular
                        surgeons using cutting-edge equipment and modern
                        facilities that meet worldwide standards.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        Left Ventricular Assist Devices (LVADs)
                      </Accordion.Header>
                      <Accordion.Body>
                        Our associated Heart Failure hospitals are top centres
                        in the country for the creation, application, and study
                        of left ventricular assist devices (LVADs). These
                        advanced medical tools are made to help those with
                        advanced heart failure. Patients who are awaiting a
                        heart transplant may benefit from an LVAD.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>
                        Heart Failure and Heart Transplant
                      </Accordion.Header>
                      <Accordion.Body>
                        When the heart cannot pump enough blood to keep the
                        body's blood flow at the essential pace to meet its
                        needs, the condition is known as congestive heart
                        failure or heart failure. Patients with chronic heart
                        conditions, including heart failure, are treated using a
                        thorough, multidisciplinary approach by our hospitals
                        and doctors. Our heart failure and transplant centers
                        are committed to the diagnosis, analysis, and care of
                        patients with heart failure.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                      <Accordion.Header>
                        Atrial Septal Defect (ASD)
                      </Accordion.Header>
                      <Accordion.Body>
                        A hole in the wall separating the two upper chambers of
                        the heart is known as the atrial septal defect (ASD).
                        Atrial septal defects come in two different sizes: large
                        atrial septal defects and minor atrial septal defects.
                        The heart and lungs may suffer significant damage from a
                        large atrial septal defect, but a tiny one may develop
                        accidentally and not be dangerous or problematic.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                      <Accordion.Header>Heart Valve Disease</Accordion.Header>
                      <Accordion.Body>
                        Your heart has four valves: the aortic, mitral,
                        pulmonary, and tricuspid valves. Any one of these valves
                        may experience a malfunction, leading to heart valve
                        disease.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Accordionn;
