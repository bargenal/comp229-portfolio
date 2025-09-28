export default function Education(){
    return (
        <section className="section">
            <div className="section-container">
                <h2 className="about-title">Education</h2>
                
                <div className="education-card">
                    <h3 className="education-title">My Educational Background</h3>
                    <ul className="education-list">
                        <li>
                            <strong>Adv. Diploma in Software Engineering</strong> - Centennial College (2024 - Present)  
                        </li>
                        <li>
                            Relevant Coursework: Web App Development, Java Programming, C# Programming, Unix/Linux Operating Systems, Advanced Database Concepts, Client-Side Web Development
                        </li>   
                    </ul>
                </div>

                <div className="about-card" style={{ marginTop: '32px' }}>
                    <h3 className="skill-title" style={{ textAlign: 'center', marginBottom: '16px' }}>Technical Skills Acquired</h3>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h4 className="skill-title">Programming Languages</h4>
                            <div className="skills-list">
                                {["Java", "C#", "JavaScript", "SQL", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="skill-tag">{tech}</span>))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4 className="skill-title">Frameworks & Tools</h4>
                            <div className="skills-list">
                                {["React", "Node.js", "Express", ".NET", "MongoDB", "Git", "GitHub", "Eclipse", "Visual Studio Code"].map((tech, key) => (
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
