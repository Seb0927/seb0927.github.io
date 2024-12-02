import { useEffect } from "react";
import Project from "./Project.jsx";
import questAIImage from '../../assets/images/questai.jpg';
import storeImage from '../../assets/images/store.jpg';
import portfolioImage from '../../assets/images/portfolio.jpg';
import wipImage from '../../assets/images/wip.png';

function Projects({ hasRendered, setHasRendered, sectionIndex }) {

  useEffect(() => {
    const updatedRenderedState = [...hasRendered];
    updatedRenderedState[sectionIndex] = true;
    setHasRendered(updatedRenderedState);
  }, [])

  // Framer variables
  let renderVariants = null;
  if (!hasRendered[sectionIndex]) {
    renderVariants = {
      hiddenUp: { y: 10, opacity: 0 },
      visible: (i) => {
        const delay = 0 + i * 0.20;
        return {
          y: 0,
          opacity: 1,
          transition: {
            delay: delay,
          }
        }
      },
    }
    
  } else {
    renderVariants = {
      hiddenUp: { opacity: 0 },
      visible: {
        opacity: 1
      }
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:pt-6 lg:gap-8 md:auto-rows-fr md:grid-cols-2 md:gap-4 md:h-full md:w-full md:px-16 md:pb-16 md:items-center">
        <Project 
        title={"QuestAI"} 
        description={"Website where you can record your interviews, save them to text and have assistance with the help of AI"} 
        img={questAIImage}
        link={"https://github.com/Seb0927/QuestAI"} />
        <Project 
        title={"3DStore"}
        description={"Website store for 3D Items, with 3D animation on items and CRUD for items and orders"}
        img={storeImage}
        link={"https://github.com/Seb0927/3DStore"}/>
        <Project title={"My Portfolio"}
        description={"Web portfolio for showing myself and with animation, using Motion library!"}
        img={portfolioImage}
        link={"https://github.com/Seb0927/seb0927.github.io"}/>
        <Project title={"WIP"}
        description={"I hope to have more projects to display here!"}
        img={wipImage}
        link={"https://seb0927.github.io/"}/>
    </div>
  )
}

export default Projects