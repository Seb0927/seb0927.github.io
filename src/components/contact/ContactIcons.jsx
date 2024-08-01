import Linkedin from '../../assets/vectors/linkedin.svg?react';
import Github from '../../assets/vectors/github.svg?react';

function ContactIcons() {
  return (
    <>
      <a href="https://www.linkedin.com/in/sebastianidroboavirama/">
        <Linkedin className="h-16 w-16 fill-green-dark" />
      </a>
      <a href="https://github.com/Seb0927/">
        <Github className="h-16 w-16 fill-green-dark" />
      </a>  
    </>
  )
}

export default ContactIcons