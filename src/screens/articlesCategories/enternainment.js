import DataAPI from "../components/dataApi";
import Footer from "../components/footer";
function Entertainment()
{
    const apiKey = "RNwwcphQRRy3NZ4_RXdc6ERIlRLq-PnQ0viuMsxZ8GI";
    const apiEndpoint = "https://api.newscatcherapi.com/v2/latest_headlines?countries=FR&topic=entertainment";
    return(
        <>
        <DataAPI apiKey={apiKey} apiEndpoint={apiEndpoint} />
        <Footer />
        </>
    )
    
}
export default Entertainment;