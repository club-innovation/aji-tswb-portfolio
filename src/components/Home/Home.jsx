import styles from './Home.module.css';

function Home() {
  return (
    <div id='home' className={styles.container}>
      <h2>Hello,</h2>
      <h1>I'm Yahya a <span className={styles.blue}>Software Engineer</span></h1>
      <p>I am a passionate software engineer with a lot of experience in front-end and back-end</p>
    </div>
  );
}

export default Home;