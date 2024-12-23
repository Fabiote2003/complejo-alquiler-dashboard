import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import styles from "./hero.module.css";
import ReservaForm from "./ReservaForm";

export default function Header() {
  return (
    <div
      className={`flex flex-col gap-20 items-center h-[calc(100vh-64px)] w-full bg-no-repeat bg-cover bg-center bg-[url('/images/background-image-hero.jpg')] overflow-hidden justify-center`}
    >
      <ReservaForm />
    </div>
  );
}
