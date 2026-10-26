

function About() {
    return (
        <section className="team-section">
            <div className="team-image">
                <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
                    alt="Creative team working in an office"
                />
            </div>

            <div className="team-content">
                <h1>People who create value</h1>

                <p className="description">
                    We are a team of specialists who combine a passion for
                    technology with a sharp eye for good design. Every project
                    is shaped around the brand, its goals and its audience.
                </p>


                <div className="features">

                    <ul>
                        <li> <p> Strategic thinking</p></li>
                        <li>  <p> Tailored approach</p> </li>
                        <li><p> Real support</p></li>
                    </ul>

                </div>

                <button className="team-button">Meet the team</button>
            </div>


        </section>
    );
}

export default About;
