import { LuView } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import images from '../../../assets/portfolio.png'
import { Link } from "react-router-dom";
import "./PortfolioCard.css"

const PortfolioCard = () => {
    return (
        <div className='col-12 col-md-6 col-lg-4 mb-4'>
            <div className="portfolio_card_box">
                <div className="portfolio_card_img_box">
                    <img src={images} className='portfolio_card_image' alt="portfolio Card Image" />
                    <a href='#' target="new" className="portfolio_card_link"><LuView /></a>
                </div>
                <div className="portfolio_card_text_box">
                    <Link to='#' className="portfolio_card_title">Real Estate Website</Link>
                    <p className="portfolio_card_description">Lorem ipsum dolor sit amet adipisicing elit. Impedit, ratione!</p>
                    <div className="d-flex align-items-center justify-content-between border-top pt-2">
                        <span className="portfolio_card_date"><SlCalender />Jan-10-2025</span>
                        <span className="portfolio_card_category">Lead Generation</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard