import { createRoot } from "react-dom/client";
import PracticeOne from "./PracticeOne";
import PracticeTwo from "./PracticeTwo";
import { StrictMode } from "react";
import Container from "./Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <PracticeOne text="Hallo, Selamat Belajar" number="2" />
    </Container>
    <PracticeTwo />
  </StrictMode>
);
