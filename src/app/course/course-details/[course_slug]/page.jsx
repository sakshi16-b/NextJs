import image from "@/images/banner.webp"
import Image from "next/image";

export default function CourseDetailPage({ params }) {
    return (
        <>
            <main>
                <h1>This is the Course Detail Page</h1>

            </main>
            <main>
                <h1>This is the Course Detail Page of {params.course_slug}</h1>

            </main>

        </>
    );
}