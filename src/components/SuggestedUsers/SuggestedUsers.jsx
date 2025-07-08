import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems="center" justifyContent="space-between" w="full">
        <Text fontSize={12} fontWeight="bold" color="gray.500">
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight="bold"
          _hover={{ color: "gray.400" }}
          cursor="pointer"
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Neo Mokoena"
        followers="999"
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Kenzo Nem"
        followers="4500"
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Lexi S"
        followers="87770"
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color="gray.500" mt={5} alignSelf="start">
        © 2024 Built By{" "}
        <Link
          href="https://www.youtube.com/Programmer"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          As a Programmer
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;

