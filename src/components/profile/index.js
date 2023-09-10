import React from "react";
import Image from "gatsby-image";
import { graphql, navigate, useStaticQuery } from "gatsby";

import "./index.scss";
import LinkedIn from "../../../assets/icons/linkedIn";
import Github from "../../../assets/icons/github";
import Twitter from "../../../assets/icons/twitter";
import Meduium from "../../../assets/icons/meduim";

const Profile = () => {
  const handleClick = () => {
    navigate("/about");
  };

  const profileQuery = useStaticQuery(graphql`
    query ProfileQuery {
      avatar: file(relativePath: { regex: "/profile.jpeg/" }) {
        childImageSharp {
          fixed(width: 170, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          bio
          githubUrl
          linkedinUrl
          twitterUrl
          meduimUrl
        }
      }
    }
  `);
  const { author, bio, githubUrl, linkedinUrl, twitterUrl, meduimUrl } = profileQuery.site.siteMetadata;

  return (
    <div className="profileContainer">
      <a href="/">
        <Image
          className="profileImage"
          fixed={profileQuery.avatar.childImageSharp.fixed}
          alt={author}
          fadeIn={true}
        />
      </a>
      <div className="profileContent">
        <div>
          <span
            className="profileLink"
            onClick={handleClick}
            onKeyDown={handleClick}
            role="presentation"
          >
            {author}
          </span>
        </div>
        <p className="profileText">{bio}</p>

      </div>
      <div className="profileSocialLinks" >
        <a href={githubUrl}>
          <Github></Github>
        </a>
        <a href={linkedinUrl}>
          <LinkedIn></LinkedIn>
        </a>
        <a href={twitterUrl}>
          <Twitter></Twitter>
        </a>
        <a href={meduimUrl}>
          <Meduium></Meduium>
        </a>
      </div>
    </div>
  );
};
export default Profile;
