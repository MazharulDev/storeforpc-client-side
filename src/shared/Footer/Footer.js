import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-800 text-white p-5">
        <h2 className="text-3xl text-center">StoreForPc</h2>
        <p className="text-center my-4">
          If you need computer parts, you can easily take them
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://web.facebook.com/MazharulDev/">
            <BsFacebook className="text-2xl hover:scale-105"></BsFacebook>
          </a>
          <a href="https://twitter.com/MazharulDev">
            <BsTwitter className="text-2xl hover:scale-105"></BsTwitter>
          </a>
          <a href="https://www.linkedin.com/in/mazharuldev/">
            <BsLinkedin className="text-2xl hover:scale-105"></BsLinkedin>
          </a>
          <a href="https://github.com/MazharulDev">
            <BsGithub className="text-2xl hover:scale-105"></BsGithub>
          </a>
        </div>
        <div></div>
      </div>
      <div className="text-center bg-black text-white p-2">
        <p>
          Copyright &copy; {new Date().getFullYear()} StoreForPc developed By{" "}
          <a
            className="text-blue-600"
            href="https://mdmazharulislam-dev.web.app/"
          >
            Md Mazharul islam
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
