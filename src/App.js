import "./App.css";

const skillList = [
  {
    skillName: "HTML+CSS",
    color: "lightskyblue",
    level: "advanced",
  },
  {
    skillName: "JavaScript",
    color: "bisque",
    level: "intermediate",
  },
  {
    skillName: "React JS",
    color: "mediumpurple",
    level: "intermediate",
  },
  {
    skillName: "TypeScript",
    color: "moccasin",
    level: "beginner",
  },
];

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
  return <img className="avatar" src="avatar.png" alt="Jessica Dionisio" />;
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
      {skillList.map((skill) => (
        <Skill
          key={skill.skillName}
          skillName={skill.skillName}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skillName, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>
        {level === "beginner" && "🍊"}
        {level === "intermediate" && "🥑"}
        {level === "advanced" && "🍑"}
      </span>
    </div>
  );
}

export default App;
