import heroDarkImg from "../../assets/Images/hero dark.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
    return (
        <section className="mt-15 px-25 grid grid-cols-12 border-b-2 border-[#273029]">
            <div className="col-span-12 mt-12 text-center mb-10 lg:col-span-6 lg:text-start">
                <h5 className="text-[#9FE870] inter text-2xl my-2">HI, I'M</h5>
                <h1 className="text-7xl my-2 text-[#F4F1E8] text-shadow-[0_0_5px] text-shadow-[#F4F1E8]">Mohammad Soheil.</h1>
                <p className="text-[#9FE870] text-3xl my-3">
                    <Typewriter words={["Full Stack Developer"]} cursor={true} />
                </p>
                <p className="lg:w-80 my-6 text-md text-justify text-[#F4F1E8]">
                    <Typewriter typeSpeed={20} words={["I build modern, interactive and user-focused web experiences with clean code and great performance."]} cursor={true} />
                </p>
                <div className="mt-15">
                    <button className="cursor-pointer hover:shadow-[0_0_7px] hover:shadow-[#9FE870] mr-4 py-2 px-5 bg-[#9FE870] rounded-lg text-[#0B0D0C] transition-all duration-300">View my works</button>
                    <button className="cursor-pointer text-[#F4F1E8] py-2 px-5 border-[1.5px] border-[#9FE870] rounded-lg hover:bg-[#9FE870] hover:text-[#0B0D0C] transition-all duration-300 hover:shadow-[0_0_5px] hover:shadow-[#9FE870]">Contact me</button>
                </div>
                <div className="mt-6">
                    <a href="https://github.com/soheil9685">
                        <GitHubIcon fontSize="large" className="text-[#F4F1E8] mr-4 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohammad-soheil-hosseini-6a3957333/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2%2FZAXQvsQ9yxgPnBWF1k1g%3D%3D">
                        <LinkedInIcon fontSize="large" className="text-[#F4F1E8] mr-4 cursor-pointer" />
                    </a>
                    <a href="">
                        <TelegramIcon fontSize="large" className="text-[#F4F1E8] mr-4 cursor-pointer" />
                    </a>
                    <a href="">
                        <InstagramIcon fontSize="large" className="text-[#F4F1E8] cursor-pointer" />
                    </a>
                </div>
            </div>
            <div className="col-span-12 flex justify-center lg:col-span-6">
                <img className="w-100 text-left" src={heroDarkImg} alt="" />
            </div>
            <div className="col-span-12 text-center mb-5">
                <ArrowBackIosIcon fontSize="large" className="text-[#F4F1E8] rotate-270 " />
            </div>
        </section>
    )
}

export default Hero