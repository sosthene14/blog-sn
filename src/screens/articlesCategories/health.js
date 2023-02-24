import DataAPI from "../components/dataApi";
import NavBar from "../components/navBarSection";
import Footer from "../components/footer";
import TopSection from "../components/topSection";
function Health()
{
    return(
        <>
        <TopSection api={("https://newsapi.org/v2/top-headlines?category=health&country=fr&apiKey=9dc56c27b7f84eda90b863ff0748f7e4")}/>
        <NavBar />
        <DataAPI api={("https://newsapi.org/v2/top-headlines?category=health&country=fr&apiKey=9dc56c27b7f84eda90b863ff0748f7e4")}/>
        <Footer />
        </>
    )
    
}
export default Health;