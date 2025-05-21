import "./Projects.css"

export default function Projects(){
    return(
        <div id="Projects-Main">
            <div id="all">
            <div id="Header-Content">
                <h1 id="Section-Header">Projects</h1>
            </div>
            <div id="Grid">

                <div className="project-folder">
                    <div className="icon">
                        <img className="icon-image" src="https://jeziel-bg.github.io/PortfolioV2//images/python-logo.png"></img>
                    </div>

                    <h1 className="project-title">Music IR System</h1>
                    <div id="description">
                        <p className="project-description">
                            A collaboratively built Information Retrieval System for music. The system supports queries on artist name, album name, track name, and genre.
                            The system will return the top 10 best matching songs / tracks based on the provided query from the user. The system prioritizes matching the 
                            query portions in the following order: track name, artist name, album name, genre. 
                        </p>
                    </div>
                    <button className="project-button" onClick={() => window.open('https://github.com/JezielBG-UofA/Music_IR_CSC_483', "_blank")}>View GitHub</button>
                </div>

                <div className="project-folder">
                    <div className="icon">
                        <img className="icon-image" src="https://jeziel-bg.github.io/PortfolioV2//images/HTML-logo.png"></img>
                    </div>

                    <h1 className="project-title">Tetris For Life!</h1>
                    <div id="description">
                        <p className="project-description">
                            A collaboratively built website utilizing base HTML, CSS, and JavaScript displaying the complex and rich
                            history of the game Tetris. The website features information about popular Tetris spin offs and the history
                            of Tetris' rich competitive scene. (Group Project)
                        </p>
                    </div>
                    <button className="project-button" onClick={() => window.open('https://tetris-for-life.netlify.app/', "_blank")}>Visit Website</button>
                </div>

                <div className="project-folder"> 
                    <div className="icon">
                        <img className="icon-image" src="https://jeziel-bg.github.io/PortfolioV2//images/react-logo.png"></img>
                    </div>
                    <h1 className="project-title">Portfolio Website</h1>
                    <div id="description">
                        <p className="project-description">
                            A portfolio website developed using HTML5, CSS, React Native, and JavaScript.
                            Contains an introduction, project showcase, education, skills, and contact form section.
                        </p>
                    </div>
                    <button className="project-button" onClick={() => window.open('https://github.com/Jeziel-BG/PortfolioV2', "_blank")}>View GitHub</button>
                </div>

                <div className="project-folder">
                    <div className="icon">
                        <img className="icon-image" src="https://jeziel-bg.github.io/PortfolioV2//images/python-logo.png"></img>
                    </div>

                    <h1 className="project-title">Sentimental Analysis</h1>
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
                        <img className="icon-image" src="https://jeziel-bg.github.io/PortfolioV2//images/java-logo.png"></img>
                    </div>
                    <h1 className="project-title">Arcade DB Design & Implementation</h1>
                    <div id="description">
                        <p className="project-description">
                            A collaboratively built java program utilizing JDBC to connect to an Oracle SQL Database 
                            for a restaurant-arcade buisness allowing front desk
                            workers to update and query the database. 
                        </p>
                    </div>
                    <button className="project-button" onClick={() => window.open('https://github.com/Jeziel-BG/Mock-Pizzeria-DBMS', "_blank")}>View GitHub</button>
                </div>

            

                
                </div>

            

            </div>

        </div>
    )
}