import { Button, Text } from "@mantine/core";
import { primaryColor } from "./constants/themeColor";
import Link from "next/link";
import { bigSize } from "./constants/size";



export default function Home() {
  return (
    <div className="mt-28 flex flex-col items-center">
      <div className="flex flex-col justify-center align-center items-center gap-4">
        <Text size={bigSize}>Projet AdminBD sur les triggers</Text>
        <Text size={bigSize}>Retrait bancaire</Text>
      </div>
      <Button className="mt-40" size="xl" radius="lg" color={primaryColor}>
        <Link href="/auth/login">Commencer</Link>
      </Button>
    </div>
  );
}
