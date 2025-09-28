// Education page - displays my educational background and technical skills
export default function Education(){
    return (
        <section className="section">
            <div className="section-container">
                {/* Education page title */}
                <h2 className="about-title">Education</h2>
                
                {/* Educational background card */}
                <div className="education-card">
                    <h3 className="education-title">My Educational Background</h3>
                    {/* List of my current education and relevant coursework */}
                    <ul className="education-list">
                        <li>
                            <strong>Adv. Diploma in Software Engineering</strong> - Centennial College (2024 - Present)  
                        </li>
                        <li>
                            Relevant Coursework: Web App Development, Java Programming, C# Programming, Unix/Linux Operating Systems, Advanced Database Concepts, Client-Side Web Development
                        </li>   
                    </ul>
                </div>

                {/* Technical skills */}
                <div className="about-card" style={{ marginTop: '32px' }}>
                    <h3 className="skill-title" style={{ textAlign: 'center', marginBottom: '16px' }}>Technical Skills Acquired</h3>
                    
                    {/* Skills organized in a grid layout */}
                    <div className="skills-grid">
                        {/* Programming languages section */}
                        <div className="skill-category">
                            <h4 className="skill-title">Programming Languages</h4>
                            <div className="skills-list">
                                {/* Iterating over each element using .map() to create my programming language skill tags */}
                                {["Java", "C#", "JavaScript", "SQL", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="skill-tag">{tech}</span>))}
                            </div>
                        </div>

                        {/* Frameworks and tools section */}
                        <div className="skill-category">
                            <h4 className="skill-title">Frameworks & Tools</h4>
                            <div className="skills-list">
                                {/* Iterating over each element using .map() to create my frameworks & tools skill tags */}
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
