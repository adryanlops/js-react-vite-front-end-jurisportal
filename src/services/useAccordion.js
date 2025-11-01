import { useState } from "react";

export function useAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return { activeIndex, toggleSection };
}
