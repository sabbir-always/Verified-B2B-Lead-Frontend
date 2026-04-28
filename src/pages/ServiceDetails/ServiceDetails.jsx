import WebLayout from "../../layout/WebLayout"
import images from '../../assets/portfolio.png'
import { MdLocalPhone } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom"
import "./ServiceDetails.css"

const ServiceDetails = () => {
    return (
        <WebLayout title="Service Details">
            <div className="page_contents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={images} className='services_details_image' alt="Service Details" />
                        </div>
                        <div className="col-md-6">
                            <div className="services_details_text_box">
                                <span className="services_details_categories">Lead Generation</span>
                                <h3 className="services_details_title">Indeed Candidate Resume Sourcing.</h3>
                                <p className="services_details_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis consequatur quaerat dolores et dolorum? Corporis tempore labore excepturi, ea odit adipisci accusantium molestias, itaque quia et consequuntur quasi nobis eos vel neque iure. Illo debitis repellat consequatur blanditiis vero temporibus magnam sed ea quo nulla. Ut, dolor exercitationem ipsa distinctio veritatis enim, et cupiditate architecto deserunt, asperiores id excepturi incidunt expedita fugit officiis nemo aliquam.</p>
                                <div className="d-flex align-items-center gap-3 mt-3">
                                    <Link to="" className="services_details_btn bg-primary"><MdLocalPhone /> Contact Us</Link>
                                    <Link to="" className="services_details_btn bg-secondary">Order Now <BsArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default ServiceDetails