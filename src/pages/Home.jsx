import List from "../components/List";
import Main from "../components/Main";
import Upcoming from "../components/Upcoming";
import endpoints from "../components/Endpoints";
import Pricing from "../components/Pricing";
import Latest from "../components/Latest";
const Home = () => {
  return (
    <>
      <Main />
      <List
        rowID="1"
        Header="Popular Movies"
        apiURL={endpoints.popularRequest}
      />
      <Latest />
      <Upcoming />
      <Pricing />
    </>
  );
};

export default Home;
