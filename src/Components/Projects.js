import React from 'react';


const Projects = () => {

    return (
        <section className="section is-medium is-white has-text-centered">
            <div className="container has-text-centered">
                <h1 className="title has-text-purple is-size-1">Recent Projects</h1>
                <section className="section has-text-centered projects-grid is-white">
                        <div className="column has-text-centered">
                        <h2 className="title has-underline">CarPal</h2>
                        <figure className="image">
                            <div className="overlay">
                                <a className="btn-overlay" href="https://letscarpal.com">Site</a>
                                <a className="btn-overlay2" href="https://github.com/Lambda-School-Labs?q=carpal&type=&language=">Code</a>                                    
                            </div>
                            <img className=""src={require("../Assets/Carpal-comp.png")} alt="CarPal Images" />
                        </figure>
                        <div className="mobile-btns">
                            <a href="https://letscarpal.com"  rel="noopener noreferrer" target="_blank"><button className="mobile-btn">Site</button></a>
                            <a href="https://github.com/Lambda-School-Labs?q=carpal&type=&language="  rel="noopener noreferrer" target="_blank"><button className="mobile-btn">Code</button></a>
                        </div>
                    </div>
                        <div className="project-column" />
                       <div className="column">
                           <h2 className="title has-underline is-size-">SleepTracker</h2>
                            <figure className="image">
                                <div className="overlay">
                                    <button className="btn-overlay">Site</button>
                                    <button className="btn-overlay2">Code</button>                                    
                                </div>
                                <img className=""src={require("../Assets/sleeptrackerComp.png")} alt="Sleeptracker" />
                            </figure>
                            <div className="mobile-btns">
                                <a href="https://sleeptracker.danielmartin.co/"  rel="noopener noreferrer" target="_blank"><button className="mobile-btn">Site</button></a>
                                <a href="https://github.com/sleeptracker/sleeptracker_fe/tree/master/sleeptracker"  rel="noopener noreferrer" target="_blank"><button className="mobile-btn">Code</button></a>
                            </div>
                        </div>
                        <div className="project-column" />

                        <div className="column has-text-centered">
                            <h2 className="title has-underline">Silent Auction</h2>
                            <figure className="image">
                                <div className="overlay">
                                    <button className="btn-overlay">Site</button>
                                    <button className="btn-overlay2">Code</button>                                    
                                </div>
                                <img className=""src={require("../Assets/silentauction-comp.png")} alt="Sleeptracker" />
                            </figure>
                            <div className="mobile-btns">
                                <a href="https://silentauction.danielmartin.co/"  rel="noopener noreferrer" target="_blank"><button className="mobile-btn">Site</button></a>
                                <a href="https://github.com/build-week-silent-auction-2/front-end"  rel="noopener noreferrer" target="_blank"><button className="mobile-btn">Code</button></a>
                            </div>
                        </div>
                </section>
            </div>
        </section>
    )
}

export default Projects;