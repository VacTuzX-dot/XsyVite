// Import CSS
import "../style/index.css";
// Import other things that require
import { Footer, FooterLinkGroup, FooterCopyright } from "flowbite-react";
// Flowbite docs https://flowbite-react.com/docs/getting-started/introduction

// To add footer use <AppFooter />
function AppFooter(): JSX.Element {
  return (
    <Footer container className="mt-5 bg-gray-800 bg-opacity-75">
      <FooterLinkGroup>
        <FooterCopyright by="Xsylab" year={2024} className="text-gray-200" />
      </FooterLinkGroup>
    </Footer>
  );
}

export default AppFooter;
