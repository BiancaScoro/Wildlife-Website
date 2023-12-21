import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ChosenPage } from "./types";

type Props = {
  children: React.ReactNode;
  setChosenPage: (value: ChosenPage) => void;
};

const Button = ({ children, setChosenPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-green-brown hover:bg-golden px-12 py-4 font-mulish"
      onClick={() => setChosenPage(ChosenPage.TakeAction)}
      href={`#${ChosenPage.TakeAction}`}
    >
      {children}
    </AnchorLink>
  );
}

export default Button