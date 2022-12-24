import React from "react";
import {  Heading } from "@chakra-ui/react";
import Cart from "../components/Cart/Cart";

export default function cart() {
  return (
    <div>
          <Heading size={"3xl"}>Cart</Heading>
          <Cart/>
    </div>
  );
}
