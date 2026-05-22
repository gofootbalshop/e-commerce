import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  title: string;
};

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const mainImage = images[0];

  return (
    <div>
      <div className="flex min-h-[520px] items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-100 via-white to-zinc-200 p-8">
        <Image
          src={mainImage}
          alt={title}
          width={520}
          height={520}
          className="h-[460px] w-auto object-contain"
          priority
        />
      </div>

      <div className="mt-5 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="flex h-28 items-center justify-center rounded-2xl border border-zinc-200 bg-white p-3"
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              width={120}
              height={120}
              className="h-24 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}