import React from "react";

interface GreeterProps {
  person: string;
}

export default function Greeter(props: GreeterProps) {
  return (
    <>
      <h1>Deeper Than The Ocean {props.person}</h1>
    </>
  );
}
