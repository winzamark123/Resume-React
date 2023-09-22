import "./Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Form Submit Clicked");

        const formData = new FormData(event.target);

        try {
            const response = await fetch("https://formsubmit.co/winzamark12@gmail.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                console.log('Form successfully submitted');

                // Clear the form if you want to
                event.target.reset();

                // Display a success message
                alert('Thank you! Your form has been successfully submitted.');
            } else {
                console.error('Form submission failed');
                // Show a user-friendly error message
                alert('There was an error submitting your form. Please try again later.');
            }
        } catch (error) {
            console.error("There was an error in submitting form", error);
            // Handle network errors or other issues
            alert('There was an error submitting your form. Please check your network connection and try again.');
        }
    }

    const handleMouseEnter = (event) => {
        if (cursorRef.current) {
            const targetID = event.target.id;
            switch (targetID) {
                case "contact_backBTN":
                    cursorRef.current.style.width = "60px";
                    cursorRef.current.style.height = "60px";
                    cursorRef.current.style.border = "3px solid #E2684A";
                    break;

                default:
                    cursorRef.current.style.width = "60px";
                    cursorRef.current.style.height = "60px";
                    cursorRef.current.style.border = "3px solid #16a085";
            }

            // cursorRef.current.style.width = "100px";
            // cursorRef.current.style.height = "100px";
            // cursorRef.current.style.border = "3px solid #16a085";
        }
    }


    const handleMouseLeave = () => {
        if (cursorRef.current) {
            cursorRef.current.style.width = "30px";
            cursorRef.current.style.height = "30px";
            cursorRef.current.style.border = "2px solid white";
        }
    }


    return (
        <div className="contact_container">

            <div className="contact_back"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a className="resume_back_icon" href="/">
                    <FontAwesomeIcon icon={faArrowLeft} size="4x" id="contact_backBTN" />
                </a>

            </div>
            <div className="contact_container_top">
                <div className="contact_container_top_title">
                    <h2>Contacts Page</h2>
                </div>

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

                    </div>
                </div>

                <div className="form_container_right">
                    <div className="form_container_right_title">
                        <h1>CONTACT FORM</h1>
                    </div>
                    <div className="form_container_right_divForm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <form className="form_container_right_divForm_form" onSubmit={handleFormSubmit} >
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="Wincheng.fyi Contact Email!" />
                            <input type="hidden" name="_next" value="http://localhost:3000/contact" />

                            <div className="form_container_right_divForm_form_group">
                                <input type="name" name="Name" required placeholder=" " />
                                <label>Your Name</label>
                            </div>

                            <div className="form_container_right_divForm_form_group">
                                <input type="email" name="email" required placeholder=" " />
                                <label>Email</label>
                            </div>

                            <div className="form_container_right_divForm_form_group">
                                <input type="text" name="Socials" placeholder=" " />
                                <label>LinkedIN / Instagram / Phone Number</label>
                            </div>

                            <div className="form_container_right_divForm_form_group">
                                <input type="text" name="message" required placeholder=" " />
                                <label>Message</label>

                            </div>
                            <button type="submit"> Send </button>

                        </form>
                    </div>


                </div>


            </div>

            <div className="contact_container_bottom">
                <div className="contact_container_bottom_absolute">
                    <div className="contact_container_bottom_absolute_logoContainer">
                        <div className="contact_container_bottom_absolute_logoContainer_logo">
                            <ul className="contact_container_bottom_absolute_logoContainer_logo_list"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <li className="contact_container_bottom_absolute_logoContainer_logo_list_item">
                                    <a href="https://www.instagram.com/winzamark12/">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                </li>
                                <li className="contact_container_bottom_absolute_logoContainer_logo_list_item">
                                    <a href="https://github.com/winzamark123" >
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                </li>
                                <li className="contact_container_bottom_absolute_logoContainer_logo_list_item">
                                    <a href="https://www.linkedin.com/in/teeranade-cheng-68ab28253/">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
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