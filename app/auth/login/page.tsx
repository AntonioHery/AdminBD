import {
  CustomPasswordInput,
  CustomTextInput,
} from "@/app/components/customInput";
import { Button,Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <form className="flex flex-col space-y-4 w-1/3 mx-auto mt-20 bg-gray-200 p-4 rounded-lg">
        <CustomTextInput placeholder="Email" label="Email"/>
        <CustomPasswordInput placeholder="Password" label="Password"/>
        <Button> Se connecter</Button>
        <Text size="sm" className="text-center">
          Vous n&apos;avez pas de compte ?
          <Text
            fs="italic"
            td="underline"
            ml={2}
            c="teal.4"
            component={Link}
            className="underline-offset-1"
            href={"/auth/signup"}
          >
            S&apos;inscrire
          </Text>
        </Text>
      </form>
    </div>
  );
};

export default LoginPage;
