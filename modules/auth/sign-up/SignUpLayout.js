import React, { useCallback, useState, useEffect } from "react";
import { Cookie } from "../../../services/cookies";
import { useRouter } from "next/router";
import MobileLayout from "./components/MobileLayout";
import DesktopLayout from "./components/DesktopLayout";

export default function SignUpLayout({ children, bgImage }) {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileLayout bgImage={bgImage}>{children}</MobileLayout>
      ) : (
        <DesktopLayout bgImage={bgImage}>{children}</DesktopLayout>
      )}
    </>
  );
}
