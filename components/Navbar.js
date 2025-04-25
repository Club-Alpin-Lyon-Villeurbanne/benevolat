import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <Image
            src="/assets/img/CAF_Lyon-Villeurbanne.png"
            alt="Logo du Club Alpin Lyon-Villeurbanne"
            width={120}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#benevolat">
                Bénévolat
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#roles">
                Les rôles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:benevolat@clubalpinlyon.fr">
                Nous contacter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.clubalpinlyon.fr">
                Retour au site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
