import Image from 'next/image'
//import ImageSrc from 'https://i.imgur.com/MK3eW3As.jpg'
import ImageSrc from '../public/assets/KJ.jpeg'
function Profile() {
    return (
        <img 
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        />
    )
}
function NextProfile() {
    return (
        <Image 
            src={ImageSrc}
            alt={"Katerine Johnson"}
        />
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Katerine Johnson</h1>
            <Profile />
            <Profile />
            <Profile />
            <div>
            <NextProfile />
            <NextProfile />
            <NextProfile />
            </div>
        </section>
    )
}