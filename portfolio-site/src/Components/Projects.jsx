import "./Project.css";

function Projects(){
    return(
        <div id="Projects-Main">
            <h1>Projects</h1>
            <div id="Grid-Layout">
                <div className="Project-Holder">
                    <h2>Mock Restaurant Arcade Database Design & Implementation</h2>

                    <p>Collaboratively designed a scalable and updatable database model with 3 group members to fulfill a Mock Pizzeria Arcade’s needs.</p>

                    <div class="icon-container">
                        <img src="" alt="Java icon"></img>
                        <img src="" alt="SQL icon"></img>
                    </div>
                </div>

                <div className="Project-Holder">
                    <h2>Sentiment Analysis Model</h2>

                    <p>Collaboratively developed 4 sentiment analysis models to detect sexism in social media posts utilizing Python libraries Pandas, sklearn and NLTK.</p>

                    <div class="icon-container">
                        <img src="" alt="Python icon"></img>
                    </div>
                </div>

                <div className="Project-Holder">
                    <h2>Facial Recognition</h2>

                    <p>Python script using python library OpenCV capable of identifying "authorized" individuals and capable of sending email alerts when "unathorized" individuals are identified</p>

                    <div class="icon-container">
                        <img src="" alt="Python icon"></img>
                    </div>
                </div>
                    <h2>Portfolio Website</h2>

                    <p>Portfolio website using HTML, CSS, and React.js</p>

                    <div class="icon-container">
                        <img src="" alt="HTML icon"></img>
                        <img src="" alt="CSS icon"></img>
                        <img src="" alt="React icon"></img>
                    </div>
                <div className="Project-Holder">

                </div>
            </div>

        </div>
    )
}

export default Projects;