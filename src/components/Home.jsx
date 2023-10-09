// landing page -> unAuthorize
import Hero from "./landing page/components/hero section/Hero";
import "../assets/styles/home.css";
import Intro from "./landing page/components/system intro/Intro";
import PriorityTicketing from "./landing page/components/priority ticketing/PriorityTicketing";
import TicketManagment from "./landing page/components/ticket managment/TicketManagment";
import DiscoverAgents from "./landing page/components/discover agents/DiscoverAgents";
import Footer from "./landing page/components/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const {auth} = useContext(AuthContext)
  console.log(auth);
  return (
    
    <>
      <Hero />
      <Intro />
      <PriorityTicketing />
      <DiscoverAgents />
      <TicketManagment />
      <Footer />

    </>
  );
};

export default Home;
