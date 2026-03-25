import { FaRegEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiUserLocationLine, RiSendPlane2Fill } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { Link } from "react-router-dom";
import "./FooterComponent.css"

const FooterComponent = () => {
    return (
        <section className="footer_section">
            <div className="container">
                <div className="row justify-content-between border-bottom pt-5 pb-3">
                    <div className="col-md-4">
                        <Link className="mb-3 d-block" to="/"><div className='footer_brand_name'><span className="footer_brand_color">AS</span> Shamim</div></Link>
                        <p className='footer_text'>We are a results driven digital agency focused on crafting innovative strategies, designing impactful experiences, and helping brands grow through creativity, technology, and a deep understanding of their audience.</p>
                    </div>

                    <div className="col-md-3 my-4 my-md-0">
                        <h2 className='footer_title'>Contact Info</h2>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <span className='footer_icon'><MdOutlinePhoneInTalk /></span>
                            <a href="tel:01819184455" className='footer_icon_text'>+880 1819 184 455</a>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <span className='footer_icon'><FaRegEnvelope /></span>
                            <a href="mailto:jibonmimm12@gmail.com" className='footer_icon_text'>jibonmimm12@gmail.com</a>
                        </div>
                        <div className="d-flex gap-2">
                            <span className='footer_icon'><RiUserLocationLine /></span>
                            <p className='footer_icon_text'>Rajshahi, Bangladesh</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h2 className='footer_title d-none d-md-block'>Subscribe For Latest Information</h2>
                        <form className="d-none d-md-flex" role="search">
                            <input className="form-control rounded-0" type="search" placeholder="Email Address" />
                            <button className="footer_subscribe_btn" type="submit"><RiSendPlane2Fill /></button>
                        </form>
                        <div className='footer_social_media_box'>
                            <a href='#' target="_new" className='footer_social_media_icon'><FaFacebookF /></a>
                            <a href='#' target="_new" className='footer_social_media_icon'><FaLinkedinIn /></a>
                            <a href='#' target="_new" className='footer_social_media_icon'><FaInstagram /></a>
                            <a href='#' target="_new" className='footer_social_media_icon'><TbBrandFiverr /></a>
                            <a href='#' target="_new" className='footer_social_media_icon'><SiUpwork /></a>
                        </div>
                    </div>

                </div>
                <div className="row align-items-center justify-content-between py-4">
                    <div className="col-md-6">
                        <p className='text-center text-md-start footer_copyright'>Copyright © 2025 AS Shamim. All rights reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
                            <Link href='' className='text-center text-md-end terms_condition'>Terms & Condition</Link>
                            <Link href='' className='text-center text-md-end terms_condition'>Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterComponent