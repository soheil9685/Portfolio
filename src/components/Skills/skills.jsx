import { motion } from "motion/react";

// Import logos
import html from "../../assets/Images/Html.png"
import css from "../../assets/Images/Css.png"
import js from "../../assets/Images/Js.png"
import react from "../../assets/Images/React.png"
import bootstrap from "../../assets/Images/Bootstrap.png"
import tailwind from "../../assets/Images/Tailwind.svg"
import nodejs from "../../assets/Images/Node.png"
import expressjs from "../../assets/Images/Express.png"
import mongodb from "../../assets/Images/MongoDB.png"
import git from "../../assets/Images/Git.png"
import github from "../../assets/Images/Github.png"
import docker from "../../assets/Images/Docker.png"
import Container from "../Common/Container/Container";

function Skills() {

    // Parent variants
    const parentVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    // Front-end Skills
    let frontend = [
        {
            index: 0,
            img: html,
            alt: "html",
            text: "Html"
        },
        {
            index: 1,
            img: css,
            alt: "css",
            text: "Css"
        },
        {
            index: 2,
            img: js,
            alt: "Js",
            text: "Java Script"
        },
        {
            index: 3,
            img: react,
            alt: "React",
            text: "React Js"
        },
        {
            index: 4,
            img: bootstrap,
            alt: "Bootstrap",
            text: "Bootstrap"
        },
        {
            index: 5,
            img: tailwind,
            alt: "Tailwind",
            text: "Tailwind"
        }
    ]

    // Back-end Skills
    let backend = [
        {
            index: 0,
            img: nodejs,
            alt: "NodeJs",
            text: "Node Js"
        },
        {
            index: 1,
            img: expressjs,
            alt: "ExpressJs",
            text: "Express Js"
        },
        {
            index: 2,
            img: mongodb,
            alt: "MongoDB",
            text: "Mongo DB"
        },
    ]

    // Tools
    let tools = [
        {
            index: 0,
            img: git,
            alt: "Git",
            text: "Git"
        },
        {
            index: 1,
            img: github,
            alt: "GitHub",
            text: "GitHub"
        },
        {
            index: 2,
            img: docker,
            alt: "Docker",
            text: "Docker"
        },
    ]

    // Expanding Skills
    let expandingSkills = [
        {
            index: 1,
            name: "Node.js",
            description: "Deeping my backend skills and building APIs.",
            progress: "80%"
        },
        {
            index: 2,
            name: "Express",
            description: "Building scalable backend applications.",
            progress: "70%"
        },
        {
            index: 3,
            name: "Docker",
            description: "Containerizing apps & improving deployment processes.",
            progress: "95%"
        },
        {
            index: 4,
            name: "Linux",
            description: "Learning command line & system management.",
            progress: "30%"
        },
        {
            index: 5,
            name: "Next Js",
            description: "Building Full-Stack Applications.",
            progress: "30%"
        }
    ]

    return (
        <section id="skills" className="bg-[#F7F8F6] dark:bg-[#111613] border-b border-[#E5E8E3] dark:border-[#273029]">
            <Container className="grid grid-cols-12 py-18 mx-auto w-full sm:w-135 md:w-180 lg:w-240 xl:w-285 2xl:w-330">
                <div className="col-span-12 xl:col-span-5">
                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h1 className="space-grotesk text-[#9FE870] text-xl">
                            SKILLS
                            <div className="w-10 border-2 border-[#9FE870]"></div>
                        </h1>
                        <p className="text-5xl mt-5 w-60 text-[#171B20] dark:text-[#F4F1E8] inter">Technologies I work with.</p>
                    </motion.div>
                    <div>
                        <h1 className="text-[#667085] dark:text-[#A7ADA5] mt-7 space-grotesk">FRONT-END</h1>
                        <motion.div className="flex flex-wrap gap-4" variants={parentVariant} initial="hidden" whileInView="visible">
                            {frontend.map((item) => (
                                <motion.div key={item.index} className=" bg-[#F7F8F6] dark:bg-[#0B0D0C] w-27 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35" variants={childVariants}>
                                    <img src={item.img} alt={item.alt} className="w-15" />
                                    <h1 className="text-[#667085] dark:text-[#A7ADA5] inter">{item.text}</h1>
                                </motion.div>
                            ))}
                        </motion.div>

                        <h1 className="text-[#667085] dark:text-[#A7ADA5] mt-7 space-grotesk">BACK-END</h1>
                        <motion.div className="flex flex-wrap gap-4" variants={parentVariant} initial="hidden" whileInView="visible">
                            {backend.map((item) => (
                                <motion.div key={item.index} className=" bg-[#F7F8F6] dark:bg-[#0B0D0C] w-27 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35" variants={childVariants}>
                                    <img src={item.img} alt={item.alt} className="w-15" />
                                    <h1 className="text-[#667085] dark:text-[#A7ADA5] inter">{item.text}</h1>
                                </motion.div>
                            ))}
                        </motion.div>

                        <h1 className="text-[#667085] dark:text-[#A7ADA5] mt-7 space-grotesk">TOOLS</h1>
                        <motion.div className="flex flex-wrap gap-4" variants={parentVariant} initial="hidden" whileInView="visible">
                            {tools.map((item) => (
                                <motion.div key={item.index} className=" bg-[#F7F8F6] dark:bg-[#0B0D0C] w-27 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35" variants={childVariants}>
                                    <img src={item.img} alt={item.alt} className="w-15" />
                                    <h1 className="text-[#667085] dark:text-[#A7ADA5] inter">{item.text}</h1>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className="divider divider-horizontal rounded-2xl divider-success overflow-hidden"></div>
                <div className="col-span-12 xl:col-span-6 mt-15 xl:mt-0">
                    <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                        <h1 className="space-grotesk text-[#9FE870] text-xl">
                            CURRENTLY LEARNING
                            <div className="w-10 border-2 border-[#9FE870]"></div>
                        </h1>
                        <p className="text-3xl mt-5 w-60 text-[#171B20] dark:text-[#F4F1E8] inter">Expanding my knowledge.</p>
                    </motion.div>
                    {/* Expanding skills section */}
                    <motion.div variants={parentVariant} initial="hidden" whileInView="visible">
                        {expandingSkills.map((skill) => (
                            <motion.div key={skill.index} className="mt-10" variants={childVariants}>
                                <div className="grid grid-cols-12 items-center">
                                    <h1 className="col-span-2 sm:col-span-1 flex items-center justify-center text-2xl inter w-10 h-10 border border-[#9FE870] rounded-[50%] text-center text-[#9FE870] mr-3">{skill.index}</h1>
                                    <h1 className=" col-span-3 sm:col-span-2 text-[#171B20] dark:text-[#F4F1E8] inter text-2xl">{skill.name}</h1>
                                    <p className="col-span-7 sm:col-span-5 inter w-50 text-sm text-[#667085] dark:text-[#A7ADA5]">{skill.description}</p>
                                    <div className="col-span-5 sm:hidden"></div>
                                    <div className="col-span-5 sm:col-span-3 mr-3 bg-[#667085] dark:bg-[#273029] rounded-2xl">
                                        <motion.div className="bg-[#9FE870] border-2 border-[#9FE870] rounded-2xl" initial={{width: 0}} whileInView={{width: `${skill.progress}`}} transition={{duration: 0.5 , delay: 0.7 , ease: "easeInOut"}}></motion.div>
                                    </div>
                                    <p className="col-span-2 sm:col-span-1 inter text-sm text-[#9FE870]">{skill.progress}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default Skills;