"use client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UserMenuWithSession } from "@/features/auth/components/user-menu";
import { authClient } from "@/lib/auth-client";
import React from "react";

const HomePage = () => {
  const { data } = authClient.useSession();
  console.log(data);
  return (
    <div>
      HomePage
      <ModeToggle />
      <UserMenuWithSession variant="compact" />
    </div>
  );
};

export default HomePage;
