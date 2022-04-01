import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Divider from "../components/common/Divider";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Section4 from "../components/Section4/Section4";
import Team from "../components/Team/Team";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/Footer/Footer";

function index2() {
  return (
    <>
      {/* Header */}
      <Header />
      <main>
        <Banner />
        <Divider transformed={true} />
        <Section2 />
        <Divider />
        <Section3 />
        <Divider />
        <Section4 />
        <Divider />
        <Team />
        <Divider />
        <NewsLetter />
        <Divider />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default index2;
