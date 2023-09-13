import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsListCheck} from 'react-icons/bs'
import {FaBalanceScale} from 'react-icons/fa'
import {SiBetfair} from 'react-icons/si'

export const PriorityTicketingData = [
  {
    title: "Urgent Matters",
    desc: "When you have a critical issue that can't wait, our system identifies it as urgent.",
    icon: <AiOutlineClockCircle />,
  },
  {
    title: "Priority Levels",
    desc: "We categorize issues into different priority levels, allowing us to address each concern appropriately",
    icon: <BsListCheck />,
  },
  {
    title: "Fair Allocation",
    desc: " While urgent matters are handled immediately, ensuring that all clients receive the attention they deserve",
    icon: <FaBalanceScale />,
  },
  {
    title: "Transparent Process",
    desc: "Our ticketing system keeps you informed about your issue's status and progress.",
    icon: <SiBetfair />,
  },
];
