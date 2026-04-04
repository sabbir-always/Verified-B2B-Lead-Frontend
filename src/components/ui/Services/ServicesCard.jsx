import { MdOutlineShoppingCart } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import images from '../../../assets/portfolio.png'
import { Link } from "react-router-dom";
import "./ServicesCard.css"

const ServicesCard = () => {
    return (
        <div className='col-md-3 mb-4'>
            <div className="services_card_box">
                <div className="services_card_img_box">
                    <img src={images} className='services_card_image' alt="services Card Image" />
                    <Link to="/services/details/123" className="services_card_link"><MdOutlineShoppingCart />Order Now</Link>
                </div>
                <div className="services_card_text_box">
                    <Link to='/services/details/123' className="services_card_title">Real Estate Website</Link>
                    <p className="services_card_description">Lorem ipsum dolor sit amet adipisicing elit. Impedit, ratione!</p>
                    <div className="d-flex align-items-center justify-content-between border-top pt-2">
                        <span className="services_card_price">10 USD</span>
                        <Link to="/services/details/123" className="services_card_price">Details <GoArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard