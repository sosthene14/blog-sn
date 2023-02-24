import CeoPicture from "../../assets/images/me/me.png";
import NavBar from "../components/navBarSection";
import Footer from "../components/footer";
function About() {
  return (
    <div>
      <NavBar />

      <div className="about-section">
        <div className="about-section">
          <h1>A Propos de moi</h1>
          <p className="paragraph-blog">
            Bienvenue sur mon blog ! Je m'appelle Sosthene et je suis ravi de
            vous présenter mon espace dédié à la découverte de la culture sous
            toutes ses formes. Sur ce blog, je partage mes passions pour les
            artistes, les voitures, le cinéma, les jeux vidéo, les voyages et la
            science. Je crois que ces sujets nous offrent une opportunité unique
            d'explorer le monde et de nous connecter avec les gens qui partagent
            nos centres d'intérêt. Je suis convaincu que l'art est un moyen
            d'exprimer notre créativité et notre individualité.
            <br />
            <br /> J'adore découvrir de nouveaux artistes et explorer leur
            travail. De la peinture à la sculpture, de la musique à la danse,
            j'aime tout ce qui relève de l'expression artistique. Je suis
            également passionné par les voitures. Que ce soit pour leur design,
            leur mécanique ou leur histoire, les voitures sont des machines
            fascinantes qui ont changé la manière dont nous nous déplaçons.
            <br /> Je suis toujours à l'affût des dernières tendances dans
            l'industrie automobile. En ce qui concerne le cinéma, je suis un
            cinéphile invétéré. J'aime tout type de film, des classiques du
            cinéma aux blockbusters les plus récents. J'adore aussi les jeux
            vidéo, qui sont une forme d'art interactive qui permet de vivre des
            aventures incroyables. Les voyages sont également une de mes
            passions.
          </p>
        </div>

        <div className="about-column">
          <div className="about-card">
            <div className="about-container">
              <h2>Sosthene</h2>
              <img src={CeoPicture} className="about-img" />
              <p className="about-title">Developpeur Fullstack</p>
              <p>
                <button className="about-button">Contacter</button>
              </p>
            </div>
          </div>
        </div>
        <p className="paragraph-blog">
          J'aime découvrir de nouveaux endroits, des cultures différentes et des
          personnes intéressantes.
          <br /> J'aime partager mes expériences de voyage et donner des
          conseils sur les destinations à ne pas manquer. Enfin, la science est
          un domaine qui m'a toujours fasciné. J'aime apprendre comment
          fonctionnent les choses, comprendre les phénomènes naturels et
          découvrir de nouvelles technologies.<br/><br/> J'espère que ce blog vous plaira
          et vous inspirera à explorer de nouveaux horizons culturels. N'hésitez
          pas à me contacter si vous avez des questions ou des suggestions pour
          améliorer ce blog. Merci de votre visite !
        </p>
      </div>

      <Footer />
    </div>
  );
}
export default About;
