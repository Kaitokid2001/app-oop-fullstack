import Link from "next/link";
import {Fix} from "./styles/reset"


export default function Home() {
  return (
    <Fix><Link href={"/home"}>home</Link></Fix>
  );
}
