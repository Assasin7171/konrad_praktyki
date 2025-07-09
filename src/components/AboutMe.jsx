import {SiDotnet, SiReact, SiCss3, SiGithub, SiJavascript} from 'react-icons/si';


const AboutMe = () => {
    return (
        <div className="container">
            <h2 className="pb-2 border-bottom text-center text-primary fw-bold">O mnie</h2>

            <div className="row row-cols-1 row-cols-md-2 align-items-center g-5 py-5">
                {/* LEWA STRONA – opis */}
                <div className="col d-flex flex-column justify-content-center gap-3">
                    <h3 className="fw-bold text-dark">
                        Cześć! 👋 Jestem Konrad – samouk i pasjonat programowania.
                    </h3>

                    <p className="text-muted lead">
                        Na co dzień uczę się C# i .NET, tworzę aplikacje webowe i mobilne,
                        a także rozwijam się w frontendzie, używając Reacta i SCSS. Kod to dla mnie nie tylko zawód – to sposób myślenia.
                    </p>

                    <p className="text-muted small">
                        Interesuje mnie clean code, dobre UI/UX i automatyzacja wszystkiego, co się da.
                        Aktualnie skupiam się na budowaniu portfolio i przygotowaniach do pierwszej pracy jako Junior Developer.
                    </p>
                </div>

                {/* PRAWA STRONA – stack technologiczny */}
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h5 className="text-secondary mb-4 text-center">Aktualnie pracuję z:</h5>
                    <div className="d-flex flex-wrap gap-4 justify-content-center">
                        {/* PRZYKŁADOWE IKONY Z REACT-ICONS */}
                        <SiDotnet size={40} color="#512BD4" />
                        <SiReact size={40} color="#61DAFB" />
                        <SiJavascript size={40} color="#f7df1e" />
                        <SiCss3 size={40} color="#264de4" />
                        <SiGithub size={40} color="#181717" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe