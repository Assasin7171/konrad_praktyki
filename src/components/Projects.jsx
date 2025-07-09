import { FaGithub } from "react-icons/fa";

const Projects = () => {
    // przykładowe dane projektów
    const projects = [
        {
            title: "WorkHours App",
            description: "Aplikacja mobilna do śledzenia czasu pracy, z lokalizacją i wykresami.",
            tech: ["MAUI", "API"],
            github: "https://github.com/assasin7171/workhours",
        },
        {
            title: "Portfolio Website",
            description: "Moja osobista strona jako praktykanta – z SCSS, React i Bootstrapem.",
            tech: ["React", "SCSS", "Bootstrap 5"],
            github: "https://github.com/assasin7171/konrad_praktyki/",
        },{
            title: "Strona dla przychodni Rawka",
            description: "Projekt dla przychodni rawka",
            tech: ["React", "SCSS", "Bootstrap 5", "React Router DOM"],
            github: "https://github.com/assasin7171/konrad_praktyki/",
        },
    ];

    return (
        <section className="container py-5" id="projects">
            <h2 className="pb-2 border-bottom text-center text-primary fw-bold mb-5">
                Projekty
            </h2>

            <div className="row g-4 justify-content-center">
                {projects.map((project, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-primary fw-bold">{project.title}</h5>
                                <p className="card-text text-muted">{project.description}</p>

                                <ul className="list-inline mt-auto mb-3">
                                    {project.tech.map((tech, i) => (
                                        <li key={i} className="list-inline-item badge bg-light text-dark border">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-dark btn-sm mt-auto"
                                >
                                    <FaGithub className="me-2" />
                                    Zobacz na GitHubie
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
