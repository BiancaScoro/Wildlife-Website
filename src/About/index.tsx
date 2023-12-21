import { ChosenPage} from "@/constant/types";
import { motion } from "framer-motion";
import image1 from "@/assets/freshwater.jpg";
import image2 from "@/assets/pineforest.jpg";
import image3 from "@/assets/elephant.jpg";


type Props = {
  setChosenPage: (value: ChosenPage) => void;
}

const About = ({ setChosenPage }: Props) => {
  return (
    <section id="about">
      <motion.div
        onViewportEnter={() => setChosenPage(ChosenPage.About)}
      >
        {/* HEADER */}
          <motion.div
            className="lg:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
          <div className="lg:w-full lg:mt-10 sm:mt-0 text-center bg-light-gray font-mallanna">
            <h1 className="py-4 sm:text-2xl lg:text-3xl">Our Vision</h1>
            <p className="py-6 sm:text-3xl lg:text-4xl">
            To see wildlife free from threat <br/> and ecosystems restored.
            </p>
          </div>
          <h2 className="text-left font-mallanna my-10 ml-10 text-3xl">Our Work</h2>
          </motion.div>
          <motion.div
            className="lg:w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
          <div className="flex space-x-4 mx-12">
            <div style={{ width: '500px', height: '250px' }}>
            <img src={image1} alt="freshwater" className="w-full h-full object-cover" />
            <p className="lg:text-lg sm:text-sm font-mallanna text-center">Protecting Freshwater Places and Species</p>
            </div>
            <div style={{ width: '500px', height: '250px' }}>
            <img src={image2} alt="pinetrees" className="w-full h-full object-cover" />
            <p className="lg:text-lg sm:text-sm font-mallanna text-center">Conserving Forests</p>
            </div>
            <div style={{ width: '500px', height: '250px' }}>
            <img src={image3} alt="elephant" className="w-full h-full object-cover" />
            <p className="lg:text-lg sm:text-sm font-mallanna text-center">Preserving Wildlife</p>
            </div>
          </div>
        </motion.div>
        </motion.div>
    </section>
  )
}

export default About