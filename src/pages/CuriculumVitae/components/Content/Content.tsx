import ExperienceList from "./components/ExperienceList/ExperienceList";
import SkillsList from "./components/SkillsList";
import FormationList from "./components/FormationList/FormationList";
import Footer from "./components/Footer/Footer";
import { useSearchParams } from "react-router-dom";

const Content = () => {
  const [searchParams] = useSearchParams();
  const selectedSkill = searchParams.get("selectedSkill");

  return (
    <div className="content">
      <ExperienceList isSideMenuShown={!!selectedSkill} />
      <SkillsList />

      <FormationList isSideMenuShown={!!selectedSkill} />

      <Footer />
    </div>
  );
};

export default Content;
