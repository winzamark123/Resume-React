import "./Contact.scss"

const Contact = ({ cursorRef }) => {

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
                        <h1>ABOUT ME</h1>

                        <span className = "form_container_left_text_title" >Aspiring Software Engineer</span>
                        <div className="form_container_left_text_p">
                            <p>I'm Teeranade Cheng (Win), a {years}-year-old Thai Student
                                studying <span style={{ color: "green" }}> Computer Science @UCDavis.</span> </p>

                            <p> I like to <span style={{ color: "white" }}> tinker </span> around with new
                                <span style={{ color: "darkgreen" }}> Technologies and Products</span>,
                                <span style={{ color: "white" }}> creating </span>
                                smart user interfaces and keeping up with the latest trends in the tech space. </p>

                            <p> If anyone is interested in working together,
                                <span style={{ color: "white" }}> Don't Hesitate to Reach Out! </span> </p>
                        </div>

                    </div>
                </div>

                <div className="form_container_right">


                </div>
            </div>
        </div>
    )
}

export default Contact;