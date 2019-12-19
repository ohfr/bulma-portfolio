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
                        <h2 className="subtitle">I build computers, keyboards, and software.</h2>
                        <img src={require('../Assets/avatar.png')} alt="avatar" />
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