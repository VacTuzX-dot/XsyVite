// Import CSS
import "../style/index.css";
// Import other things that require
import {
  Footer,
  FooterLinkGroup,
  FooterCopyright,
  Tooltip,
} from "flowbite-react";
// Flowbite docs https://flowbite-react.com/docs/getting-started/introduction
import { FaReact } from "react-icons/fa";
// Get icons from https://react-icons.github.io/react-icons/
// If it didn't have icons you want, add your own icons to public folder and use .svg file format

// To add footer add "import AppFooter from "./AppFooter";" and use <AppFooter />
function AppFooter(): JSX.Element {
  return (
    <Footer container className="mt-5 bg-gray-800 bg-opacity-75">
      <FooterLinkGroup className="flex flex-wrap justify-between gap-5">
        <Tooltip
          content={
            <div className="flex items-center gap-2">
              <span>Made with React</span>
              <FaReact className="fill-sky-300" />
            </div>
          }
          style="dark"
          animation="duration-300"
        >
          <FooterCopyright by="Xsylab" year={2024} className="text-gray-200" />
        </Tooltip>
      </FooterLinkGroup>
    </Footer>
  );
}

export default AppFooter;
