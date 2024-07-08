import Image from "next/image";
import ProgrammByCategory from "./component/ProgrammByCategory";


export default function Home() {
  return (
    <main>
      <div>
        <ProgrammByCategory></ProgrammByCategory>
      </div>
    </main>
  );
}
