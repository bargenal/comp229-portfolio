// Projects page - this displays my featured projects in a grid layout
export default function Projects(){
    return (
        <section className="section">
            <div className="section-container">
                {/* Projects page title */}
                <h2 className="about-title">Featured Projects</h2>

                {/* Grid container for project cards */}
                <div className="projects-grid">
                    
                    {/* Banking System project */}
                    <div className="project-card">
                        <h3 className="project-title">Banking System Simulation</h3>
                        <p className="project-description">Banking system where you can deposit, withdraw, and manage accounts! Includes safeguards like overdraft limits and minimum balance requirements.</p>
                        
                        {/* Displaying the technology used for this project */}
                        <div className="project-tech">
                            <span className="tech-tag">C#</span>
                            <span className="tech-tag">.NET</span>
                        </div>
                        
                        {/* Link to the project's GitHub repository */}
                        <div className="project-links">
                            <a href="https://github.com/brandon-almanza/C-Sharp-Programming/tree/main/Banking%20System%20Simulation/A3_BrandonArgenalAlmanza" className="project-link primary">View Project</a>
                        </div>
                    </div>

                    {/* Bug Smasher Game project */}
                    <div className="project-card">
                        <h3 className="project-title">Bug Smasher Game</h3>
                        <p className="project-description">Interactive web game where you squash bugs to earn points! However your reaction speed will be tested.</p>
                        
                        {/* Displaying the technology used for this project */}
                        <div className="project-tech">
                            <span className="tech-tag">HTML</span>
                            <span className="tech-tag">CSS</span>
                            <span className="tech-tag">JavaScript</span>
                        </div>
                        
                        {/* Link to project's GitHub repository */}
                        <div className="project-links">
                            <a href="https://github.com/brandon-almanza/Client-Side-Web-Development/tree/main/Assignment%205%20(Bug%20Smasher%20Game)" className="project-link primary">View Project</a>
                        </div>
                    </div>

                    {/* Load Balancer project */}
                    <div className="project-card">
                        <h3 className="project-title">Load Balancer & Web Server Hosting</h3>
                        <p className="project-description">Configured a load balancer with multiple web servers using CentOS virtual machines! Used Nginx configurations to distribute traffic efficiently and ensure high availability.</p>
                        
                        {/* Displaying the technology used for this project */}
                        <div className="project-tech">
                            <span className="tech-tag">CentOS</span>
                            <span className="tech-tag">HTML</span>
                            <span className="tech-tag">NGINX</span>
                        </div>
                        
                        {/* link to project's GitHub repository (NEED TO DO AS I DO NOT HAVE A REPO FOR IT YET) */}
                        <div className="project-links">
                            <a href="#projects" className="project-link primary">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}