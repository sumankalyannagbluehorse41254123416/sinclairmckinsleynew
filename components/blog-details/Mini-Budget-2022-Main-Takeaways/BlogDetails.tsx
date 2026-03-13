import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <>
      <div className="container">
        <div className="cs-blog-detail">
          <div className="blog-details_heading text-center mt-4 mb-4">
            <h2>Mini Budget 2022: Main Takeaways</h2>
          </div>
        </div>
      </div>

      <section className="blogWrapper">
        <div className="container">
          <div className="blog_inner">

            <article className="mainBlog">
              <div className="cs-post-title">

                <div className="post-option">
                  <span className="post-date ani">
                    <p>Aug 11, 2023</p>
                  </span>
                </div>

                <div className="cs-author">
                  <div className="cs-text ani">
                    <p>Jhon Doe</p>
                  </div>
                </div>

              </div>

              <p>
                Today, our Chancellor Kwasi Kwarteng has announced the Mini Budget
                2022 and some major changes that will have a considerable impact
                for individuals and businesses. We have summaries for you some of
                the most important changes following the Mini budget announcement.
              </p>

              <p>
                We round up the new measures and what they mean for you as follow:
              </p>

              <p>
                April’s National Insurance increase of 1.25% to be reversed from
                6 November 2022- delivering on key PM pledge to cut tax burden and
                promote economic growth. This will mean a cut of 1.25% points for
                employees, employers and the self-employed, effectively reversing
                the uplift introduced in April 2022 for the rest of the tax year.
              </p>

              <p>
                Corporation tax rise planned in future is cancelled, keeping it at
                19% as government sets sights on 2.5% trend rate of growth.
              </p>

              <p>
                Basic rate of income tax cut to 19% from 20% in April 2023 – one
                year earlier than planned – with 31 million people getting on
                average £170 more per year.
              </p>

              <p>
                Stamp Duty cuts will help people on all levels of the property
                market. Anyone Buying a house costing under £250k will pay no SDLT.
              </p>

              <p>
                The Chancellor has announced plans to abolish the IR35 off payroll
                working rules for the public and private sector from April 2023.
              </p>

              <p>
                The business will no longer pay a higher level of employer
                National Insurance and can now invest the money as they choose.
              </p>

              <p>
                Most employees will receive a cut to their National Insurance
                directly via payroll in their November pay.
              </p>

              <p>
                The chancellor will also announce that the 1.25 percentage point
                increase to income tax on dividends introduced in April 2022 will
                be reversed from April 2023.
              </p>

            </article>

            {/* Sidebar */}
                    <div className="sidebar-widget latest-news">
              <div className="sidebar-title">
                <h3>Recent Posts</h3>
              </div>

              <div className="widget-content">

                {/* POST 1 */}
                <article className="post">
                  <Link href="/blog-details/Discover-new-adventures-over-the-world">
                    <figure className="thumb">
                      <Image
                        src="/images/1691992519667.jpg"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </figure>

                    <h5>Discover new adventures over the world</h5>
                    <div className="post-info">2023-08-11</div>
                  </Link>
                </article>

                {/* POST 2 */}
                <article className="post">
                  <Link href="/blog-details/living-in-downtown-in-the-biggest-city">
                    <figure className="thumb">
                      <Image
                        src="/images/1691992496812.png"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </figure>

                    <h5>Living in downtown in the biggest cities</h5>
                    <div className="post-info">2023-08-11</div>
                  </Link>
                </article>

                {/* POST 3 */}
                <article className="post">
                  <Link href="/blog-details/Discover-new-adventure-over-the-world">
                    <figure className="thumb">
                      <Image
                        src="/images/1691992429352.jpg"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </figure>

                    <h5>Discover new adventures over the world</h5>
                    <div className="post-info">2023-08-11</div>
                  </Link>
                </article>

                {/* POST 4 */}
                <article className="post">
                  <Link href="/blog-details/Living-in-downtown-in-the-biggest-cities">
                    <figure className="thumb">
                      <Image
                        src="/images/1691992333320.jpg"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </figure>

                    <h5>Living in downtown in the biggest cities</h5>
                    <div className="post-info">2023-08-11</div>
                  </Link>
                </article>

                {/* POST 5 */}
                <article className="post">
                  <Link href="/blog-details/Mini-Budget-2022-Main-Takeaways">
                    <figure className="thumb">
                      <Image
                        src="/images/1692276875466.jpg"
                        alt=""
                        width={80}
                        height={80}
                      />
                    </figure>

                    <h5>Mini Budget 2022: Main Takeaways</h5>
                    <div className="post-info">2023-08-11</div>
                  </Link>
                </article>

              </div>

              <Link
                href="/blog"
                className="view_blog"
              >
                view More
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
