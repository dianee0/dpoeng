import './contact.css'

function Contact(){
    return(
        <div>
            <h1>Get In Touch</h1>
            <div className='contact-section'>
                <div className='picture-side'>
                    <img src='./images/imgRectangle.png' alt="Contact" />
                </div>
                <form className='message-container'>
                    <h2>Send a message</h2>
                    <div className='input-container'>
                            <label for='fname'>Name</label>
                            <input type='text' name ='firstname' placeholder='Your Name' />

                            <label for='email'>Email</label>
                            <input className='email' type='email' placeholder='youremail@example.com' />

                            <label for='message'>Message</label>
                            <textarea className='message' name='message' placeholder='Your message'></textarea>

                            <button id='send-message'>Submit Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;