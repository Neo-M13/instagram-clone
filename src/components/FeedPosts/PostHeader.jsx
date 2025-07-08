import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt="user profile picture" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap="2" cursor={"pointer"}>
         {username}
          <Box color={"gray.500"} cursor={"pointer"}>
            .58w
          </Box>
        </Flex>
      </Flex>
      <Box>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.5s ease-in-out"}
          cursor={"pointer"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
