"use client";

import { useEffect } from "react";

export default function DummyError() {
  useEffect(() => {
    throw new Error("Dummy error message.");
  }, []);

  return null;
}
