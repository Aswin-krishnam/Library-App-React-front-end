import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">Library App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <a className="nav-link" href="/">Add Book</a>
                            <a className="nav-link" href="/search">Search Book</a>
                            <a className="nav-link" href="/delete">Delete Book </a>
                            <a className="nav-link" href="/viewall">View All</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar