const About = ({image, about}) => {
  return ( 
    <aside>
      <img src={image} alt="blog logo" placeholder="https://via.placeholder.com/215" />
      <p>{about}</p>
    </aside>
   );
}
 
export default About;