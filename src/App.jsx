import Landing from "./components/Landing";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // FAQ expansível
    document.querySelectorAll(".faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        const content = parent.querySelector(".faq-a");
        const open = content.style.display === "block";

        // fechar todos
        document
          .querySelectorAll(".faq-a")
          .forEach((a) => (a.style.display = "none"));

        if (!open) content.style.display = "block";
      });
    });

    // micro-interações (hover subtle)
    document.querySelectorAll(".feature-card").forEach((card) => {
      card.addEventListener(
        "mouseenter",
        () => (card.style.transform = "translateY(-6px)")
      );
      card.addEventListener(
        "mouseleave",
        () => (card.style.transform = "translateY(0)")
      );
      card.style.transition = "transform .18s ease";
    });
  }, []);

  return <Landing />;
}

export default App;
