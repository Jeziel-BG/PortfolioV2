import './Introduction.css';

function Introduction() {
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
                <button>LinkedIn</button>
                <button>Resume</button>

            </div>
            <div id='Image-Container'>
                <img src='./../../public/headshot.jpg' alt='Headshot photo of Jeziel'></img>
            </div>
        </div>

    )
}

export default Introduction;