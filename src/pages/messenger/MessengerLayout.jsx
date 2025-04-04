import React from "react";
import ListMessenger from "./ListMessenger";
import MessengerDetail from "./MessengerDetail";

export default function MessengerLayout() {
  return (
    <>
      <section className="flex gap-2">
        <ListMessenger />
        <MessengerDetail />
      </section>
    </>
  );
}
