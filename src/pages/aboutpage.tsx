import React from "react";
import Tittle from "../components/tittle";
import ImageSection from "./imagesection";

function AboutPage() {
 return(
  <div className="AboutPage">
    <Tittle title={'about Me'} span={'about Me'} />
    <ImageSection />
  </div>
 )
}

export default AboutPage;