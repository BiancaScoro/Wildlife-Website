import { ChosenPage } from "@/constant/types";
import HomePageImage from "@/assets/home-bg-img.jpg";
import { motion } from "framer-motion";
import Button from "@/constant/button";


type Props = {
  setChosenPage: (value: ChosenPage) => void;
};

const Home = ({ setChosenPage }: Props) => {
  return (
    <section id="home" className="py-10 lg:h-full lg:pb-0">
      <motion.div
        className="mx-auto w-full lg:h-full relative"
        onViewportEnter={() => setChosenPage(ChosenPage.Home)}
      >
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 lg:gap-y-9 
        z-10 text-white text-left">
          <motion.div
            className="mt-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="font-roboto text-5xl sm:text-3xl md:text-5xl lg:text-6xl">PROTECT OUR <br /> WILDLIFE</h1>
          </motion.div>
          <motion.div
            className="mt-4 lg:mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Button setChosenPage={setChosenPage}>Take Action</Button>
          </motion.div>
        </div>

        <div className="flex w-full h-full lg:z-10 lg:mt-0">
          <img alt="home-page-background" src={HomePageImage} className="w-full h-full object-cover lg:mt-0" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
