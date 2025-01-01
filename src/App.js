import React, { useState } from 'react';
import './App.css'; // Include your styles here

function App() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");

  const openLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="content" style={{ maxWidth: '1500px' }}>
      <Header />
      <Gallery openLightbox={openLightbox} />
      <About />
      {isLightboxOpen && <Lightbox imgSrc={lightboxImg} closeLightbox={closeLightbox} />}
    </div>
  );
}

function Header() {
  return (
    <header className="container xlarge padding-24">
      <a href="#" className="left button white">MY ART</a>
      <a href="#about" className="right button white">About</a>
    </header>
  );
}

function Gallery({ openLightbox }) {
  return (
    <div className="row">
      <div className="half">
        <img src="krishnaji.jpeg" style={{ width: '100%' }} className="gallery-img" onClick={() => openLightbox('krishnaji.jpeg')} />
        <img src="ganeshji.jpeg" style={{ width: '100%' }} className="gallery-img" onClick={() => openLightbox('ganeshji.jpeg')} />
        <img src="shivparvatiji.jpeg" style={{ width: '100%' }} className="gallery-img" onClick={() => openLightbox('shivparvatiji.jpeg')} />
      </div>
      <div className="half">
        <img src="Princess.jpeg" style={{ width: '100%' }} className="gallery-img" onClick={() => openLightbox('Princess.jpeg')} />
        <img src="mermaid.jpeg" style={{ width: '100%' }} className="gallery-img" onClick={() => openLightbox('mermaid.jpeg')} />
      </div>
    </div>
  );
}

function About() {
  return (
    <footer className="light-grey padding-64 center" id="about">
      <h2>About</h2>
      <img src="me.jpeg" className="image padding-32" width="300" height="300" alt="me" />
      <form style={{ margin: 'auto', width: '60%' }} action="/action_page.php" target="_blank">
        <p>Welcome to my creative world! I'm an artist passionate about drawing, sketching, and painting. My art explores themes like nature, emotion, culture, aiming to inspire, provoke thought, and connect people through visual storytelling. Each piece I create reflects a journey whether it's through bold colors, intricate details, or minimalist elegance. I draw inspiration from nature, urban life, personal experiences, blending them into unique expressions that speak to the heart. Thank you for visiting my gallery. Whether you're here to explore, connect, or find that perfect piece for your collection, I'm thrilled to share my work with you.</p>
        <div className="section">
          <label><b>Name</b></label>
          <input className="input border" type="text" required name="Name" />
        </div>
        <div className="section">
          <label><b>Email</b></label>
          <input className="input border" type="text" required name="Email" />
        </div>
        <div className="section">
          <label><b>Message</b></label>
          <input className="input border" required name="Message" />
        </div>
        <button type="submit" className="button block dark-grey">Send</button>
      </form>
    </footer>
  );
}

function Lightbox({ imgSrc, closeLightbox }) {
  return (
    <div id="lightbox" className="lightbox" style={{ display: 'block' }}>
      <span className="close" onClick={closeLightbox}>&times;</span>
      <img id="lightbox-img" className="lightbox-content" src={imgSrc} alt="lightbox" />
    </div>
  );
}

export default App;
