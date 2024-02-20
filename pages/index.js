import AboutUs from "@/src/components/AboutUs";
import Contact from "@/src/components/Contact";
import HomeBanner from "@/src/components/HomeBanner";
import Services from "@/src/components/Services";
import { AlexioContext } from "@/src/Context";
import Header from "@/src/Header";
import Nav from "@/src/Nav";
import { Fragment, useContext, useEffect } from "react";

import ImageView from "@/src/components/popup/ImageView";
import VideoPopup from "@/src/components/popup/VideoPopup";
import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("js");
    document.querySelector("body").classList.add("dark-body");
  }, []);

  const { toggle } = useContext(AlexioContext);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Nav />
      <div className={`pages-stack ${toggle ? "pages-stack--open" : ""}`}>
        <HomeBanner />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Header />
    </Fragment>
  );
};
export default Index;
