import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'
import images from "../../../assets/team.png"
import "./TeamsComponent.css"

const TeamsComponent = () => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="teams_card">
                <div className="teams_card_img">
                    <img src={images} className="img-fluid" alt='Team Image' />
                </div>
                <div className="teams_card_info">
                    <Link to='' className='teams_card_name'>Md. Sabbir Hosain</Link>
                    <span className='teams_card_title'>Software Engineer</span>
                    <hr className="hr mx-0 my-2" />
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className="d-flex align-items-center gap-1">
                            <div className="teams_card_social_icon"><FaFacebookF /></div>
                            <a href="" className="teams_card_social_name" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                            <div className="teams_card_social_icon"><FaLinkedinIn /></div>
                            <a href="" className="teams_card_social_name" target="_blank" rel="noopener noreferrer">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamsComponent