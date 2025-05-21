import './Introduction.css';

export default function Introduction() {
    return(
        <div id='Intro-Main'>
            <div id='Content'>
                <div id='Text-Container'>
                    <h1 id='Top-Header'>
                        <span>Hi, I'm Jeziel Banos Gonzalez</span>
                    </h1>
                    <h1 id='Bottom-Header'>
                        <span id='Typewriter'>Software Developer</span>
                    </h1>
                    
                    <div id='Description'>
                    <p>I'm a University of Arizona Alumni and an aspiring Software Developer looking for entry-level employment. During my free time I enjoy working with code to solve 
                        problems.  
                    </p>
                    </div>
                    
                    <div id='Buttons'>
                        <button className="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/jeziel-banos-gonzalez/', '_blank')}>
                        LinkedIn</button>
                        
                        <button className="Resume" onClick={() => window.open('https://jeziel-bg.github.io/PortfolioV2/documents/Resume-Jeziel_Banos_Gonzalez.pdf')}>
                        View Resume
                        </button>
                    </div>
                    

                </div>
                <div id='Image-Container'>
                    <img src= "https://jeziel-bg.github.io/PortfolioV2/images/headshot.jpg" alt='Headshot photo of Jeziel' id='HeadShot'></img>
                </div>
            </div>
        </div>

    )
}
