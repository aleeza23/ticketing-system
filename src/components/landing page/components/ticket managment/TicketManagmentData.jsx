import {TbHelpOctagon ,TbRotateClockwise2} from 'react-icons/tb'
import {AiOutlineFieldTime} from 'react-icons/ai'

export const TicketManagmentData = [
    {
        id : 1,    
        title : 'Efficient Multi-Tasking',
        desc : 'Our ticketing system empowers agents to manage multiple tickets simultaneously, increasing efficiency and reducing resolution times. ',
        icon : <TbRotateClockwise2 />,
    },
    {
        id : 2,
        title : 'Personalized Support',
        desc : 'Our agents focus on your unique concerns while efficiently managing multiple tickets. You receive the attention you deserve without compromising on response time.',
        icon : <TbHelpOctagon/>,
    },
    {
        id : 3,
        title : 'Eliminate Queue Delays',
        desc : ' With our streamlined ticket management, your issues are addressed promptly. Experience hassle-free support and enjoy quicker problem resolution.',
        icon : <AiOutlineFieldTime />,
    },   
    ]