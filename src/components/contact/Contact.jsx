import { useEffect } from "react";
import { motion } from "framer-motion";
import Form from "./Form.jsx";
import ContactIcons from "./ContactIcons.jsx";
import { useWindowDimensions } from '../../hooks'

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
    <div className="md:overflow-y-auto md:absolute md:top-0 md:bottom-0 md:content-start">
      <div className="md:h-full">
        <h1 className="mb-8 col-span-2 text-5xl font-semibold text-center md:py-8">More about me?</h1>
        <div className="md:flex md:flex-row md:gap-12 lg:gap-24">
          <section className="flex-1">
            <p className="mb-4 text-lg">You can find more about me on the following sites! I will be happy to connect with you</p>
            <div className="flex gap-6 mb-6 justify-center md:justify-start">
              <ContactIcons />
            </div>
          </section>
          {isSmallScreen ? <hr className="bg-green-dark h-1 mb-6" /> : null}
          <section className="flex-1">
            <p className="text-lg mb-4">Or feel free to reach out me. No compromise:</p>
            <Form />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact