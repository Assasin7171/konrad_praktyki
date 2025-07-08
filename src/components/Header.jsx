const Header = () => {
    return (
        <div className="container-sm col-xxl-8 px-4 py-5  rounded">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg"
                         className="d-block mx-lg-auto img-fluid rounded"
                         alt="Bootstrap Themes" width="700" height="500"
                         loading="lazy"/></div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                        Junior Developer
                    </h1>
                    <h3>
                        Konrad Bojanecki
                    </h3>
                    <p className="lead ">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                        world’s most popular front-end open source toolkit, featuring Sass variables and mixins,
                        responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2">Primary
                        </button>
                        <button type="button"
                                className="btn btn-outline-secondary btn-lg px-4">Default
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header