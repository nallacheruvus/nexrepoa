import Link from "next/link";
import styles from "./page.module.css";
import MyCmp from "./pagea";
import MyCmpA from "./pageb";
import Image from "next/image";


export default async function Home() {
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  const data = await res.json();
  return (
    <main className={styles.main}>
      <>
        <h1 style={{ backgroundColor: 'yellow', color: 'royalblue' }}>Welcome to NextJS</h1>
        <br />
        <MyCmp />
        <br />
        <Link href="./about">About Us</Link>
        <Link href="./contact">Contact</Link>
        <h1>Contact Us Page</h1>
        <br />
        {/* <ul style={{ listStyleType: "none" }}>
          {data.map(n => <li key={n.id}><h1>{n.title}</h1><br /><Image width="300" height="400" src={n.image} /><br />{n.description}<br /><hr /><br /></li>)}
        </ul> */}
        {/* <Image
          src="https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_1280.jpg"
          height="500"
          width="250"
          alt="GFG logo served from external URL"
        /> */}
      </>
    </main>
  );
}


// export default function Home() {
//   return (<>
//     <h1>Welcome to Client side component</h1>
//     <MyCmp />
//     <MyCmpA />
//   </>)
// }

