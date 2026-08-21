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

function Skills() {

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
        <section className="bg-[#111613] border-b border-[#273029]">
            <div className="grid grid-cols-12 py-18 px-5 md:px-10 lg:px-15 2xl:px-20">
                <div className="col-span-12 xl:col-span-6">
                    <h1 className="space-grotesk text-[#9FE870] text-xl">
                        SKILLS
                        <div className="w-10 border-2 border-[#9FE870]"></div>
                    </h1>
                    <p className="text-5xl mt-5 w-60 text-[#F4F1E8] inter">Technologies I work with.</p>
                    <div className="">
                        <h1 className="text-[#A7ADA5] mt-7 space-grotesk">FRONT-END</h1>
                        <div className="grid grid-cols-12">
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 2xl:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={html} alt="Html" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Html</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 2xl:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={css} alt="Css" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Css</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={js} alt="Js" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Java Script</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={react} alt="React" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">React Js</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={bootstrap} alt="Bootstrap" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Bootstrap</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={tailwind} alt="Tailwind" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Tailwind</h1>
                            </div>
                        </div>

                        <h1 className="text-[#A7ADA5] mt-7 space-grotesk">BACK-END</h1>
                        <div className="grid grid-cols-12">
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={nodejs} alt="NodeJs" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Node Js</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={expressjs} alt="ExpressJs" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Express Js</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={mongodb} alt="MongoDB" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Mongo DB</h1>
                            </div>
                        </div>

                        <h1 className="text-[#A7ADA5] mt-7 space-grotesk">TOOLS</h1>
                        <div className="grid grid-cols-12">
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={git} alt="Git" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Git</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={github} alt="GitHub" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">GitHub</h1>
                            </div>
                            <div className="bg-[#0B0D0C] w-27 col-span-4 md:col-span-3 lg:col-span-2 my-2 border rounded-sm border-[#273029] flex flex-col items-center justify-around py-4 min-h-35">
                                <img src={docker} alt="Docker" className="w-15" />
                                <h1 className="text-[#A7ADA5] inter">Docker</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider divider-horizontal rounded-2xl divider-success overflow-hidden"></div>
                <div className="col-span-12 xl:col-span-5 mt-15 xl:mt-0">
                    <h1 className="space-grotesk text-[#9FE870] text-xl">
                        CURRENTLY LEARNING
                        <div className="w-10 border-2 border-[#9FE870]"></div>
                    </h1>
                    <p className="text-3xl mt-5 w-60 text-[#F4F1E8] inter">Expanding my knowledge.</p>
                    {/* Expanding skills section */}
                    {expandingSkills.map((skill) => (
                        <div key={skill.index} className="mt-10">
                            <div className="grid grid-cols-12 items-center">
                                <h1 className="flex items-center justify-center text-2xl inter col-span-1 w-10 h-10 border border-[#9FE870] rounded-[50%] text-center text-[#9FE870] mr-3">{skill.index}</h1>
                                <h1 className="col-span-2 text-[#F4F1E8] inter text-2xl">{skill.name}</h1>
                                <p className="col-span-4 inter w-50 text-sm text-[#A7ADA5]">{skill.description}</p>
                                <div className="col-span-4 w-50 h-1 bg-[#273029] rounded-2xl">
                                    <div className={`bg-[#9FE870] border-2 border-[#9FE870] w-[${skill.progress}] rounded-2xl`}></div>
                                </div>
                                <p className="col-span-1 inter text-sm text-[#9FE870]">{skill.progress}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;