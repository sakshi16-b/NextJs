import image from "@/images/banner.webp"
import Image from "next/image";

export default function CoursePage() {
    return (
        <main>
            <h1>CoursePage</h1>
            {/* <img src={image.src}/> */}
            <div style={{ width: "500px", height: "500px", position: "relative" }}>
<Image src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
                    fill
                    alt="banner" />
            </div>
        </main>
        );
}