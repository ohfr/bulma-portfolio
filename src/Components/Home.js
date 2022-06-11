import React from 'react';
import Typical from 'react-typical';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title flex">Hi there, I'm <Typical className= "title purple" steps={['Daniel', 2000, 'a developer', 2000, 'a keyboard addict', 2000, 'a car enthusiast', 2000]} loop={Infinity}/></h1>
                        <h2 className="subtitle">I build cars, keyboards, and software.</h2>
                        <p className="subtitle">
                            I'm a software engineer from Vinton, VA. I'm an enthusiastic programmer who loves to learn anything new! I currently work at Genesys as a Software Engineer, I work on a realtime chat app using TypeScript. I graduated from Lambda School in September 2020, with a focus in web development, Lambda taught me to push myself and to always be hungry for new knowledge.
                        </p>
                        <div className="flex mb-10">
                            <a href="https://github.com/ohfr" className="link-class">Github</a>
                            <a href="https://linkedin.com/in/daniel-p-martin" className="link-class">LinkedIn</a>
                        </div>
                        {/* <img src={require('../Assets/avatar.png')} alt="avatar" /> */}
                    </div>
                </div>
            </div>
            <About />
            <Projects />
            <Footer />
        </>
    )
}

export default Home;