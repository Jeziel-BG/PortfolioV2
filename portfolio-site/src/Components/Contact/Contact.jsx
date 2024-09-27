import 'Contact.css';

function Contact(){
    return(
        <div id='Contact-Main'>

            <form id='Contact-Form' method='post'>
                <label for='senderName'>Full Name:</label>
                <input type='text' id='senderName' name='senderName' placeholder='John Doe'></input>
                <label for='senderEmail'>Email Address:</label>
                <input type='email' id='senderEmail' name='senderEmail' placeholder='example@gmail.com'></input>
                <label for='subjectLine'>Subject Line:</label>
                <input type='text' id='subjectLine' name='subjectLine' placeholder='Your subject'></input>
                <label for='message'>Email Message:</label>
                <textarea id='message' name='message' placeholder='Your email message.'></textarea>

                <input type="submit" value="Submit"></input>
            </form>


        </div>

    )
}

export default Contact;