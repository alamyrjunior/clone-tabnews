import React from "react";
import Lottie from "react-lottie";
import animationData from "./animation.json"; // ajuste o caminho para o seu arquivo JSON

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J4BpkVD7Xye
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <Lottie options={defaultOptions} height={400} width={400} />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
          Under Construction
        </h1>
        <p className="mt-4 text-muted-foreground">
          We're working hard to bring you something amazing. Please check back
          soon!
        </p>
      </div>
    </div>
  );
}
