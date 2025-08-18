
import { logoIconsList } from "../../Constants"


const LogoIcons = ({icon}) => {
    return(
        <div className="flex-none flex-center marquee-item">
                <img src={icon.imgPath} alt={icon.name} height={100} width={100} />
        </div>
    )
}

const LogoSection = () => {
    return (
        <div className="md:my-20 my-10 relative">
           <div className="gradient-edge"/>
           <div className="gradient-edge"/>

           <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
                {/* <img src={logoIconsList.map((icon) => (
                <LogoIcons key={icon.name}  icon={icon} />
            ))}
 alt="" /> */}
            {logoIconsList.map((icon) => (
                <LogoIcons key={icon.name}  icon={icon} />
            ))}

            </div>

           </div>
        </div>
    )
}

export default LogoSection