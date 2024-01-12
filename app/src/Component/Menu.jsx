import YImage from '../Images/YO.jpg';
import "./Menu&RightSide.css";

function Menu() {
  return (
    <div className='Menu'>
     <img src={YImage} alt="YImage" class="my-pic"/>
     <p class="myName">YESNA OMAR</p> <br />
     <a href="https://www.linkedin.com/in/yesna-omar-91b065247/">
      <i class="fa-brands fa-linkedin-in fa-lg myIcon" style={{color: "#F2E9E4"}}></i>
     </a>
     <a href="mailto:yesnakadr@gmail.com">
      <i class="fa-solid fa-envelope fa-lg myIcon" style={{color: "#F2E9E4"}}></i>
     </a>
     <a href="https://github.com/Yesna-Omar">
      <i class="fa-brands fa-github fa-lg myIcon" style={{color: "#F2E9E4"}}></i>
     </a>
    </div>
  );
}

export default Menu;