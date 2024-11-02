import { Footer } from "flowbite-react";

function AppFooter(): JSX.Element {
  return (
    <Footer container className="mt-5 bg-gray-800 bg-opacity-75">
      <Footer.LinkGroup>
        <Footer.Copyright by="Xsylab" year={2024} className="text-gray-200" />
      </Footer.LinkGroup>
    </Footer>
  );
}

export default AppFooter;
