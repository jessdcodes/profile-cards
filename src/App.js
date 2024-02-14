import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="Self-portrait" />;
}

function Intro() {
  return (
    <div>
      <h1>Jessica Dionisio</h1>
      <p>
        Frontend engineer at Accenture. Passionate about her fruit yogurt and
        supporting music personalities and going to concerts - making it her
        personality.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="HTML+CSS" color="lightskyblue" />
      <Skill skillName="JavaScript" color="bisque" />
      <Skill skillName="React JS" color="mediumpurple" />
      <Skill skillName="TypeScript" color="moccasin" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skillName}
    </div>
  );
}

export default App;
