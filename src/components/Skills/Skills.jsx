import styles from './Skills.module.css';

//Components
import SkillCard from '../SkillCard/SkillCard';

//Images
import github from "../../images/github.png";
import app from "../../images/app.png";
import database from "../../images/database.png";
import web from "../../images/web.png";
import camera from "../../images/camera.png";
import freelancing from "../../images/freelancing.png";

function Skills() 
{
  const skills = [
    {img: github, title: "Github Version Control", description: "Proficient in using Git and GitHub for version control."},
    {img: app, title: "App Design", description: "A creative eye for crafting user-centric and visually appealing app designs."},
    {img: database, title: "Back-end Development", description: "Expertise in back-end development, architecting robust server-side applications."},
    {img: web, title: "Web Development", description: "Full-stack web development skills encompassing both front-end and back-end technologies. "},
    {img: camera, title: "Photography", description: "A passion for capturing moments through the lens, with a keen understanding of composition, lighting, and storytelling."},
    {img: freelancing, title: "Freelancing", description: "Experienced in freelancing as a versatile professional, offering services in software development, design, and photography."},
  ]
  
  return (
    <div id='skills' className={styles.container}>
      <h1 className={styles.title}><span className={styles.underline}>Skill</span>-Set</h1>
      <div className={styles.skillsContainer}>
        {
          skills.map((skill, index)=>(
            <SkillCard key={index} img={skill.img} title={skill.title} description={skill.description} />
          ))
        }
      </div>
    </div>
  );
}

export default Skills;