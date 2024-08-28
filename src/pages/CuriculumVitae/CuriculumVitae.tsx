import Content from "./components/Content";
import SideMenu from "./components/SideMenu";
import "./CuriculumVitae.css";

const CuriculumVitae = () => (
  <div className="CuriculumVitae" style={{ overflow: "hidden" }}>
    <SideMenu />
    <div
      className="CuriculumVitae-maincontent"
      style={{ overflow: "auto", position: "relative" }}
    >
      <Content />
    </div>
  </div>
);

export default CuriculumVitae;
