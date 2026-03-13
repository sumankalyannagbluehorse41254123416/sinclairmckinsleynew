"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCards() {
  return (
    <section className="container_new container">

      {/* CARD 1 */}
      <Link href="/blog-details/Discover-new-adventures-over-the-world">
        <div className="card-container">
          <div className="card-image">
            <Image
              src="/images/1691992519667.jpg"
              alt=""
              width={400}
              height={300}
            />
          </div>

          <div className="card-body">
            <span className="card-badge card-badge-blue">design</span>

            <h1>Discover new adventures over the world</h1>

            <p className="card-subtitle">
              Adventure and baloons are trends these days these days
            </p>

            <div className="card-author">
              <Image
                src="/images/1691745449848.jpeg"
                alt="author avatar"
                width={40}
                height={40}
              />

              <div className="author-info">
                <p className="author-name">Jhon Doe</p>
                <p className="post-timestamp">2023-08-11</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* CARD 2 */}
      <Link href="/blog-details/living-in-downtown-in-the-biggest-city">
        <div className="card-container">
          <div className="card-image">
            <Image
              src="/images/1691992496812.png"
              alt=""
              width={400}
              height={300}
            />
          </div>

          <div className="card-body">
            <span className="card-badge card-badge-blue">development</span>

            <h1>Living in downtown in the biggest cities</h1>

            <p className="card-subtitle">
              Citizens of the biggest cities in the world talk about their lives
            </p>

            <div className="card-author">
              <Image
                src="/images/1691745572490.jpeg"
                alt="author avatar"
                width={40}
                height={40}
              />

              <div className="author-info">
                <p className="author-name">Deco Dom</p>
                <p className="post-timestamp">2023-08-11</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* CARD 3 */}
      <Link href="/blog-details/Discover-new-adventure-over-the-world">
        <div className="card-container">
          <div className="card-image">
            <Image
              src="/images/1691992429352.jpg"
              alt=""
              width={400}
              height={300}
            />
          </div>

          <div className="card-body">
            <span className="card-badge card-badge-blue">engineering</span>

            <h1>Discover new adventures over the world</h1>

            <p className="card-subtitle">
              Adventure and baloons are trends these days these days
            </p>

            <div className="card-author">
              <Image
                src="/images/1691745449848.jpeg"
                alt="author avatar"
                width={40}
                height={40}
              />

              <div className="author-info">
                <p className="author-name">Jhon Doe</p>
                <p className="post-timestamp">2023-08-11</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* CARD 4 */}
      <Link href="/blog-details/Living-in-downtown-in-the-biggest-cities">
        <div className="card-container">
          <div className="card-image">
            <Image
              src="/images/1691992333320.jpg"
              alt=""
              width={400}
              height={300}
            />
          </div>

          <div className="card-body">
            <span className="card-badge card-badge-blue">development</span>

            <h1>Living in downtown in the biggest cities</h1>

            <p className="card-subtitle">
              Citizens of the biggest cities in the world talk about their lives
            </p>

            <div className="card-author">
              <Image
                src="/images/1691745572490.jpeg"
                alt="author avatar"
                width={40}
                height={40}
              />

              <div className="author-info">
                <p className="author-name">Deco Dom</p>
                <p className="post-timestamp">2023-08-11</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* CARD 5 */}
      <Link href="/blog-details/Mini-Budget-2022-Main-Takeaways">
        <div className="card-container">
          <div className="card-image">
            <Image
              src="/images/1692276875466.jpg"
              alt=""
              width={400}
              height={300}
            />
          </div>

          <div className="card-body">
            <span className="card-badge card-badge-blue">budget</span>

            <h1>Mini Budget 2022: Main Takeaways</h1>

            <p className="card-subtitle">
              Today, our Chancellor Kwasi Kwarteng has announced the Mini Budget 2022
            </p>

            <div className="card-author">
              <Image
                src="/images/1691745449848.jpeg"
                alt="author avatar"
                width={40}
                height={40}
              />

              <div className="author-info">
                <p className="author-name">Jhon Doe</p>
                <p className="post-timestamp">2023-08-11</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

    </section>
  );
}
