export default function Header({ title }) {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">
          Les bénévoles sont au cœur de l&apos;action.
        </div>
        <div className="masthead-heading text-uppercase">
          C&apos;est TON Club !
        </div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#benevolat">
          En savoir plus
        </a>
      </div>
    </header>
  );
}
