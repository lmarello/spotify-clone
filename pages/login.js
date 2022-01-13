import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { Box } from "@chakra-ui/react";
import Logo from "components/Icons/Logo/Logo";

function Login({ providers }) {
  return (
    <Box display="grid">
      <Logo width={200} height={200} />

      {Object.values(providers).map((provider) => {
        return (
          <Box
            key={provider.id}
            display="block"
            as="button"
            borderRadius="3xl"
            bg="brand.400"
            color="brand.900"
            fontWeight={600}
            px={4}
            mt={8}
            h={12}
            _hover={{
              bg: "brand.500",
            }}
            onClick={() => {
              signIn(provider.id, { callbackUrl: "/" });
            }}
          >
            {`Login with ${provider.name}`}
          </Box>
        );
      })}
    </Box>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
