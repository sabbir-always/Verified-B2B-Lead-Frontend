import WebLayout from '../../layout/WebLayout'
import './AppointmentPage.css'

const AppointmentPage = () => {
    return (
        <WebLayout title="Appointment">
            <div className="page_contents">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <form className='p-2 p-md-5 border bg-light'>
                                <div className="row">
                                    <div className="col-12 col-md-3 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="date" className='form-label'>Meeting Date</label>
                                            <input type="date" className="form-control" id='date' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="time_zone" className='form-label'>Time Zone</label>
                                            <select class="form-select" id='time_zone' required>
                                                <option value="">Select Option</option>
                                                <option value="one_plus">+1 - UTC</option>
                                                <option value="two_plus">+2 - UTC</option>
                                                <option value="three_plus">+3 - UTC</option>
                                                <option value="four_plus">+4 - UTC</option>
                                                <option value="five_plus">+5 - UTC</option>
                                                <option value="six_plus">+6 - UTC</option>
                                                <option value="seven_plus">+7 - UTC</option>
                                                <option value="eight_plus">+8 - UTC</option>
                                                <option value="nine_plus">+9 - UTC</option>
                                                <option value="ten_plus">+10 - UTC</option>
                                                <option value="eleven_plus">+11 - UTC</option>
                                                <option value="twelve_plus">+12 - UTC</option>
                                                <option value="one_minus">-1 - UTC</option>
                                                <option value="two_minus">-2 - UTC</option>
                                                <option value="three_minus">-3 - UTC</option>
                                                <option value="four_minus">-4 - UTC</option>
                                                <option value="five_minus">-5 - UTC</option>
                                                <option value="six_minus">-6 - UTC</option>
                                                <option value="seven_minus">-7 - UTC</option>
                                                <option value="eight_minus">-8 - UTC</option>
                                                <option value="nine_minus">-9 - UTC</option>
                                                <option value="ten_minus">-10 - UTC</option>
                                                <option value="eleven_minus">-11 - UTC</option>
                                                <option value="twelve_minus">-12 - UTC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="select_time" className='form-label'>Meeting Time</label>
                                            <select class="form-select" id='select_time' required>
                                                <option value="">Select Option</option>
                                                <option value="1_00">1 : 00</option>
                                                <option value="2_00">2 : 00</option>
                                                <option value="3_00">3 : 00</option>
                                                <option value="4_00">4 : 00</option>
                                                <option value="5_00">5 : 00</option>
                                                <option value="6_00">6 : 00</option>
                                                <option value="7_00">7 : 00</option>
                                                <option value="8_00">8 : 00</option>
                                                <option value="9_00">9 : 00</option>
                                                <option value="10_00">10 : 00</option>
                                                <option value="11_00">11 : 00</option>
                                                <option value="12_00">12 : 00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="select_ampm" className='form-label'>AM / PM</label>
                                            <select class="form-select" id='select_ampm' required>
                                                <option value="">Select Option</option>
                                                <option value="am">AM</option>
                                                <option value="pm">PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="select_metting" className='form-label'>Meeting With</label>
                                            <select class="form-select" id='select_metting' required>
                                                <option value="">Select Option</option>
                                                <option value="1">Owner/Founder</option>
                                                <option value="2">Digital Marketer</option>
                                                <option value="3">Project Maneger</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="first_name" className='form-label'>First Name</label>
                                            <input type="text" className="form-control" id='first_name' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="last_name" className='form-label'>Last Name</label>
                                            <input type="text" className="form-control" id='last_name' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email" className='form-label'>Email</label>
                                            <input type="email" className="form-control" id='email' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="phone" className='form-label'>Phone</label>
                                            <input type="number" className="form-control" id='phone' required />
                                        </div>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="address" className='form-label'>Address</label>
                                            <input type="text" className="form-control" id='address' required />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="message" className='form-label'>Message</label>
                                            <textarea name="" rows="4" className="form-control" id='message' placeholder="Type Your Message" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="appointment_btn">Booking Schedule</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default AppointmentPage