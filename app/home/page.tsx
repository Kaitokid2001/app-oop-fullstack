import Link from "next/link";
import { Fix } from "./homeStyled";

export default function Home() {
  return (
    <Fix>
      <Link href={"/"}>page</Link>
    </Fix>
  );
}
