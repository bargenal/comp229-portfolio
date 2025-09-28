import brandonImage from './assets/images/Brandon2360.jpeg';

export default function About(){
    const frontendSkills = ["React", "Node.js", "Express", "JavaScript", "HTML", "CSS"];
    const backendSkills = ["C#", ".NET", "Java", "SQL", "MongoDB"];

    return (
        <section className="section">
            <div className="section-container">
                <h2 className="about-title">About Me</h2>
                
                <div className="about-card">
                    <h2>Hello! My name is Brandon Almanza</h2>
                    <img src={brandonImage} alt="Brandon Almanza" />
                    <p className="about-description">
                        I am a passionate aspiring developer with hands-on experience building applications in C# and Java,
                        with additional knowledge of web technologies and server configuration. 
                        <br />
                        <br />
                        I chose this field because I've always been surrounded by technology and soon became fascinated
                         with the possibilities of what can be created and built with it, and software development felt like the place to be.
                            <br />
                            <br />
                    </p>
                    <a href="https://drive.google.com/file/d/1fSzfG8i2jNcG8yVAZz_88dCACwu_FZ4-/view?usp=sharing" className="resume-link"><h3>View Resume</h3></a>

                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3 className="skill-title">Frontend</h3>
                            <div className="skills-list">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="skill-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3 className="skill-title">Backend</h3>
                            <div className="skills-list">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="skill-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}