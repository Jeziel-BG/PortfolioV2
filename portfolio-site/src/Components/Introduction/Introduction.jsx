import './Introduction.css';

export function Introduction() {
    return(
        <div id='Intro-Main'>
            <div id='Text-Container'>
                <h1 id='Top-Header'>
                    <span>Hi, my name is Jeziel</span>
                </h1>
                <h1 id='Bottom-Header'>
                    <span>Full-Stack Developer</span>
                </h1>
                
                <div id='Description'>
                <p>I'm an aspiring Full-Stack Developer working towards 
                    completing my Bachelor's of Science in Computer Science 
                    at the University of Arizona</p>
                </div>
                
                <div id='Buttons'>
                    <button className="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/jeziel-banos-02514b237/', '_blank')}>
                    <img src='/images/LinkedIn_logo_initials.png' className="linkin-logo"></img>
                    LinkedIn</button>
                    
                    <button className="Resume" onClick={() => window.open('/documents/Resume-Jeziel_Banos_Gonzalez.pdf')}>
                    View Resume
                    </button>
                </div>
                

            </div>
            <div id='Image-Container'>
                <img src='/images/headshot.jpg' alt='Headshot photo of Jeziel' id='HeadShot'></img>
            </div>
        </div>

    )
}
