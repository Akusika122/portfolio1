import Link from 'next/link';
import { FaGithub, FaLinkedin} from 'react-icons/fa'


const socials = [
    // {
    //     icon: <FaGithub />, path: 'https://github.com/ike-nanino?tab=repositories'
    // },
    {
        icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/fortune-akusika-semanu-914430226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
];

interface StyleProps {
    containerStyles: string,
    iconStyles: string
}

function Socials({ containerStyles, iconStyles}: StyleProps) {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link href={item.path} key={index} className={iconStyles} >
                   {item.icon}
                </Link>
            )
        })
        
        }
    </div>
  )
}

export default Socials