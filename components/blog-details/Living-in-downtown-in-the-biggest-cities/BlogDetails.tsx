import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <>
      <div className="container">
        <div className="cs-blog-detail">
          <div className="blog-details_heading text-center mt-4 mb-4">
            <h2>Living in downtown in the biggest cities</h2>
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
                    <p>Deco Dom</p>
                  </div>
                </div>

              </div>

              <p>
                Ravenously while stridently coughed far promiscuously below jeez
                much yikes bland that salamander cunningly some over abhorrent
                as house with between ouch that well scurrilously alas capybara
                massive outdid oh said hello majestically roadrunner lobster
                much bled alas lighted together waved upheld more far woolly
                ahead darn far far bore far far saw baneful upset rebound bowed
                possessive before or indisputably against.
              </p>

              <p>
                After hamster hello less far astride where accordingly much
                because some far innocently invoked far pre-set or objective
                this pangolin tendentiously eagle near spread and overlay as
                abysmal a and before walrus much therefore some close victorious
                jeepers deeply forward while jeez and overlaid save hey ritually
                notwithstanding mounted about nonchalantly and less hence far
                like hey kissed.
              </p>

              <p>Simple answer is, because other candidates won’t.</p>

              <p>
                Ravenously while stridently coughed far promiscuously below jeez
                much yikes bland that salamander cunningly some over abhorrent
                as house with between ouch that well scurrilously alas capybara
                massive outdid oh said hello majestically roadrunner lobster
                much bled alas lighted together waved upheld.
              </p>

              <blockquote>
                Ravenously while stridently coughed far promiscuously below jeez
                much yikes bland that salamander cunningly some over abhorrent
                as house with between ouch that well scurrilously alas capybara
                massive outdid oh said hello majestically roadrunner lobster
                much bled alas lighted together waved upheld.&nbsp;
                <a href="#">-- Robert Deneairo</a>
              </blockquote>

              <p>
                Ravenously while stridently coughed far promiscuously below jeez
                much yikes bland that salamander cunningly some over abhorrent
                as house with between ouch that well scurrilously alas capybara
                massive outdid oh said hello majestically roadrunner lobster
                much bled alas lighted together waved upheld.
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
