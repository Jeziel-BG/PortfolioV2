import styles from './Contact.css';

export function Contact(){
    return(
        <div id='Contact-Main'>

            <div id="Header-Content">
                <h1 id="Section-Header">Contact</h1>
                <span id="Section-Subtext">Need to contact me? Use the form below or email me at Jezielbgon@gmail.com.</span>
            </div>

            <form id='Contact-Form' method='post'>
                <div id="name">
                    <label for='senderName'>Full Name:</label>
                    <input type='text' id='senderName' className='senderName' placeholder='John Doe'></input>
                </div>

                <div>
                    <label for='senderEmail'>Email Address:</label>
                    <input type='email' id='senderEmail' className='senderEmail' placeholder='example@gmail.com'></input>
                </div>
                
                <div>
                    <label for='subjectLine'>Subject Line:</label>
                    <input type='text' id='subjectLine' className='subjectLine' placeholder='Your subject'></input>
                </div>

                <div>
                    <label for='message'>Email Message:</label>
                    <textarea id='message' className='message' placeholder='Your email message.'></textarea>
                </div>
                <input type="submit" value="Send" id="SendButton"></input>
            </form>


            <div id="Blob-Container">

                <div className="Blob" id="Cyan-Blue"></div>

                <div className="Blob" id="Orange-Blue"></div>

                <div className="Blob" id="Blue-Yellow"></div>

                <div className="Blob" id="Blue-Orange"></div>

            </div>


        </div>

    )
}

