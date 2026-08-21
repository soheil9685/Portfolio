// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {

    let links = [
        {
            index: 1,
            icon: TelegramIcon,
            text: "@canopus_msh"
        },
        {
            index: 2,
            icon: GitHubIcon,
            text: "soheil9685"
        },
        {
            index: 3,
            icon: InstagramIcon,
            text: "_soheil9685_"
        },
        {
            index: 3,
            icon: LinkedInIcon,
            text: "_soheil9685_"
        }
    ]

    return (
        <footer className='bg-[#111613]'>
            <div className='grid grid-cols-12 px-20 py-10'>
                <div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-3 mb-10 xl:mb-0 flex justify-center'>
                    <h1 className='inter text-4xl w-55 leading-12 text-justify text-[#F4F1E8]'>
                        LET'S BUILD SOMETHING <span className='text-[#9FE870]'>TOGETHER.</span>
                    </h1> 
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 mb-10 xl:mb-0 flex flex-col items-center justify-center'>
                    <p className='text-[#A7ADA5]'>
                        Have a project in mind or just wanna say Hi? <br />
                        I'd love to hear from you.
                    </p>
                    <button className='bg-[#9FE870] text-[#111613] px-4 py-2 flex justify-center items-center rounded-md inter mt-7 hover:shadow-[0_0_10px] hover:shadow-[#9FE870] transition-all duration-300'>
                        <a href="">
                            GET IN TOUCH <ArrowForwardIcon />
                        </a>
                    </button>
                </div>
                <div className='divider divider-horizontal divider-success'></div>
                <div className='col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-4 flex flex-col items-center justify-center'>
                    {links.map((link) => {
                        const Icon = link.icon

                        return (
                            <p className='text-[#F4F1E8] inter mb-5'>
                                <Icon className='text-[#9FE870]' fontSize='medium' /> {link.text}
                            </p>
                        )
                    })}

                </div>
            </div>
            <div className='bg-[#0B0D0C] grid grid-cols-2 py-2'>
                <p className='text-[#A7ADA5] col-span-2 md:col-span-1 text-center'>
                    <CopyrightIcon /> 2026. All rights reserved.
                </p>
                <p className='text-[#A7ADA5] col-span-2 md:col-span-1 text-center'>
                    Designed & built by SOHEIL HOSSEINI.
                </p>
            </div>
        </footer>
    )
}

export default Footer;