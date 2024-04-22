import CardComponent from "./components/CardComponent";
import HeroSection from "./components/HeroSection";
import NavbarComponent from "./components/NavbarComponent";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <Container className="px-lg-5">
        <div className="row gx-lg-5">
          <CardComponent
            icon={<FontAwesomeIcon icon={faFolder} />}
            title={"Fresh new layout"}
            content={
              "With Bootstrap 5, we've created a fresh new layout for this template!"
            }
          />
          <CardComponent
            icon={<FontAwesomeIcon icon={faCloudArrowDown} />}
            title={"Free to download"}
            content={
              "As always, Start Bootstrap has a powerful collectin of free templates."
            }
          />
          <CardComponent
            icon={<FontAwesomeIcon icon={faAddressCard} />}
            title={"Jumbotron hero header"}
            content={
              "The heroic part of this template is the jumbotron hero header!"
            }
          />
          <CardComponent
            icon={<FontAwesomeIcon icon={faBootstrap} />}
            title={"Feature boxes"}
            content={
              "We've created some custom feature boxes using Bootstrap icons!"
            }
          />
          <CardComponent
            icon={<FontAwesomeIcon icon={faCode} />}
            title={"Simple clean code"}
            content={
              "We keep our dependencies up to date and squash bugs as they come!"
            }
          />
          <CardComponent
            icon={<FontAwesomeIcon icon={faCircleCheck} />}
            title={"A name you trust"}
            content={
              "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
            }
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
