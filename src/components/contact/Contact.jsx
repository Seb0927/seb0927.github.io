import { useEffect } from "react";
import { motion } from "framer-motion";
import { useWindowDimensions } from '../../hooks'
import Linkedin from '../../assets/vectors/linkedin.svg?react';
import Github from '../../assets/vectors/github.svg?react';

function Contact({ hasRendered, setHasRendered, sectionIndex }) {

  useEffect(() => {
    const updatedRenderedState = [...hasRendered]
    updatedRenderedState[sectionIndex] = true
    setHasRendered(updatedRenderedState)
  }, [])

  // Amount of sections to render
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 768;

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
    <div className="md:h-5/6">
      <h1 className="mb-8 col-span-2 text-5xl font-semibold text-center md:py-8">More about me?</h1>
      <div className="md:flex md:flex-row md:gap-12 lg:gap-24">
        <section className="flex-1">
          <p className="mb-4 text-lg">You can find more about me on the following sites! I will be happy to connect with you</p>
          <div className="flex gap-6 mb-6 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/sebastianidroboavirama/">
              <Linkedin className="h-16 w-16 fill-green-dark" />
            </a>
            <a href="https://github.com/Seb0927/">
              <Github className="h-16 w-16 fill-green-dark" />
            </a>
          </div>
        </section>
        {isSmallScreen ? <hr className="bg-green-dark h-1 mb-6" />: null}
        <section className="flex-1">
          <p className="text-lg mb-4">Or feel free to reach out me. No compromise:</p>
          <form className="w-full">
            <div className="flex flex-wrap lg:-mx-3 mb-6">
              <div className="w-full lg:w-1/4 lg:px-3 lg:mb-0">
                <label className="block text-sm italic mb-1" for="name">
                  Name:
                </label>
                <input class="appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-3 focus:outline-none focus:bg-[#AFEDC2]" id="name" type="text" />
              </div>
              <div class="w-full lg:w-3/4 lg:px-3 lg:mb-3">
                <label class="block text-sm italic mb-1" for="email">
                  Email:
                </label>
                <input class="appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-3 focus:outline-none focus:bg-[#AFEDC2]" id="email" type="text" />
              </div>
              <div class="w-full lg:px-3">
                <label class="block text-sm italic mb-1" for="message">
                  Message:
                </label>
                <textarea class="h-36 min-h-12 max-h-56 appearance-none block w-full bg-[#9ED5AD] text-black rounded py-3 px-4 mb-6 focus:outline-none focus:bg-[#AFEDC2]" id="message" type="text" />
              </div>
              <div className="w-full flex justify-center mx-3">
                <button onClick={() => alert("Message sent!")} type="button"
                className="appearance-none block bg-[#9ED5AD] text-black font-bold rounded-full py-2 px-12  hover:bg-[#AFEDC2]"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Contact