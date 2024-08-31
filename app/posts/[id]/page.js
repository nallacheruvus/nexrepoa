'use client'
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router"


export default function Dyna() {
    const router = usePathname();
    const id = router.replace("/posts/", " ").trim();
    return <>
        {
            <h1>The value sent forth is :{id}</h1>
        }
    </>
}