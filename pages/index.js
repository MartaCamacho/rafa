import Welcome from "../components/Welcome";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function IndexPage() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Body />
      <Footer />
    </div>
  );
}
