import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import Script from 'next/script'
import roles from './roles.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bénévolat au Club Alpin Francais de Lyon-Villeurbanne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id='page-top'>
        <Navbar />
        <Header />
        <section className="fdb-block" id="benevolat">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-12 text-center">
                <h1>Devenir bénévole ?</h1>
              </div>
            </div>

            <div className="row text-left align-items-center pt-5 pb-md-5">
              <div className="col-4 col-md-5">
                <img alt="image" className="img-fluid" src="./assets/img/commitment.svg" />
              </div>
              <div className="col-12 col-md-5 m-md-auto">
                <h2><strong>Engagement</strong></h2>
                <p className="lead">S’enrichir humainement en s’impliquant à la hauteur de ses disponibilités dans des actions qui ont du sens.</p>
              </div>
            </div>

            <div className="row text-left align-items-center pt-5 pb-md-5">
              <div className="col-4 col-md-5 m-md-auto order-md-5">
                <img alt="image" className="img-fluid" src="./assets/img/high-five.svg" />
              </div>
              <div className="col-12 col-md-5">
                <h2><strong>Des belles rencontres</strong></h2>
                <p className="lead">Devenir bénévole, c'est rejoindre une équipe accueillante, bienveillante et riche de volontaires de tous bords, animés par une passion commune: la montagne.</p>
              </div>
            </div>

            <div className="row text-left align-items-center pt-5">
              <div className="col-4 col-md-5">
                <img alt="image" className="img-fluid" src="./assets/img/competences.svg" />
              </div>
              <div className="col-12 col-md-5 m-md-auto">
                <h2><strong>Apprendre et partager des compétences</strong></h2>
                <p className="lead">Participer aux projets du Club permet de mettre en pratique vos compétences acquises dans un cadre professionnel, étudiant ou de loisir et d'en apprendre des nouvelles. Ces compétences peuvent être à leur tour utile pour votre vie professionnelle.<br />
                  Les projets du Club sont divers et variés. Cela va de l'accueil des nouveaux adhérents au développement d'outils informatiques en passant par la gestion et le suivi du matériel. Et ne pensez pas qu'il faille forcement avoir de l'expérience, beaucoup de rôles sont ouverts aux débutants.
                </p>
              </div>
            </div>

            <div className="row text-left align-items-center pt-5 pb-md-5">
              <div className="col-4 col-md-5 m-md-auto order-md-5">
                <img alt="image" className="img-fluid" src="./assets/img/awesome.svg" />
              </div>
              <div className="col-12 col-md-5">
                <h2><strong>Des avantages</strong></h2>
                <p className="lead">Pour les bénévoles dont l'engagement est important et a été approuvé par le responsable, il est possible d'obtenir le statut de bénévole actif. <br />
                  Etre bénévole actif, c'est avoir accès à différents avantages tels que:<br />
                  - prise en charge la part fédérale de l'abonnement<br />
                  - prise en charge de l'assurance renforcée<br />
                  - réduction supplémentaire chez certains partenaires<br />
                  - reconnaissance avec la carte de bénévoles<br />
                  - invitation à des évenements dédiés aux bénévoles<br />
                  - obtention de droits de formation supplémentaires avec le <a href="https://www.associations.gouv.fr/le-compte-d-engagement-citoyen-cec.html" target="_blank">dispositif gouvernemental "Compte d'Engagement Citoyen"</a>
                </p>
              </div>
            </div>


          </div>
        </section>
        <section className="page-section bg-light" id="roles">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Les rôles</h2>
              <h3 className="section-subheading text-muted">Voici une liste non exhaustive des rôles qui pourraient être
                utiles au Club.</h3>
            </div>
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Département</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                {roles.map((item, i) => (
                    <tr key={i}>
                        <td>{item.Nom}</td>
                        <td>{item.Departement}</td>
                        <td>{item.Description}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p>
                  Merci de nous contacter par mail en nous précisant pour quel(s) rôle(s) vous pourriez vous engager. 🥳<br />
                  Vous pouvez aussi simplement nous contacter pour avoir plus d'infos. ℹ️
                  <br /><a className="cta-link" href="mailto:benevolat@clubalpinlyon.fr">benevolat@clubalpinlyon.fr</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">La majorité des rôles sont accessibles aux débutants, n'hésitez pas à nous contacter pour en savoir plus sur un rôle en particulier.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

        <Script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"/>
        <Script src="/scripts.js"/>
    </div>
  )
}
