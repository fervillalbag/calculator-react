import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { BsSunFill, BsDot } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";

function App() {
  return (
    <Flex w="100vw" flexDir="column" h="100vh">
      <Grid
        w="100%"
        h="140px"
        bgColor="gray.200"
        justifyItems="center"
        gridTemplateColumns="repeat(2, auto)"
        alignItems="center"
        justifyContent="center"
        gap="0 1rem"
      >
        <Button
          rounded="full"
          fontSize="1.2rem"
          minW="initial"
          h="auto"
          width="3rem"
          height="3rem"
          p="0"
        >
          <BsSunFill />
        </Button>
        <Button
          rounded="full"
          fontSize="1.2rem"
          minW="initial"
          h="auto"
          width="3rem"
          height="3rem"
          p="0"
        >
          <FaRegMoon />
        </Button>
      </Grid>
      <Flex
        alignItems="flex-end"
        justifyContent="flex-end"
        w="full"
        h="400px"
        // bgColor="green.200"
        p="1.35rem 2rem"
      >
        <Text fontSize="2rem" fontWeight="bold">
          2 + 2 * 3
        </Text>
      </Flex>
      <Box w="full" h="full" bgColor="gray.100">
        <Grid
          p="1rem"
          gridTemplateColumns="repeat(4, 1fr)"
          gridTemplateRows="repeat(5, 1fr)"
          gap="0.4rem"
          h="full"
        >
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            AC
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            C
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            %
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            /
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            7
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            8
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            9
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            x
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            4
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            5
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            6
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            -
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            1
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            2
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            3
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            +
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            <IoReloadOutline />
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            0
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            <BsDot />
          </Button>
          <Button
            fontSize="1.3rem"
            w="full"
            h="full"
            rounded="0.5rem"
            bgColor="gray.300"
          >
            AC
          </Button>
        </Grid>
      </Box>
    </Flex>
  );
}

export default App;
