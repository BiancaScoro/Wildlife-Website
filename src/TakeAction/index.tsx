import { ChosenPage } from "@/constant/types";
import { motion } from "framer-motion";
import Donation from "@/TakeAction/listbox";
import Jaguar from "@/assets/jaguar.jpg";

type Props = {
  setChosenPage: (value: ChosenPage) => void;
};

const TakeAction = ({ setChosenPage }: Props) => {
  return (
    <section id="takeaction">
      <motion.div onViewportEnter={() => setChosenPage(ChosenPage.About)}>
        <motion.div
          className="lg:w-full relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-3xl font-mallanna absolute lg:top-0 lg:pt-0 lg:mr-40 lg:right-60 sm:top-80 sm:pt-20 sm:mt-5 sm:right-60 sm:pr-10">Donate</h1>
          <div className="absolute lg:right-80 lg:mr-0 lg:top-0 lg:pt-20 sm:top-80 sm:pt-40 sm:right-40 flex gap-9">
            <button className="rounded-md bg-green-brown hover:bg-golden px-10 py-3 font-mulish text-white">One Time</button>
            <button className="rounded-md bg-white border-2 border-green-brown hover:bg-light-gray px-10 py-3 font-mulish text-black">Monthly</button>
          </div>
          <div className="relative mt-20 lg:ml-20 sm:ml-2 md:ml-32" style={{ width: "600px", height: "400px" }}>
            <img className="w-full h-full object-cover z-5" src={Jaguar} alt="big kitty" />
          </div>
          <h1 className="text-2xl font-mallanna absolute lg:top-40 lg:pt-0 lg:mr-60 lg:right-60 lg:pr-10 sm:top-80 sm:pt-60 sm:right-60">Select Amount</h1>
          <div className="absolute lg:right-80 lg:mr-2 lg:top-40 lg:pt-0 lg:mt-10 sm:top-80 sm:pt-60 sm:mt-10 sm:right-40 z-10">
            <Donation />
          </div>
          <div className="absolute lg:right-60 lg:mr-32 lg:top-40 lg:pt-16 sm:top-80 sm:pt-80 sm:mt-20 sm:right-40 sm:pr-5 sm:mr-10">
          <button className="rounded-md bg-green-brown hover:bg-golden px-16 py-4 font-mulish text-white">Pay Now</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TakeAction;
