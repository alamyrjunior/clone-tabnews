import React from "react";
import Lottie from "react-lottie";
import animationData from "./pages/animation.json"; // ajuste o caminho para o seu arquivo JSON

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <h1>Este é um título H1</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Home;
