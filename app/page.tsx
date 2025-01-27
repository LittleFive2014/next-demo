"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();

  const toAbout = () => {
    console.log("clicked");
    route.push("/main/about");
  };

  const toHelp = () => {
    console.log("clicked");
    route.replace("/main/help");
  };
  return (
    <div>
      <h2>
        Page
        <Button onClick={toAbout}>about</Button>
        <Button onClick={toHelp}>help</Button>
      </h2>
    </div>
  );
}
