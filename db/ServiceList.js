import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiCctvCamera } from "react-icons/gi";
import { RiDoorLockFill } from "react-icons/ri";

const serviceList = [
    {
        name: 'Smart Surveillance',
        icon: <GiCctvCamera />,
        percentage: '40%',
        details: 'Advanced 24/7 monitoring with AI-powered cameras that ensure comprehensive protection of your property.',
        image: ''
    },
    {
        name: 'Automated Access Control',
        icon: <RiDoorLockFill />,
        percentage: '35%',
        details: 'Secure entry systems featuring biometric authentication and remote management for seamless access and enhanced safety.',
        image: ''
    },
    {
        name: 'Risk Management & Compliance',
        icon: <AiFillSafetyCertificate />,
        percentage: '25%',
        details: 'A centralized risk hub using adaptive AI and ML to proactively monitor, assess, and mitigate potential threats.',
        image: ''
    },
    
]
export default serviceList