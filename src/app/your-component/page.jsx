import Image from 'next/image'

export default function YourComponent() {
  return (
    <div className="relative aspect-video w-full">
      <Image
        src="/img/AdobeStock_379435239-2048x1365.jpeg"
        fill
        alt="Description"
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}