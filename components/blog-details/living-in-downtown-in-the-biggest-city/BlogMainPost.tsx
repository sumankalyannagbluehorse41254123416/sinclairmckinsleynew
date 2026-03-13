import Image from "next/image";

export default function BlogMainPost() {
  return (
    <div className="cs-main-post">
      <figure>
        <Image
          className="blgs_img"
          src="/images/1691992496812.png"
          alt=""
          width={800}
          height={500}
        />
      </figure>
    </div>
  );
}
