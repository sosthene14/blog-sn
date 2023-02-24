import NavBar from "../components/navBarSection";
import TopSection from "../components/topSection";
import DataAPI from "../components/dataApi";
import Footer from "../components/footer";
function Home() {
  return (
    <div className="render-article">
      
      <TopSection api={("https://newsapi.org/v2/top-headlines?country=fr&apiKey=9dc56c27b7f84eda90b863ff0748f7e4")}/>
      <NavBar />
      <DataAPI api={("https://newsapi.org/v2/top-headlines?country=fr&apiKey=9dc56c27b7f84eda90b863ff0748f7e4")}/>
      <Footer />
    </div>
  );
}
export default Home;
