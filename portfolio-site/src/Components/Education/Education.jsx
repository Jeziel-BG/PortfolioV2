import "./Education.css";

export function Education(){
    return(
        <div id="Education-Main">
            <div id="Education-Content">
                <h1 id="Education-Header">Education</h1>
                

                <div id="Education-Container">
                    <div id="Education-Stats">
                        <span className="">Bachelor's of Science in Computer Science</span>
                        <ul id="Stats">
                            <li>University: University of Arizona</li>
                            <li>GPA: 3.87 /4.0</li>
                            <li>Graduation Date: May 2025</li>
                            <li>Minors: Information Science & Arts, Spanish</li>
                        </ul>
                    </div>

                    <div id="Relevent-Course-Container">
                        <span>Relevent Coursework</span>
                        <ul id="Coursework">
                            <li>Software Development</li>
                            <li>Object Orientated Programming and Design</li>
                            <li>Database Design</li>
                            <li>Data Visualization</li>
                            <li>Web Programming</li>
                            <li>Intro Web Design & Development</li>
                            <li>Systems Programming and Unix</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

