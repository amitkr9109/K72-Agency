import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import Footer from "../components/projects/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const allImages = [
    {
      image1:
        "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
      image2:
        "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
      image2:
        "https://images.unsplash.com/photo-1613575569208-b769cfe6f67a?q=80&w=1170&auto=format&fit=crop",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
      image2:
        "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860",
      image2:
        "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f",
      image2:
        "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd",
      image2:
        "https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124",
      image2:
        "https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757",
    },
    {
      image1:
        "https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000",
      image2:
        "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".images-div").forEach((section) => {
      gsap.fromTo(
        section,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <main className="main">
      <div className="heading-div pt-[40vh] font-[font2] p-5">
        <h2 className="uppercase text-[6vw]">projects</h2>
      </div>
      <div className="all-images-div min-h-screen">
        {allImages.map((elem, idx) => (
          <div key={idx} className="images-div lg:w-full lg:h-[600px] lg:flex lg:gap-4 lg:mb-4 lg:p-5">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
};

export default Projects;
