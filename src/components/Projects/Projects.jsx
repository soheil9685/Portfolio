import portfolioImg from "../../assets/Images/portfolio.png"

// Icons
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {

    let projects = [
        {
            index: 1,
            img: portfolioImg,
            title: "Portfolio",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, ipsum.",
            techs: ["React Js", "Tailwind"],
            demo: "",
            github: ""
        }
    ]

    return (
        <section id="projects" className="bg-[#F7F8F6] dark:bg-[#0B0D0C] border-b border-[#E5E8E3] dark:border-[#273029]">
            <div className="py-18 grid grid-cols-12 mx-auto w-full sm:w-135 md:w-180 lg:w-240 xl:w-285 2xl:w-330">
                <div className="col-span-12 lg:col-span-4 xl:col-span-3 mb-10 xl:mb-0 mx-auto lg:mx-0">
                    <h1 className="space-grotesk text-[#9FE870] text-xl">
                        PROJECTS
                        <div className="w-10 border-2 border-[#9FE870]"></div>
                    </h1>
                    <p className="text-5xl mt-5 w-70 text-[#171B20] dark:text-[#F4F1E8] inter">Some things I've built.</p>
                </div>
                <div className="col-span-12 lg:col-span-8 xl:col-span-9 flex gap-4 flex-wrap justify-center">
                    {projects.map((project) => (
                        <div key={project.index} className="w-90 bg-[#F7F8F6] dark:bg-[#111613] rounded-lg border border-[#E5E8E3] dark:border-[#273029] overflow-hidden">
                            <div className="p-5">
                                <img className="rounded-xl" src={project.img} alt="Project01" />
                                <h1 className="space-grotesk text-2xl text-[#171B20] dark:text-[#F4F1E8] mt-4">{project.title}</h1>
                                <p className="inter text-[#667085] dark:text-[#A7ADA5] my-3 text-justify">{project.desc}</p>
                                <div className="mt-5">
                                    {project.techs.map((tech , index) => (
                                        <span key={index} className="inter text-sm py-2 px-5 mr-2 bg-[#667085] dark:bg-[#0B0D0C] text-[#FFFFFF] dark:text-[#A7ADA5] rounded-full">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#98A0AA] dark:bg-[#0B0D0C] py-2 flex justify-around">
                                <a className="inter text-[#9FE870] text-sm" href={project.demo}>
                                    View Demo <OpenInNewIcon fontSize="small" />
                                </a>
                                <a className="inter text-[#9FE870] text-sm" href={project.github}>
                                    <GitHubIcon fontSize="small" /> View on GitHub <OpenInNewIcon fontSize="small" />
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects;