const About = ({ logo, description }) => {
  return (
    <aside>
      <img src={logo} alt="website logo" width={150} />
      <p>{description}</p>
    </aside>
  );
};

export default About;
