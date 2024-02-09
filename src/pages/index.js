import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import * as Styles from "../components/styles";
import Projects from "../components/projects";

//Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/effect-cards";

let SwiperContent = Projects.map((project) => {
  return <SwiperSlide>{project.projectName}</SwiperSlide>;
});


const IndexPage = () => {
  return (
    <Layout pageTitle="Projects">
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SwiperContent}
      </Swiper>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
