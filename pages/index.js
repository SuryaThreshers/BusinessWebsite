import { useRouter } from "next/router";
import { useEffect } from "react";
import { ROUTES_PATH } from "../config";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    router.push(ROUTES_PATH.home);
  }, []);

  return null;
}
