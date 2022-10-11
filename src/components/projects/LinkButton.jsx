import { background, Link } from "@chakra-ui/react";
import { BsGithub, BsGlobe2 } from "react-icons/bs";

const LinkButton = ({ borderColor, text, color, href }) => {
  return (
    <Link
      my={[6, 8]}
      gap={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={["110px", "130px"]}
      h={["40px", "40px"]}
      border="1px solid"
      fontWeight="bold"
      color={color}
      borderColor={borderColor}
      bgColor="transparent"
      rounded={6}
      href={href}
      target="_blank"
      _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
    >
      {text === "Live" ? <BsGlobe2 /> : <BsGithub />}
      {text}
    </Link>
  );
};

export default LinkButton;
