import { Button, IconButton } from '@chakra-ui/react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaShoppingCart } from "react-icons/fa";
export default function Cart() {
  const router = useRouter();
   const isOnHome = (): boolean => {
    return window.location.pathname === "/" ? true : false;
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
        />
      </Link>
    </>
  );
}
