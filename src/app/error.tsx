"use client";

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center px-3 pt-36">
      {/* <H1>Something went wrong</H1> */}
      <H1>{error.message}</H1>
      <p className="mt-7 text-2xl lg:text-3xl text-center">
        We&apos;re sorry, something went wrong. Please go back to
        home.
      </p>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="mt-12 px-4 py-2 text-white/75 border bg-accent rounded-md"
      >
        Back to Home
      </button>
    </main>
  );
}
