import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Socials(){

    const socialLinks = (logo, link) => {
        return(
            <div
                className="flex justify-center mt-4"
            >
                <a
                    href={link}
                    className="social-icon"
                >
                    <FontAwesomeIcon 
                        className="social-icon-img"
                        icon={
                            logo
                        }
                    />
                </a>
            </div>
        )
    }

    return(
        <div
            className="bg-gray-500/80 mt-4 p-4 lg:p-10  rounded-xl"
        >
            <h1
                className="uppercase text-white font-bold text-3xl"
            >
                Connect with us on Socials
            </h1>
            <div
                className="grid grid-cols-2 lg:grid-cols-3"
            >
                {socialLinks(
                    faLinkedin,
                    "https://www.linkedin.com/company/solving7/posts/?feedView=all"
                )}

                {socialLinks(
                    faInstagram,
                    "https://www.instagram.com/solving7.green/"
                )}

                {socialLinks(
                    faFacebook,
                    "https://www.facebook.com/solving7.green"
                )}
            </div>
        </div>
    )
}