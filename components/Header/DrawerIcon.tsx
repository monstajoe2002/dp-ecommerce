import { Button, IconButton } from '@chakra-ui/react'
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import { FaHome, FaShoppingCart } from "react-icons/fa";
export default function Cart() {
   const isOnHome = (): boolean => {
    return window.location.pathname === "/" ? true : false;
  };
  const isSignedIn = (): boolean => {
    return !window.localStorage.getItem("user") 
  };
  return (
    <>
      <Link href={isOnHome()?"/cart":"/"} style={{ marginLeft: "auto" }}>
        <IconButton
          variant={"outline"}
          colorScheme={"blue"}
          aria-label={isOnHome() ? "Go home" : "Go to cart"}
          ml={"auto"}
          icon={isOnHome() ? <FaShoppingCart /> : <FaHome />}
          onClick={!isSignedIn() ? () => {
            alert("Please sign in")
          } : () => { }}
        />
      </Link>
    </>
  );
}
