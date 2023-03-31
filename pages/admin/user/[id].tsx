import { useRouter } from "next/router";
import Link from "next/link";

export default function AdminUser() {
    const router = useRouter();
    
    console.log("router", router);

    const handleOnClick = () => {
        router.push("/");
    }

    return (
        <>
            <h1>Admin: User Page {router.query.id}</h1>
            <button onClick={handleOnClick}>Go to homepage</button>
            <Link href = "/">Go to homepage by a tag</Link>
        </>
    )
}