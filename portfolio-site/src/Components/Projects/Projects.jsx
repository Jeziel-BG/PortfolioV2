import "./Projects.css"

export function Projects(){
    return(
        <div id="Projects-Main">
            <div id="Grid">

                <div className="project-folder">
                    <div className="icon">
                        <img className="icon-image" src="/images/python-logo.png"></img>
                    </div>

                    <h1 className="project-title">Twitter Sentimental Analysis</h1>
                    <div id="description">
                        <p className="project-description">
                            A collection of Machine Learning models trained on the same Twitter dataset
                            with different training approaches that can accurately predict if a
                            given Twitter post is considered sexist. (Group Project)
                        </p>
                    </div>
                    <button className="project-button" onClick={() => window.open('https://github.com/Jeziel-BG/Sentiment_Analysis', "_blank")}>View GitHub</button>
                </div>

                <div className="project-folder"> 
                    <div className="icon">
                        <img className="icon-image" src="/images/java-logo.png"></img>
                    </div>
                    <h1 className="project-title">Mock Arcade Database Design & Implementation</h1>
                    <div id="description">
                        <p className="project-description">
                            A collaboratively built java program utilizing JDBC to connect to an Oracle SQL Database 
                            for a restaurant-arcade buisness allowing front desk
                            workers to update and query the database. 
                        </p>
                    </div>
                    <button className="project-button" onClick={() => window.open('https://github.com/Jeziel-BG/Mock-Pizzeria-DBMS', "_blank")}>View GitHub</button>
                </div>

                <div className="project-folder"> 
                    <div className="icon">
                        <img className="icon-image" src="/images/react-logo.png"></img>
                    </div>
                    <h1 className="project-title">Portfolio Website</h1>
                    <div id="description">
                        <p className="project-description">
                            A portfolio website made using React that introduces who I am and the 
                            projects that I've worked on.
                        </p>
                    </div>
                    <button className="project-button" onClick={() => window.open('https://github.com/Jeziel-BG/portfolio', "_blank")}>View GitHub</button>
                </div>

                

            </div>

        </div>
    )
}