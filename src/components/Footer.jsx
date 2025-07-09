import {
    SiGithub,
    SiLinkedin,
    SiGmail,
} from "react-icons/si";

const Footer = () => {
    return (
        <footer className="bg-light border-top mt-5 pt-4 pb-3">
            <div className="container text-center">
                {/* Górna część */}
                <div className="row mb-3">
                    <div className="col-12 col-md-6 mb-2 mb-md-0">
                        <h5 className="fw-bold text-primary">Konrad Bojanecki</h5>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center gap-3">
                        <a href="#about" className="text-decoration-none text-muted">O mnie</a>
                        <a href="#projects" className="text-decoration-none text-muted">Projekty</a>
                        <a href="#contact" className="text-decoration-none text-muted">Kontakt</a>
                    </div>
                </div>

                {/* Social icons */}
                <div className="d-flex justify-content-center gap-4 mb-3">
                    <a href="https://github.com/assasin7171" target="_blank" rel="noopener noreferrer">
                        <SiGithub size={24} className="text-dark hover-opacity" />
                    </a>
                    <a href="mailto:kbojanecki@gmail.com">
                        <SiGmail size={24} className="text-danger hover-opacity" />
                    </a>
                    <a href="https://linkedin.com/in/twoj-linkedin" target="_blank" rel="noopener noreferrer">
                        <SiLinkedin size={24} className="text-primary hover-opacity" />
                    </a>
                </div>

                {/* Stopka */}
                <small className="text-muted">
                    © {new Date().getFullYear()} Konrad Bojanecki – All rights reserved
                </small>
            </div>
        </footer>
    );
};

export default Footer;
