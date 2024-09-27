import './Introduction.css';

export function Introduction() {
    return(
        <div id='Intro-Main'>
            <div id='Text-Container'>
                <h1>
                    <span>Hi, my name is Jeziel</span>
                    <span>Full-Stack Developer</span>
                </h1>
                
                <p>I'm an aspiring Full-Stack Developer working towards 
                    completing my Bachelor's of Science in Computer Science. I'm currently
                    focusing on developing my skills with Front-End Technology; HTML, CSS, JavaScript, React.</p>
                
                <div>
                    <button className="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/jeziel-banos-02514b237/', '_blank')}>
                    <img src='/images/LinkedIn_logo_initials.png' className="linkin-logo"></img>
                    LinkedIn</button>
                    
                    <button className="Resume" onClick={() => window.open('/documents/Resume-Jeziel_Banos_Gonzalez.pdf')}>
                    View Resume
                    </button>
                </div>
                

            </div>
            <div id='Image-Container'>
                <img src='./../../../public/headshot.jpg' alt='Headshot photo of Jeziel'></img>
            </div>
        </div>

    )
}
