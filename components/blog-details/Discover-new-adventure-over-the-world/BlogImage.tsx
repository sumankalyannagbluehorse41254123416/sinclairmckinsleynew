import Image from "next/image";

export default function BlogImage() {
  return (
    <div className="cs-main-post">
      <figure>
        <Image
          className="blgs_img"
          src="/images/1691992429352.jpg"
          alt="blog image"
          width={1200}
          height={800}
        />
      </figure>
    </div>
  );
}
