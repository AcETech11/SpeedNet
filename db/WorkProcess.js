import { GoPin } from "react-icons/go";
import { VscTools } from "react-icons/vsc";
import { TbSettingsBolt } from "react-icons/tb";
const workProcess =[
    {
        icon: <GoPin className="bg-button p-4 rounded-full "/>,
        title: "Consultation & Planning",
        subtitle: "Understanding Your Needs & Creating a Strategy",
        description: "We begin by analyzing your requirements, assessing the best solutions, and crafting a tailored plan for seamless execution.",
    },
    {
        icon: <TbSettingsBolt className="bg-button p-4 rounded-full"/>,
        title: "Implementation & Setup",
        subtitle: "Bringing Technology to Life",
        description: "Our experts handle the installation, configuration, and integration of CCTV, internet services, and automation systems with precision.",
    },
    {
        icon: <VscTools className="bg-button p-4 rounded-full"/>,
        title: "Testing & Support",
        subtitle: " Ensuring Performance & Long-Term Reliability",
        description: "We rigorously test all installations, provide user training, and offer ongoing support to keep your systems running smoothly.",
    },
]

export default workProcess;