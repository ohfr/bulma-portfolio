import React from 'react';


const About = () => {

    return (
        <section className="section purple-section is-medium is-primary has-text-centered is-long">
            <div className="container">
                <div className="columns is-centered">
                    <h1 className="title backgroundText">Here's some of the things I do best</h1>
                </div>
            </div>
            <div className="container is-narrow skills">
                <div className="box">
                    <div className="content">
                        <div className="columns is-centered">
                            <div className="column">
                                <h2 className="title is-size-4 is-spaced">Front-End</h2>
                                <p className="list-title has-text-purple has-text-weight-bold">Languages</p>
                                <p>JavaScript, HTML, CSS</p>
                                <p className="list-title has-text-purple has-text-weight-bold">Technologies</p>
                                <ul>
                                    <li>React.js</li>
                                    <li>Redux</li>
                                    <li>Jest</li>
                                    <li>React-Router</li>
                                    <li>Bulma</li>
                                    <li>Material-UI</li>
                                    <li>Bootstrap</li>
                                    <li>LESS</li>
                                    <li>SASS</li>
                                    <li>Axios</li>
                                </ul>
                            </div>
                            <div className="column">
                                <h2 className="title is-size-4 is-spaced">Back-End</h2>
                                <p className="list-title has-text-purple has-text-weight-bold">Languages</p>
                                <p>SQL, JavaScript, Java, Python</p>
                                <p className="list-title has-text-purple has-text-weight-bold">Technologies</p>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Knex.js</li>
                                    <li>SQLite3</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;