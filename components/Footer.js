import Script from 'next/script';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              <a href="https://undraw.co/" target="_blank">
                Illustrations par Katerina Limpitsouni
              </a>
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.instagram.com/clubalpinlyonvilleurbanne/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.facebook.com/Club-Alpin-Fran%C3%A7ais-de-Lyon-Villeurbanne-118851941629324/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a
                className="link-light text-decoration-none me-3"
                href="https://www.clubalpinlyon.fr/pages/mentions-legales.html"
              >
                Mentions légales
              </a>
              <a
                className="link-light text-decoration-none"
                href="https://github.com/Club-Alpin-Lyon-Villeurbanne/benevolat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Code source
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
