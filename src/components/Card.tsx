import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RiAliensFill } from "react-icons/ri";
import { FaHeart, FaSkull } from "react-icons/fa";
import { BiX } from "react-icons/bi";

// left: calc(50% - 50px);
// bottom: -30px;

const Card: React.FC<any> = () => {
  return (
    <Box
      bg={"white"}
      borderRadius={15}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      justifyContent={"space-evenly"}
      alignItems={"stretch"}
      h={"450px"}
      maxH={"450px"}
      maxW={"600px"}
      margin={{ xs: "1rem 2rem", sm: "1rem 2rem", md: "1rem auto" }}
      boxShadow={"0 5px 10px #00000052"}
      position={"relative"}
    >
      <Flex
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Image
          borderRadius="full"
          boxSize="200px"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        />
        <Box
          position={"absolute"}
          borderRadius="full"
          borderWidth={5}
          borderColor={"brand.secondary"}
          bg={"brand.primary"}
          w={"60px"}
          h={"60px"}
          bottom={{ xs: "10px", sm: "10px", md: "130px" }}
          transform="translateX(80px)"
        ></Box>
      </Flex>
      <Flex
        bg={"rgba(234, 88, 12, 0.5)"}
        direction={"column"}
        alignItems={{ xs: "center", sm: "center", md: "stretch" }}
        justifyContent={"center"}
        flex={1}
        paddingLeft={5}
        borderBottomRightRadius={15}
        borderTopRightRadius={{ xs: 0, sm: 0, md: 15 }}
        borderBottomLeftRadius={{ xs: 15, sm: 15, md: 0 }}
      >
        <Heading as={"h2"} color={"brand.primary"} mb={10} fontWeight={"bold"}>
          Rick Sanchez
        </Heading>

        <Stack>
          <HStack>
            <Icon as={RiAliensFill} w={7} h={7} color={"brand.primary"} />
            <Text as={"span"} color={"brand.secondary"} fontWeight={"bold"}>
              Human
            </Text>
          </HStack>
          <HStack>
            <Icon as={FaSkull} w={5} h={5} color={"brand.primary"} ml={1} />
            <Text as={"span"} color={"brand.secondary"} fontWeight={"bold"}>
              Alive
            </Text>
          </HStack>
        </Stack>
      </Flex>

      <Flex
        position={"absolute"}
        direction={{ xs: "row", sm: "row", md: "column" }}
        justifyContent={"center"}
        alignItems={"center"}
        bottom={-10}
        left={{ xs: "calc(50% - 33px)", sm: "calc(50% - 33px)" }}
        gap={3}
      >
        <Box
          borderRadius="full"
          borderWidth={3}
          borderColor={"brand.secondary"}
          bg={"white"}
          w={"45px"}
          h={"45px"}
          transform={"translateX(-20%)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Icon as={BiX} w={7} h={7} color={"brand.primary"} />
        </Box>
        <Box
          borderRadius="full"
          borderWidth={5}
          borderColor={"brand.secondary"}
          bg={"white"}
          w={"65px"}
          h={"65px"}
          transform={"translateX(-10%)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Icon as={FaHeart} w={8} h={8} color={"brand.secondary"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
