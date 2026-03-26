import WebLayout from '../../layout/WebLayout'
import { FaRocketchat, FaUserShield } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import './ContactPage.css'

const ContactPage = () => {
    return (
        <WebLayout title="Contact">
            <div className="page_contents">
                <section className="contact_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3 mb-3 mb-sm-0">
                                <div className="contact_card">
                                    <div className="contact_card_body">
                                        <span className='contact_card_icon_1'><FaRocketchat /></span>
                                        <h5 className="contact_card_title">Chat to sales</h5>
                                        <p className="contact_card_text">Speak to our friendly teams.</p>
                                        <a href="#" className="contact_card_btn_1">Chat to sales</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 mb-3 mb-sm-0">
                                <div className="contact_card">
                                    <div className="contact_card_body">
                                        <span className='contact_card_icon_2'><FaUserShield /></span>
                                        <h5 className="contact_card_title">Chat to support</h5>
                                        <p className="contact_card_text">We're hear to help.</p>
                                        <a href="#" className="contact_card_btn_2">Chat to support</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 mb-3 mb-sm-0">
                                <div className="contact_card">
                                    <div className="contact_card_body">
                                        <span className='contact_card_icon_3'><FaLocationCrosshairs /></span>
                                        <h5 className="contact_card_title">Visit location</h5>
                                        <p className="contact_card_text">Visit our bangladesh location.</p>
                                        <a href="#" className="contact_card_btn_3">Get directions</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="contact_card">
                                    <div className="contact_card_body">
                                        <span className='contact_card_icon_4'><MdOutlinePhoneInTalk /></span>
                                        <h5 className="contact_card_title">Contact us</h5>
                                        <p className="contact_card_text">Sat-Fri from 24/7 available</p>
                                        <a href="#" className="contact_card_btn_4">Call our team</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='faq_section'>
                    <div className="container">
                        <div className="d-flex justify-content-center mb-5">
                            <h2 className='section_title'>Frequently Asked Questions</h2>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">What is B2B Lead Generation</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>B2B Lead Generation is the process of finding and connecting with potential business clients who are interested in your products or services.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">What type of leads do you provide</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>We provide highly targeted leads based on your industry, location, and ideal customer profile to ensure better conversion rates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">How do you ensure lead quality</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>We use verified data sources, manual research, and validation techniques to make sure every lead is accurate and relevant</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour">Which industries do you work with</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>We work with a wide range of industries including SaaS, real estate, eCommerce, marketing agencies, and more.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive">How long does it take to deliver leads</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>Delivery time depends on your requirements, but most projects are delivered within 2–5 business days.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix">Do you offer custom lead generation services</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>Yes, we provide fully customized lead generation solutions tailored to your business goals and target audience.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven">Do you provide verified email addresses</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>Yes, we provide verified and active email addresses to minimize bounce rates and improve your outreach success.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button accordion_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight">Can I request a sample before placing an order</button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                <p className='accordion_body_text'>Yes, we can provide a small sample so you can check the quality of our leads before starting a full project.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </WebLayout>
    )
}

export default ContactPage