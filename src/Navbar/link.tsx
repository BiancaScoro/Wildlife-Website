import { ChosenPage } from "@/constant/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  chosenPage: ChosenPage;
  setChosenPage: (value: ChosenPage) => void;
};

const Link = ({ page, chosenPage, setChosenPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as ChosenPage;

  return (
    <AnchorLink
      className={`${chosenPage === lowerCasePage ? "text-black" : ""}
        transition duration-400 hover:beige
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setChosenPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;