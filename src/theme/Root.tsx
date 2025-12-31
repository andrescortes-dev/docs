// src/theme/Root.tsx
import BottomNav from "@/components/BottomNav";

export default function Root({ children }) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}
