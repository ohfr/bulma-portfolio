import React from 'react';


const Projects = () => {

    return (
        <section className="section is-medium is-white has-text-centered">
            <div className="container has-text-centered">
                <h1 className="title has-text-purple is-size-1">Recent Projects</h1>
                <section className="section has-text-centered projects-grid is-white">
                    <h2 className="title has-underline">CarPal</h2>
                    <div className="columns">
                        <div className="column has-text-centered is-two-thirds">
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

                            <div className="column has-text-centered ">
                                <p className="subtitle">CarPal is a carpooling app that allows you to connect with people nearby to share a common route. CarPal was a 4 month project, build by myself and 7 other developers.</p>
                            </div>
                    </div>
                        <div className="project-column" />
                        <h2 className="title has-underline is-size-">SleepTracker</h2>
                        <div className="columns">
                           <div className="column has-text-centered is-two-thirds">
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

                           <div className="column has-text-centered">
                                <p className="subtitle">
                                    SleepTracker is app that tracks when you sleep, how you felt when you woke up, and uses an algorithm to determine when you sleep best. SleepTracker was a 2 week, 2 develper project.
                                </p>
                           </div>
                        </div>
                        <div className="project-column" />

                        <h2 className="title has-underline">Silent Auction</h2>
                        <div className="columns">

                            <div className="column has-text-centered is-two-thirds">
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

                            <div className="column has-text-centered">
                                <p className="subtitle">
                                    Silent Auction is an auctioning site for selling and buying various goods, it uses a timing system similar to eBay.Silent Auction was a 2 week, solo project.
                                </p>
                            </div>
                        </div>
                </section>
            </div>
        </section>
    )
}

export default Projects;