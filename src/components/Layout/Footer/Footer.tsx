import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3 pb-6 px-4 md:px-6 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl flex flex-col gap-2 sm:flex-row py-6 w-full items-center">
        <h3 className="text-2xl">Assist Me</h3>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link to="https://twitter.com/Fahim_FBA" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link to="https://github.com/FahimFBA/assist-me" target="_blank">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link to="https://www.linkedin.com/in/fahimfba/" target="_blank">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        © AssistMe. All rights reserved by Team Iphim.
      </p>
    </footer>
  );
};

export default Footer;
