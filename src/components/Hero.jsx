import {useEffect, useRef} from "react";
import Typed from "typed.js";

const Hero = () => {
    const el = useRef(null); // Ref do elementu <code>
    const typedInstance = useRef(null); // Ref do instancji Typed

    useEffect(() => {
        // Tworzymy animację dopiero gdy komponent się zamontuje
        typedInstance.current = new Typed(el.current, {
            strings: [
                'Konrad Bojanecki',
                '.NET Developer',
                'Backend developer',
            ],
            typeSpeed: 60,
            backSpeed: 25,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            smartBackspace: true
        });

        return () => {
            // Unmount → zniszcz instancję żeby nie robić syfu
            typedInstance.current.destroy();
        };
    }, []);

    return (
        <div className="container-md">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">
                    <pre className="code-line">
                         <code ref={el}/>
                      </pre>
                </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Jestem początkującym developerem, który stawia na praktykę i rozwój. Tworzę
                        nowoczesne aplikacje webowe i mobilne, ucząc się każdego dnia czegoś nowego. Sprawdź moje
                        projekty i zobacz, jak koduję rzeczywistość.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button"
                                className="btn btn-primary btn-lg px-4 gap-3">
                            Projekty
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;
