import Footer from "../components/footer";
import Blogposts from "../../blogPost";
import NavBar from "../components/navBarSection";
import TopSection from "../components/topSection";
import SearchInput from "../components/searchInput";
function Home() {
  const query = `
  {
      user(username: "rutikwankhade") {
          publication {
            posts{
              slug
              title
              brief
              coverImage
              totalReactions
              dateAdded
              replyCount
            
            }
          }
        }
  }
`;
  return (
    <div className="render-article">
      <TopSection/>
      <SearchInput query={query}/>
      <NavBar/>
      <Blogposts query={query}/>
      <Footer />
    </div>
  );
}
export default Home;
