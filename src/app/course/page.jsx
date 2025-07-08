import Link from "next/link";

export default function CoursePage() {
    return (
        <>
            <main>
                <h1>CoursePage</h1>
            </main>
            <main>
                <ul>
                    <li>
                        <Link href={'/course/course-details/course-1'}>Course 1</Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-2'}>Course 2</Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-3'}>Course 3</Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-4'}>Course 4</Link>
                    </li>
                    <li>
                        <Link href={'/course/course-details/course-5'}>Course 5</Link>
                    </li>

                </ul>
            </main>




            {/* <img src={image.src}/>
            <div style={{ width: "500px", height: "500px", position: "relative" }}>
<Image src="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
                    fill
                    alt="banner" />
            </div> */}

        </>
    );
}