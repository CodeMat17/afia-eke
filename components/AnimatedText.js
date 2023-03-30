// // import logo from "./logo.svg";

// function Example() {

//   return
// }

import { Image, keyframes, usePrefersReducedMotion } from "@chakra-ui/react";
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AnimatedText = ({img}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return <Image animation={animation} src={img} />;
};

export default AnimatedText;
