import Image from "next/image";

export default function BlogMainPost({
  image,
}: {
  image: string;
}) {
  return (
    <div className="cs-main-post">
      <figure>
        <Image
          className="blgs_img"
          src={image}
          alt="blog-image"
          width={800}
          height={500}
        />
      </figure>
    </div>
  );
}
