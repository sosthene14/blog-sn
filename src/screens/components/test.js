import axios from "axios";
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
`
function Test() {

  axios
    .get("https://api.hashnode.com/v1/articles", {
      headers: {
        Authorization: "Bearer 0c042cac-008e-464d-be20-ec3841fb7ca5",
      },
      params: {
        query: query,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
export default Test;
