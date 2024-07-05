import "./app.scss"
import NavBar from "./components/nav/navbar";
const App = () => {
  return <div>
    <section id="Homepage">
      <NavBar></NavBar>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
