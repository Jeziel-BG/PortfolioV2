import React from 'react';
import './Skills.css';


export default function Skills(){
    return(
        <div id="Skills-Main">

            <div id="Content-Container">
                <div id="Header-Content">
                    <h1 id="Section-Header">Skills & Technology</h1>
                    <span id="Section-Subtext">All challenges are solvable with the right tools. Here are the tools I commonly use.</span>
                </div>
                
                <div id="List-Container">

                    <ul id="List1">
                        <li ><img src="https://jeziel-bg.github.io/PortfolioV2/images/HTML-logo.png" id="HTML5" ></img></li>
                        <li ><img src="https://jeziel-bg.github.io/PortfolioV2/images/CSS-logo.png" id="CSS" ></img></li>
                        <li ><img src="https://jeziel-bg.github.io/PortfolioV2/images/javascript-logo.png" id="javascript" ></img></li>
                        <li ><img src="https://jeziel-bg.github.io/PortfolioV2/images/react-logo.png" id="react" ></img></li>
                    </ul>

                    <ul id="List2">
                        <li ><img src="https://jeziel-bg.github.io/PortfolioV2/images/python-logo.png"  id="python"></img></li>
                        <li ><img src="https://jeziel-bg.github.io/PortfolioV2/images/java-logo.png" id="java" ></img></li>
                        <li ><img src="https://jeziel-bg.github.io/PortfolioV2/images/C-Logo.png" id="c"></img></li>
                    </ul>

                </div>
            </div>

            <div id="Blob-Container-Skills">

                <div className="Blob" id="Yellow-Blue"></div>

                <div className="Blob" id="Orange-Blue"></div>

                <div className="Blob" id="Blue-Yellow"></div>

                <div className="Blob" id="Blue-Orange"></div>
            
  
            </div>
            
        </div>
    )
}
