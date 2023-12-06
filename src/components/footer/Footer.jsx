import {
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-[#241310] text-center text-white py-[1rem]">
        <div className="flex items-center justify-center pt-2 gap-5">
          <a
            href="/facebook"
            className="hover:text-orange-700 transition-all duration-500 ease-in-out  text-2xl"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="/instagram"
            className="hover:text-orange-700 transition-all duration-500 ease-in-out text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="/tiktok"
            className="hover:text-orange-700 transition-all duration-500 ease-in-out text-2xl"
          >
            <FaTiktok />
          </a>
          <a
            href="/twitter"
            className="hover:text-orange-700 transition-all duration-500 ease-in-out text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="/youtube"
            className="hover:text-orange-700 transition-all duration-500 ease-in-out text-2xl"
          >
            <FaYoutube />
          </a>
        </div>
        <p className="pt-2 text-sm">
          Copyright © 2019 - {new Date().getFullYear()} &nbsp; BeCafe All Rights
          Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
