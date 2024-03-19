"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <>
    <p>{error.message}</p>
    <button onClick={reset}>Try Again</button>
  </>
}
