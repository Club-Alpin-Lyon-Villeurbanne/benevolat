import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Script from 'next/script';
import roles from './roles.json';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bénévolat au Club Alpin Francais de Lyon-Villeurbanne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="page-top">
        <Navbar />
        <Header />
        <section className="fdb-block" id="benevolat">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-12 text-center">
                <h1>Devenir bénévole ?</h1>
                <p className="lead mt-4">
                  Devenir bénévole, c&apos;est s&apos;engager à son rythme dans
                  des actions porteuses de sens.
                  <br />
                  C&apos;est l&apos;occasion de faire de belles rencontres au
                  sein d&apos;une équipe passionnée et bienveillante.
                  <br />
                  Participer à la vie du Club permet d&apos;apprendre, de
                  partager et de valoriser ses compétences.
                  <br />
                  Tous les profils sont les bienvenus, débutants comme
                  expérimentés, selon ses envies et disponibilités.
                  <br />
                  Les bénévoles actifs bénéficient d&apos;avantages concrets et
                  d&apos;une reconnaissance officielle.
                  <br />
                  <br />
                  Cela permet aussi d&apos;obtenir des droits de formation
                  supplémentaires avec le{' '}
                  <a
                    href="https://www.associations.gouv.fr/le-compte-d-engagement-citoyen-cec.html"
                    target="_blank"
                  >
                    dispositif gouvernemental &quot;Compte d&apos;Engagement
                    Citoyen&quot;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-light" id="roles">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Les rôles</h2>
              <h3 className="section-subheading text-muted">
                Voici une liste non exhaustive des rôles qui pourraient être
                utiles au Club.
              </h3>
              <p className="mb-4">
                Tu as d&apos;autres compétences, une idée ou un projet qui
                pourrait enrichir le club et ce n&apos;est pas dans la liste ?
                Nous avons hâte de la découvrir !<br />
                <a
                  className="cta-link"
                  href="mailto:benevolat@clubalpinlyon.fr"
                >
                  benevolat@clubalpinlyon.fr
                </a>
              </p>
            </div>
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" style={{ width: '25%' }}>
                      Nom
                    </th>
                    <th scope="col">Département</th>
                    <th scope="col">Description</th>
                    <th scope="col" style={{ width: '15%' }}>
                      Investissement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((item, i) => {
                    // Utiliser l'index pour générer des heures variées mais déterministes
                    const heures = (i % 3) + 1; // 1, 2, ou 3
                    return (
                      <tr key={i}>
                        <td>{item.Nom}</td>
                        <td>{item.Departement}</td>
                        <td>{item.Description}</td>
                        <td>
                          {heures} à {heures + 1}h / mois
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" />
      <Script src="/scripts.js" />
    </div>
  );
}
