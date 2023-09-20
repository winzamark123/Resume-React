import "./Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = ({ cursorRef }) => {

    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    // Divide Time with a year
    const d = new Date();
    let years = (Math.round(d.getTime() / year) - 34);

    const info = {
        "phoneNum": "+1 530-760-5245",
        "address": "1133 OLIVE DRIVE, DAVIS, CA",
        "email": "winzamark12@gmail.com"
    }


    return (
        <div className="contact_container">
            <div className="contact_container_top">

            </div>
            <div className="form_container">
                <div className="form_container_left">
                    <div className="form_container_left_text">
                        <h1>ABOUT ME</h1>

                        <span className="form_container_left_text_title" >Aspiring Software Engineer</span>
                        <div className="form_container_left_text_p">
                            <p>I'm Teeranade Cheng (Win), a {years}-year-old Thai Student
                                studying <span style={{ color: "#16a085" }}> Computer Science @UCDavis.</span>
                            </p>

                            <p> I like to tinker around with new
                                <span style={{ color: "#16a085" }}> Technologies and Products</span>,
                                <span style={{ color: "whitesmoke" }}> creating </span>
                                smart user interfaces and keeping up with the latest trends in the tech space.
                                If anyone is interested in working together,
                                <span style={{ color: "#E2684A" }}> Please Don't Hesitate to Reach Out! </span>
                            </p>
                        </div>

                        <div className="form_container_left_text_info">
                            <div className="form_container_left_text_info_address">
                                <h2>Phone</h2>
                                <p>{info["phoneNum"]}</p>
                            </div>
                            <div className="form_container_left_text_info_phone">
                                <h2>Address</h2>
                                <p>{info["address"]}</p>
                            </div>
                            <div className="form_container_left_text_info_email">
                                <h2>Email</h2>
                                <p>{info["email"]}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="form_container_right">


                </div>


            </div>

            <div className="contact_container_bottom">
                <div className="contact_container_bottom_absolute">
                    <div className="contact_container_bottom_absolute_logoContainer">
                        <div className="contact_container_bottom_absolute_logoContainer_logo">
                            <ul className="contact_container_bottom_absolute_logoContainer_logo_list">
                                <li className="contact_container_bottom_absolute_logoContainer_logo_list_item">
                                    <a href="https://www.instagram.com/winzamark12/">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" color = "whitesmoke"/>
                                    </a>
                                </li>
                                <li className="contact_container_bottom_absolute_logoContainer_logo_list_item">
                                    <a href="https://github.com/winzamark123" >
                                        <FontAwesomeIcon icon={faGithub} size="2x"  color = "whitesmoke"/>
                                    </a>
                                </li>
                                <li className="contact_container_bottom_absolute_logoContainer_logo_list_item">
                                    <a href="https://www.linkedin.com/in/teeranade-cheng-68ab28253/">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x"  color = "whitesmoke"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="contact_container_bottom_circles">
                    <div className="contact_container_bottom_circles_circle1"></div>
                    <div className="contact_container_bottom_circles_circle2"></div>
                </div>

            </div>
        </div>
    )
}

export default Contact;