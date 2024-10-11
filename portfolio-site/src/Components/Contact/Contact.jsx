import styles from './Contact.css';

export function Contact(){
    return(
        <div id='Contact-Main'>
            <div id="Content-Container">
                <div id="Header-Content">
                    <h1 id="Section-Header">Contact</h1>
                    <span id="Section-Subtext">Need to contact me? Use the form below or email me at Jezielbgon@gmail.com.</span>
                </div>



                <form id='Contact-Form' method='post'>
                    <div id="name">
                        <label htmlFor='senderName'>Full Name:</label>
                        <input type='text' id='senderName' className='senderName' placeholder='John Doe' required></input>
                    </div>

                    <div>
                        <label htmlFor='senderEmail'>Email Address:</label>
                        <input type='email' id='senderEmail' className='senderEmail' placeholder='example@gmail.com' required></input>
                    </div>
                    
                    <div>
                        <label htmlFor='subjectLine'>Subject Line:</label>
                        <input type='text' id='subjectLine' className='subjectLine' placeholder='Your subject' required></input>
                    </div>

                    <div>
                        <label htmlFor='message'>Email Message:</label>
                        <textarea id='message' className='message' placeholder='Your email message.' required></textarea>
                    </div>
                    <input type="submit" value="Send" id="SendButton"></input>
                </form>
            </div>


            <div id="Blob-Container-Contact">

                <div className="Blob" id="Cyan-Green"></div>

                <div className="Blob" id="Orange-Yellow"></div>

                <div className="Blob" id="Red-Violet"></div>

            </div>


        </div>

    )
}

