import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub, 
  faInstagram, 
  faXTwitter,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { graphql, useStaticQuery } from 'gatsby';

const socialMediaLinks = [
  {
    url: "https://www.facebook.com/xhanalexander/",
    icon: faFacebook,
    title: "Facebook",
  },
  {
    url: "https://twitter.com/xhanalexander",
    icon: faXTwitter,
    title: "Twitter",
  },
  {
    url: "https://github.com/xhanalexander",
    icon: faGithub,
    title: "Github",
  },
  {
    url: "https://www.instagram.com/xhanalexander/",
    icon: faInstagram,
    title: "Instagram",
  },
  {
    url: "https://www.linkedin.com/in/alexander-achmad-khan/",
    icon: faLinkedin,
    title: "LinkedIn",
  },
];

export default function Footer() {

  const data = useStaticQuery(graphql`
    query nickname {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const nickNames = data.site.siteMetadata.title

  return (
    <footer className="flex flex-col mt-20">
      <nav className="flex flex-row justify-center mb-4">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            title={link.title}
            className="text-white hover:text-green-400 mx-4 a-footer"
          >
            <FontAwesomeIcon icon={link.icon} className='fa-xl'/>
          </a>
        ))}
      </nav>
      <p className='text-gray-400 text-center'>© {new Date().getFullYear()} { nickNames }. All Rights Reserved.</p>
    </footer>
  );
}