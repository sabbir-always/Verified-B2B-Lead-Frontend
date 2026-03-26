import WebLayout from '../../layout/WebLayout'
import { SiWise, SiPayoneer, SiBinance, SiZoom } from "react-icons/si";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { MdOutlineHandshake } from "react-icons/md";
import { PiBankThin } from "react-icons/pi";
import './PaymentsPage.css'

const PaymentsPage = () => {
    return (
        <WebLayout title="Payments">
            <div className="page_contents">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-10 mb-3">
                            <div className="payments_card">
                                <div className='d-sm-flex align-items-center gap-3'>
                                    <div className='payments_icons_1'><SiWise /></div>
                                    <div className='payments_text_box'>
                                        <h5 className='payments_method_name'>Wise</h5>
                                        <p className='payments_method_text'>The cheapest and fastest way to send money abroad.</p>
                                    </div>
                                </div>
                                <a href="https://wise.com" target='_new' className='payments_method_website_1'>Go Account <HiOutlineArrowTopRightOnSquare /></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-10 mb-3">
                            <div className="payments_card">
                                <div className='d-sm-flex align-items-center gap-3'>
                                    <div className='payments_icons_2'><MdOutlineHandshake /></div>
                                    <div className='payments_text_box'>
                                        <h5 className='payments_method_name'>Remitly</h5>
                                        <p className='payments_method_text'>Trusted by millions for international money transfers.</p>
                                    </div>
                                </div>
                                <a href="https://www.remitly.com" target='_new' className='payments_method_website_2'>Go Account <HiOutlineArrowTopRightOnSquare /></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-10 mb-3">
                            <div className="payments_card">
                                <div className='d-sm-flex align-items-center gap-3'>
                                    <div className='payments_icons_3'><SiPayoneer /></div>
                                    <div className='payments_text_box'>
                                        <h5 className='payments_method_name'>Payoneer</h5>
                                        <p className='payments_method_text'>The world's go-to partner for digital commerce.</p>
                                    </div>
                                </div>
                                <a href="https://www.payoneer.com" target='_new' className='payments_method_website_3'>Go Account <HiOutlineArrowTopRightOnSquare /></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-10 mb-3">
                            <div className="payments_card">
                                <div className='d-sm-flex align-items-center gap-3'>
                                    <div className='payments_icons_4'><SiZoom /></div>
                                    <div className='payments_text_box'>
                                        <h5 className='payments_method_name'>Xoom</h5>
                                        <p className='payments_method_text'>A PayPal service for fast and secure international transfers.</p>
                                    </div>
                                </div>
                                <a href="https://www.xoom.com" target='_new' className='payments_method_website_4'>Go Account <HiOutlineArrowTopRightOnSquare /></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-10 mb-3">
                            <div className="payments_card">
                                <div className='d-sm-flex align-items-center gap-3'>
                                    <div className='payments_icons_5'><SiBinance /></div>
                                    <div className='payments_text_box'>
                                        <h5 className='payments_method_name'>Binance</h5>
                                        <p className='payments_method_text'>The world's leading blockchain and cryptocurrency platform.</p>
                                    </div>
                                </div>
                                <a href="https://www.binance.com" target='_new' className='payments_method_website_5'>Go Account <HiOutlineArrowTopRightOnSquare /></a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-10">
                            <div className="payments_card">
                                <div className='d-sm-flex align-items-center gap-3'>
                                    <div className='payments_icons_6'><PiBankThin /></div>
                                    <div className='payments_text_box'>
                                        <h5 className='payments_method_name'>Bank Transfer</h5>
                                        <p className='payments_method_text'>Dutch-Bangla Bank Anytime Your Trusted Partner.</p>
                                    </div>
                                </div>
                                <a href="https://www.dutchbanglabank.com" target='_new' className='payments_method_website_6'>Go Account <HiOutlineArrowTopRightOnSquare /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default PaymentsPage