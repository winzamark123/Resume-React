import "./Contact.scss"

const Contact = () => {

    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    // Divide Time with a year
    const d = new Date();
    let years = (Math.round(d.getTime() / year) - 34);


    return (
        <div className="contact_container">
            <div className="form_container">
                <div className="form_container_left">
                    <div className="form_container_left_text">
                        <h1>About Me</h1>
                        <span>Aspiring Software Engineer</span>
                        <p>I'm Teeranade Cheng (Win), a {years}-year-old Thai Student
                            studying <span style={{ color: "green" }}> Computer Science @UCDavis</span></p>
                        <p> I like to <span style={{ color: "orange" }}> tinker </span> around with new
                            <span style={{ color: "green" }}> Technologies and Products</span>,
                            <span style={{ color: "orange" }}> creating </span>
                            smart user interfaces and keeping up with the latest trends in the tech space.
                        </p>
                        <p> If anyone is interested in working together
                            <span style={{ color: "orange" }}> Don't Hesitate to Reach Out! </span> </p>
                    </div>
                </div>

                <div className="form_container_right">


                </div>
            </div>
        </div>
    )
}

export default Contact;