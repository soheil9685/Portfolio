import Sign from "../../assets/Images/Green Sign.png"
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "motion/react";

// Icons
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import LayersIcon from '@mui/icons-material/Layers';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

function About() {

    // Parent variants
    const parentVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    // Child variants
    const childVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    return (
        <section id="about" className="bg-[#FCFCFB] dark:bg-[#111613] border-b border-[#E5E8E3] dark:border-[#273029]">
            <div className="grid grid-cols-12 py-18 mx-auto w-full sm:w-135 md:w-180 lg:w-240 xl:w-285 2xl:w-330">
                <motion.div className="col-span-12 md:col-sapn-6 xl:col-span-3" initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <h1 className="space-grotesk text-[#9FE870] text-xl">
                        ABOUT ME
                        <div className="w-10 border-2 border-[#9FE870]"></div>
                    </h1>
                    <p className="text-5xl mt-5 w-80 text-[#171B20] dark:text-[#F4F1E8] inter">A little bit about me.</p>
                </motion.div>
                <div className="col-span-12 xl:col-span-3 md:col-sapn-6">
                    <p className="text-[#667085] dark:text-[#F4F1E8] text-justify mt-8 inter">
                        <Typewriter words={[`I'm a 3rd-year Computer Engineering student at Shahed University. I'm a Full-Stack Developer who enjoys turning ideas into real-world projects. I'm constantly expanding my knowledge and exploring new technologies to improve my skills. If you'd like to work together, feel free to get in touch`]} typeSpeed={30} cursor={true} />

                    </p>
                    <div>
                        <img className="w-30 mt-7" src={Sign} alt="Sign" />
                    </div>
                </div>
                <motion.div className="col-span-12 xl:col-span-6 xl:mt-0 mt-10 flex flex-wrap justify-center gap-3" variants={parentVariant} initial="hidden" whileInView="visible">
                    <motion.div className="h-50 w-37 text-center bg-[#F7F8F6] dark:bg-[#0B0D0C] py-5 px-7 rounded-xl border border-[#273029] flex flex-col items-center justify-center" variants={childVariants}>
                        <PersonIcon className="text-[#9FE870]" sx={{ fontSize: "50px" }} />
                        <h1 className="text-[#171B20] dark:text-[#F4F1E8] text-6xl mt-3 mb-3">19</h1>
                        <p className="text-[#667085] dark:text-[#A7ADA5] text-xs">YEARS OLD</p>
                    </motion.div>
                    <motion.div className="h-50 w-37 text-center bg-[#F7F8F6] dark:bg-[#0B0D0C] py-5 px-7 rounded-xl border border-[#273029] flex flex-col items-center justify-center" variants={childVariants}>
                        <CodeIcon className="text-[#9FE870]" sx={{ fontSize: "50px" }} />
                        <h1 className="text-[#171B20] dark:text-[#F4F1E8] text-6xl mt-3 mb-3">+3</h1>
                        <p className="text-[#667085] dark:text-[#A7ADA5] text-xs">YEARS LEARNING</p>
                    </motion.div>
                    <motion.div className="h-50 w-37 text-center bg-[#F7F8F6] dark:bg-[#0B0D0C] py-5 px-7 rounded-xl border border-[#273029] flex flex-col items-center justify-center" variants={childVariants}>
                        <LayersIcon className="text-[#9FE870]" sx={{ fontSize: "50px" }} />
                        <h1 className="text-[#171B20] dark:text-[#F4F1E8] text-6xl mt-3 mb-3">+10</h1>
                        <p className="text-[#667085] dark:text-[#A7ADA5] text-xs">TECHNOLOGIES</p>
                    </motion.div>
                    <motion.div className="h-50 w-37 text-center bg-[#F7F8F6] dark:bg-[#0B0D0C] py-5 px-7 rounded-xl border border-[#273029] flex flex-col items-center justify-center" variants={childVariants}>
                        <AllInclusiveIcon className="text-[#9FE870]" sx={{ fontSize: "50px" }} />
                        <h1 className="text-[#171B20] dark:text-[#F4F1E8] text-6xl mt-3 mb-3">
                            <AllInclusiveIcon sx={{ fontSize: "40px" }} />
                        </h1>
                        <p className="text-[#667085] dark:text-[#A7ADA5] text-xs">THINGS TO BUILD</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About