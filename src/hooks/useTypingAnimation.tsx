import { useState, useEffect } from "react";

interface Role {
  text: string;
  color: string;
}

const roles: Role[] = [
  { text: "Web Development", color: "text-primary" },
  { text: "IT Support", color: "text-emerald-400" },
  { text: "Business & Systems Analyst", color: "text-sky-400" },
];

export const useTypingAnimation = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const fullText = currentRole.text;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < fullText.length) {
            setDisplayText(fullText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return {
    displayText,
    currentColor: roles[currentRoleIndex].color,
  };
};
