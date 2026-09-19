import { motion } from "motion/react";

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Container from "../Common/Container/Container";

function Footer() {

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
            index: 4,
            icon: LinkedInIcon,
            text: "_soheil9685_"
        }
    ]

    return (
        <footer id='footer' className='bg-[#F7F8F6] dark:bg-[#111613]'>
            <Container className='py-18 grid grid-cols-12 mx-auto w-full sm:w-135 md:w-180 lg:w-240 xl:w-285 2xl:w-330'>
                <motion.div className='col-span-12 md:col-span-6 xl:col-span-3 mb-10 xl:mb-0 mx-auto md:mx-0' initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <h1 className='inter text-4xl w-55 leading-12 text-justify text-[#171B20] dark:text-[#F4F1E8]'>
                        LET'S BUILD SOMETHING <span className='text-[#9FE870]'>TOGETHER.</span>
                    </h1> 
                </motion.div>
                <motion.div className='col-span-12 md:col-span-6 xl:col-span-4 mb-10 xl:mb-0 flex flex-col items-start justify-center mx-auto md:mx-0' initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                    <p className='text-[#667085] dark:text-[#A7ADA5]'>
                        Have a project in mind or just wanna say Hi? <br />
                        I'd love to hear from you.
                    </p>
                    <button className='m-auto md:mx-0 bg-[#9FE870] text-[#F7F8F6] dark:text-[#111613] px-4 py-2 flex justify-center items-center rounded-md inter mt-7 hover:shadow-[0_0_10px] hover:shadow-[#9FE870] transition-all duration-300'>
                        <a href="mailto:canopus.soheilhosseini@gmail.com">
                            GET IN TOUCH <ArrowForwardIcon />
                        </a>
                    </button>
                </motion.div>
                <div className='divider divider-horizontal divider-success'></div>
                <motion.div className='col-span-12 lg:col-span-12 xl:col-span-4 m-auto md:mx-0' variants={parentVariant} initial="hidden" whileInView="visible">
                    {links.map((link) => {
                        const Icon = link.icon

                        return (
                            <motion.p key={link.index} className='text-[#171B20] dark:text-[#F4F1E8] inter mb-5' variants={childVariants}>
                                <Icon className='text-[#9FE870]' fontSize='medium' /> {link.text}
                            </motion.p>
                        )
                    })}
                </motion.div>
            </Container>
            <div className='bg-[#F7F8F6] dark:bg-[#0B0D0C] grid grid-cols-2 py-2'>
                <p className='text-[#667085] dark:text-[#A7ADA5] col-span-2 md:col-span-1 text-center text-sm'>
                    <CopyrightIcon /> 2026. All rights reserved.
                </p>
                <p className='text-[#667085] dark:text-[#A7ADA5] col-span-2 md:col-span-1 text-center text-sm'>
                    Designed & built by SOHEIL HOSSEINI.
                </p>
            </div>
        </footer>
    )
}

export default Footer;