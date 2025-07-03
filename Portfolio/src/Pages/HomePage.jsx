import AboutMe from "../Components/HomeComponents/AboutMe/AboutMe";
import HomeHead from "../Components/HomeComponents/HomeHead/HomeHead";
import ImageSection from "../Components/HomeComponents/ImageSection/ImageSection";
import LittleProject from "../Components/HomeComponents/LittleProject/LittleProject";
import ProjectsSection from "../Components/HomeComponents/ProjectsSection/ProjectsSection";

function HomePage() {
  return (
    <>
      <HomeHead />
      <ImageSection/>
      <ProjectsSection/>
      <AboutMe/>
      <LittleProject/>
    </>
  );
}

export default HomePage;
