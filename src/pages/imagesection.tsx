import react from 'react';
//@ts-ignore
import about from '../img/about.webp';

function ImageSection() {
 return(
  <div className="ImageSection">
   <div className="Img">
    <img src={about} alt=""/>
   </div>
   <div className="about-info">
    <h4>I am<span>Lorem Ipsum</span></h4>
    <p>
     lorem Ipsum is a Lorem Ipsum that lives in the world. Lorem Ipsum
    </p>
    <div className="about-details">
     <div className="name-details">
      <p>Nome Completo</p>
      <p>: Daniel Augusto J. Filho</p>
     </div>
     <div className="name-details">
      <p>Idade</p>
      <p>: 19</p>
     </div>
     <div className="name-details">
      <p>Nacionalidade</p>
      <p>: Brasileiro</p>
     </div>
     <div className="name-details">
      <p>Linguagens</p>
      <p>: Portugues, Ingles, Espanhol</p>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ImageSection;