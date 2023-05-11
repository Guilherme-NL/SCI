import React, { useRef } from "react";

export default function SectionButton(props) {
  const targetRef = useRef(null);

  const handleSectionClick = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={handleSectionClick}>Ir para a seção</button>
      <props.target ref={targetRef} />
    </div>
  );
}
