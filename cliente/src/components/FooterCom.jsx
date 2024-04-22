import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="my-auto">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg
        text-white"
              >
                Dave's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-col-3 sm:gap-6">
            <div>
              <Footer.Title title="About"/>
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  Sobre mim
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Redes Sociais" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Footer.Link>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.Link>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="text-center">
          <Footer.Copyright href="#" by="Dave's Blog" year={new Date().getFullYear()}/>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
