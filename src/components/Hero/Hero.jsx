import heroDarkImg from "../../assets/Images/hero dark.png"
import heroImg from "../../assets/Images/hero.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "motion/react";

function Hero({ darkMode }) {

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
        <section id="hero" className="pt-15 border-b-2 border-[#E5E8E3] dark:border-[#273029] bg-[#F7F8F6] dark:bg-[#0B0D0C]">
            <div className="mx-auto w-full sm:w-135 md:w-180 lg:w-240 xl:w-285 2xl:w-330 grid grid-cols-12">
                <div className="col-span-12 mt-12 text-center mb-10 lg:col-span-6 lg:text-start">
                    <h5 className="text-[#667085] dark:text-[#9FE870] inter text-2xl my-2">HI, I'M</h5>
                    <h1 className="space-grotesk text-7xl my-2 text-[#171B20] dark:text-[#F4F1E8]">Mohammad Soheil.</h1>
                    <p className="text-[#667085] dark:text-[#9FE870] inter text-3xl my-3">
                        <Typewriter words={["Full Stack Developer"]} cursor={true} />
                    </p>
                    <p className="lg:w-86 my-6 text-md text-justify text-[#171B20] dark:text-[#F4F1E8] inter">
                        <Typewriter typeSpeed={20} words={["I build modern, interactive and user-focused web experiences with clean code and great performance."]} cursor={true} />
                    </p>
                    <div className="mt-15">
                        <button className="inter cursor-pointer hover:shadow-[0_0_7px] hover:shadow-[#9FE870] mr-4 py-2 px-5 bg-[#9FE870] rounded-lg text-[#0B0D0C] transition-all duration-300">
                            <a href="#projects">View my works</a>
                        </button>
                        <button className="inter cursor-pointer text-[#171B20] hover:text-[#F7F8F6] dark:text-[#F4F1E8] py-2 px-5 border-[1.5px] border-[#9FE870] rounded-lg hover:bg-[#9FE870] dark:hover:text-[#0B0D0C] transition-all duration-300 hover:shadow-[0_0_5px] hover:shadow-[#9FE870]">
                            <a href="#footer">Contact me</a>
                        </button>
                    </div>
                    <motion.div className="mt-6" variants={parentVariant} initial="hidden" animate="visible">
                        <motion.a href="https://github.com/soheil9685" variants={childVariants}>
                            <GitHubIcon fontSize="large" className="text-[#667085] dark:text-[#F4F1E8] mr-4 cursor-pointer" />
                        </motion.a>
                        <motion.a href="www.linkedin.com/in/mohammad-soheil-hosseini-6a3957333" variants={childVariants}>
                            <LinkedInIcon fontSize="large" className="text-[#667085] dark:text-[#F4F1E8] mr-4 cursor-pointer" />
                        </motion.a>
                        <motion.a href="https://t.me/canopus_msh" variants={childVariants}>
                            <TelegramIcon fontSize="large" className="text-[#667085] dark:text-[#F4F1E8] mr-4 cursor-pointer" />
                        </motion.a>
                        <motion.a href="https://www.instagram.com/_soheil9685_/" variants={childVariants}>
                            <InstagramIcon fontSize="large" className="text-[#667085] dark:text-[#F4F1E8] cursor-pointer" />
                        </motion.a>
                    </motion.div>
                </div>
                <div className="col-span-12 flex justify-center lg:col-span-6">
                    {
                        darkMode ? (
                            <motion.img className="w-100 text-left" src={heroDarkImg} alt="HeroImg"
                                initial={{
                                    x: 100,
                                    opacity: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            />
                        ) : (
                            <motion.img className="w-100 text-left" src={heroImg} alt="HeroImg" />
                        )
                    }

                </div>
                <div className="col-span-12 text-center mb-5">
                    <ArrowBackIosIcon fontSize="large" className="text-[#171B20] dark:text-[#F4F1E8] rotate-270" />
                </div>
            </div>
        </section>
    )
}

export default Hero