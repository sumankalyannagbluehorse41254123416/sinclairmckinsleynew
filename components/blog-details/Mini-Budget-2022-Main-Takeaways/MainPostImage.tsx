import Image from "next/image";

export default function MainPostImage() {
  return (
    <div className="cs-main-post">
      <figure>
        <Image
          className="blgs_img"
          src="/images/1692276875466.jpg"
          alt=""
          width={1200}
          height={700}
        />
      </figure>
    </div>
  );
}
