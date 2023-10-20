import AOS from "aos";
import { useEffect, useRef } from "react";
// @ts-ignore
import Typed from "typed.js";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  useEffect(() => {
    window.addEventListener("load", () =>
      AOS.init({
        duration: 800,
      }),
    );
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Technical Writing",
        "News Article",
        "SEO Content",
        "Product Description",
      ],
      startDelay: 100,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="wrapper d-flex flex-column justify-between">
      <main
        style={{
          marginTop: "120px",
        }}
        className="flex-grow-1"
      >
        {/* <!-- Hero --> */}
        <section
          className="hero-section style-1 overflow-hidden bg-dark py-10 py-lg-15"
          data-bs-theme="dark"
        >
          <div className="container">
            <div className="row justify-center">
              <div className="col-lg-9">
                <div className="text-center">
                  <div className="position-relative z-1">
                    <p className="text-primary-dark" data-aos="fade-up-sm">
                      Best AI Copywriting Tool
                    </p>
                    <h1
                      className="text-white mb-8"
                      data-aos="fade-up-sm"
                      data-aos-delay="150"
                    >
                      A 10X Faster Way To Write Your <br />
                      <span
                        className="fw-bold text-gradient-2 typed-animation"
                        ref={el}
                      ></span>
                    </h1>
                    <a
                      href="login.html"
                      className="btn btn-lg btn-gradient-1"
                      data-aos="fade-up-sm"
                      data-aos-delay="200"
                    >
                      Start Writing - It's Free
                    </a>
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="300">
                    <div className="image-with-shape">
                      <img
                        src="/images/shapes/blurry-shape-1.svg"
                        alt=""
                        className="shape animate-scale"
                      />
                      <div className="mt-12 rounded-5 border border-primary-dark shadow-lg overflow-hidden position-relative z-1">
                        <img
                          className="img-fluid d-inline-block"
                          src="/images/screens/screen-1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <ul className="d-flex flex-wrap gap-4 gap-md-8 gap-lg-10 align-center justify-center mt-8 mb-0">
                    <li>Write Blogs 10X Faster</li>
                    <li>Write Higher Converting Posts</li>
                    <li>Write More Engaging Emails</li>
                  </ul>
                  <div className="d-flex gap-8 align-center justify-center mt-12 review-badges">
                    <img
                      className="img-fluid"
                      src="/images/review-logos/trustpilot_reviews.svg"
                      alt=""
                    />
                    <img
                      className="img-fluid"
                      src="/images/review-logos/capterra_reviews.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Features --> */}
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="text-center mb-18">
              <h1
                className="mb-0 text-white"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                Generate Creative AI Copy On-The-Spot,{" "}
                <br className="d-none d-lg-block" />
                Across Your Favorite Tools
              </h1>
            </div>

            <div className="row g-6 g-xl-14">
              <div
                className="col-lg-4"
                data-aos="fade-up-sm"
                data-aos-delay="200"
              >
                <div className="d-flex flex-column gap-6 flex-lg-row">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M30.167 10c-1.833 4.855-3.167 8.188-4 10m0 0c-3.132 6.813-6.188 10-10 10-4 0-8-4-8-10s4-10 8-10c3.778 0 6.892 3.31 10 10Zm0 0c.853 1.837 2.187 5.17 4 10" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="mb-4 text-white">
                      Generates quality contents
                    </h4>
                    <p>
                      This tool helps you find the right keywords to target for
                      your content. By using the Google Keyword Planner, you can
                      see how often people
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up-sm"
                data-aos-delay="250"
              >
                <div className="d-flex flex-column gap-6 flex-lg-row">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M3.333 20 20 32.37 36.666 20" />
                        <path d="M11.667 15 20 21.667 28.334 15m-10.001-5L20 11.333 21.666 10 20 8.666 18.333 10Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="mb-4 text-white">
                      Provides Useful Suggestions
                    </h4>
                    <p>
                      GenAI writing tools can analyze data and generate insights
                      to help writers create more compelling and informative
                      content.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up-sm"
                data-aos-delay="300"
              >
                <div className="d-flex flex-column gap-6 flex-lg-row">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M10 29.334 6.667 27.5v-4.166m0-6.668V12.5L10 10.666m6.667-3.833L20 5l3.334 1.833M30 10.666l3.333 1.834v4.166m0 6.668V27.5L30 29.367m-6.666 3.799L20 35l-3.333-1.834M20 20l3.333-1.834M30 14.333l3.333-1.833M20 20v4.167m0 6.667V35m0-15-3.333-1.867M10 14.333 6.667 12.5" />
                      </g>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="mb-4 text-white">
                      Improves Products Productivity
                    </h4>
                    <p>
                      Emotions are a powerful tool in advertising. Use emotions
                      that resonate with your audience to create a connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="login.html" className="btn btn-primary-dark">
                Try a demo
              </a>
            </div>
          </div>
        </section>

        {/* <!-- Features --> */}
        <section className="py-10 py-lg-15 @extraClassNameList">
          <div className="container">
            <div className="row g-6 gx-lg-14 gx-xl-20 align-center">
              <div
                className="col-lg-6"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                <div className="content">
                  <p className="text-primary-dark">Features 1</p>
                  <h1 className="text-white mb-8">
                    Let's Create AI-Powered Content With A Single Click.
                  </h1>
                  <p className="mb-6">
                    To create powerful content, you need to know who you're
                    targeting. Identify your target audience and understand
                    their needs, interests, and pain points.
                  </p>
                  <ul className="list-unstyled list-check mb-8">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                        className="icon"
                      >
                        <g>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                          />
                        </g>
                      </svg>
                      <span>
                        Start creating powerful content, for your next ads
                      </span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                        className="icon"
                      >
                        <g>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                          />
                        </g>
                      </svg>
                      <span>
                        Let's Communicate with your customers with emotions
                      </span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                        className="icon"
                      >
                        <g>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                          />
                        </g>
                      </svg>
                      <span>
                        Use visuals like images, videos, or infographics to make
                        your content more engaging
                      </span>
                    </li>
                  </ul>
                  <a
                    href="login.html"
                    className="arrow-link arrow-link-primary-dark text-primary-dark gap-3"
                  >
                    <span>Get Started Free</span>
                    <svg
                      className="icon"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                        stroke="currentColor"
                        strokeWidth="1.21"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up-sm"
                data-aos-delay="250"
              >
                <div className="feature-img">
                  <img
                    src="/images/illustrations/feature-illustration-1-dark.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="row g-6 gx-lg-14 gx-xl-20 align-center mt-10 flex-row-reverse">
              <div
                className="col-lg-6 col-xl-6"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                <div className="content">
                  <p className="text-primary-dark">Features 2</p>
                  <h1 className="text-white mb-8">
                    A Magical Tool To Optimize Your Content For First Page
                    Rankings
                  </h1>
                  <p className="mb-6">
                    A Magical Tool to Optimize you content for the first know
                    who you're targeting. Identify your target audience and
                    understand their needs, interests, and pain points.
                  </p>
                  <a
                    href="login.html"
                    className="arrow-link arrow-link-primary-dark text-primary-dark gap-3"
                  >
                    <span>Request A Demo</span>
                    <svg
                      className="icon"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                        stroke="currentColor"
                        strokeWidth="1.21"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up-sm"
                data-aos-delay="250"
              >
                <div className="feature-img">
                  <img
                    src="/images/illustrations/feature-illustration-2-dark.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="row g-6 gx-lg-14 gx-xl-20 align-center mt-10">
              <div
                className="col-lg-6"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                <div className="content">
                  <p className="text-primary-dark">Features 3</p>
                  <h1 className="text-white mb-8">
                    Write Blog Posts, Stories, & Even Books With
                    <span className="text-primary-dark">GenAI</span>.
                  </h1>
                  <p className="mb-6">
                    To create powerful content, you need to know who you're
                    targeting. Identify your target audience and understand
                    their needs, interests, and pain points.
                  </p>
                  <ul className="list-unstyled list-check mb-8">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                        className="icon"
                      >
                        <g>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                          />
                        </g>
                      </svg>
                      <span>
                        Start creating powerful content, for your next ads
                      </span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                        className="icon"
                      >
                        <g>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                          />
                        </g>
                      </svg>
                      <span>
                        Let's Communicate with your customers with emotions
                      </span>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                        className="icon"
                      >
                        <g>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                          />
                        </g>
                      </svg>
                      <span>
                        Use visuals like images, videos, or infographics to make
                        your content more engaging
                      </span>
                    </li>
                  </ul>
                  <a
                    href="login.html"
                    className="arrow-link arrow-link-primary-dark text-primary-dark gap-3"
                  >
                    <span>Get Started Free</span>
                    <svg
                      className="icon"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                        stroke="currentColor"
                        strokeWidth="1.21"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up-sm"
                data-aos-delay="250"
              >
                <div className="feature-img">
                  <img
                    src="/images/illustrations/feature-illustration-3-dark.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Use cases --> */}
        <section className="bg-striped bg-striped-sm bg-striped-bottom bg-dark-blue-4 py-20 py-lg-30">
          <div className="container">
            <div className="row justify-center mb-18">
              <div className="col-lg-9">
                <div className="text-center">
                  <p
                    className="text-primary-dark"
                    data-aos="fade-up-sm"
                    data-aos-delay="50"
                  >
                    GenAI Use Cases
                  </p>
                  <h1
                    className="text-white mb-0"
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                  >
                    Write Better Content Faster, The Future Of AI Writing Tools
                    is Here
                  </h1>
                </div>
              </div>
            </div>
            <div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
              <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 40 40"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M13.333 35h13.334A8.333 8.333 0 0 0 35 26.667v-5a5 5 0 0 0-5-5h-1.667v-3.334A8.333 8.333 0 0 0 20 5h-6.667A8.333 8.333 0 0 0 5 13.333v13.334A8.333 8.333 0 0 0 13.333 35Z" />
                        <path d="M11.667 14.167a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 1 1 0 5h-5a2.5 2.5 0 0 1-2.5-2.5Zm0 11.666a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 1 1 0 5H14.167a2.5 2.5 0 0 1-2.5-2.5Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Writing Blog Content</h5>
                    <p className="mb-0">
                      Writing blog content with GenAI, make sure you have a
                      clear understanding of who your audience is.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try Blog Content</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M8 18.667a5.333 5.333 0 0 1 5.333-5.334h37.334A5.334 5.334 0 0 1 56 18.667v26.666a5.333 5.333 0 0 1-5.333 5.334H13.333A5.333 5.333 0 0 1 8 45.333V18.667Z" />
                        <path d="M18.667 40V29.333a5.334 5.334 0 0 1 10.666 0V40m-10.666-5.333h10.666m16-10.667v16h-4a4 4 0 1 1 4-4" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Digital Ad Copy</h5>
                    <p className="mb-0">
                      A Magical Tool to Optimize you content for the first know
                      who you're targeting. Identify your target.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try Digital Ad</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="250">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M10.667 13.333a2.667 2.667 0 0 1 2.666-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v37.334a2.667 2.667 0 0 1-2.666 2.666H13.333a2.667 2.667 0 0 1-2.666-2.666V13.333Zm0 8h42.666m-32-10.666v10.666" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Website Copy</h5>
                    <p className="mb-0">
                      Optimize you content for the first know who you're
                      targeting. Identify your target audience.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try Website Copy</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="300">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M24 32a8 8 0 1 0 16.001 0A8 8 0 0 0 24 32Z" />
                        <path d="M10.667 32a21.334 21.334 0 1 0 42.667 0 21.334 21.334 0 0 0-42.667 0ZM32 5.333v5.334m0 42.666v5.334M53.333 32h5.334M5.333 32h5.334" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Social Media Content</h5>
                    <p className="mb-0">
                      First know who you're targeting. Identify your target
                      audience and understand their needs.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try Social Media Content</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M34.667 13.333H56M34.667 24H48M34.667 40H56M34.667 50.667H48M8 13.333a2.667 2.667 0 0 1 2.667-2.666h10.666A2.667 2.667 0 0 1 24 13.333V24a2.667 2.667 0 0 1-2.667 2.667H10.667A2.667 2.667 0 0 1 8 24V13.333ZM8 40a2.667 2.667 0 0 1 2.667-2.667h10.666A2.667 2.667 0 0 1 24 40v10.667a2.667 2.667 0 0 1-2.667 2.666H10.667A2.667 2.667 0 0 1 8 50.667V40Z" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Landing Page Copy</h5>
                    <p className="mb-0">
                      First know who you're targeting. Identify your target
                      audience and understand their needs.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try Landing Page Copy</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M8 13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333V40a2.667 2.667 0 0 1-2.667 2.667H10.667A2.667 2.667 0 0 1 8 40V13.333Zm10.667 40h26.666M24 42.667v10.666m16-10.666v10.666M24 32v-3.2m8 3.2v-5.6m8 5.6V21.6" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Marketing Copy</h5>
                    <p className="mb-0">
                      A Magical Tool to Optimize you content for the first know
                      who you're targeting. Identify your target.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try Marketing Copy</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="250">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M10.667 21.333a10.667 10.667 0 0 1 10.666-10.666h21.334a10.667 10.667 0 0 1 10.666 10.666v21.334a10.667 10.667 0 0 1-10.666 10.666H21.333a10.667 10.667 0 0 1-10.666-10.666V21.333Z" />
                        <path d="M24 21.333a8 8 0 0 0 16 0" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">eCommerce Copy</h5>
                    <p className="mb-0">
                      Writing blog content with GenAI, make sure you have a
                      clear understanding of who your audience is.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try eCommerce Copy</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="300">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 64 64"
                    >
                      <g
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M32 10.667 10.667 21.333 32 32l21.333-10.667L32 10.667ZM10.667 32 32 42.667 53.333 32M10.667 42.667 32 53.333l21.333-10.666" />
                      </g>
                    </svg>
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Product Description</h5>
                    <p className="mb-0">
                      Optimize you content for the first know who you're
                      targeting. Identify your target audience.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="use-cases-details.html"
                      className="arrow-link arrow-link-primary-dark gap-3 fs-sm"
                    >
                      <span>Try Product Description</span>
                      <svg
                        className="icon"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
                          stroke="currentColor"
                          strokeWidth="1.21"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Reviews --> */}
        <section className="overflow-hidden pt-20 pb-10 pt-lg-30 pb-lg-15">
          <div className="container">
            <div className="row justify-center mb-18">
              <div className="col-lg-9">
                <div className="text-center">
                  <h1
                    className="text-white"
                    data-aos="fade-up-sm"
                    data-aos-delay="50"
                  >
                    <span className="text-primary-dark">GenAI.</span>
                    Received <img src="/images/icons/star.png" alt="" /> 4.8/5
                    Stars in Over 10,000+ Reviews.
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="review-rolling-carousel-container">
            <div className="swiper review-rolling-carousel">
              <div className="swiper-wrapper rolling-carousel-wrapper">
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Wade Warrent</h6>
                        <p className="mb-0 fs-sm">Marketing Coordinator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        This is the best thing that has happened to my team in a
                        while! Makes post text something we barely need to think
                        about!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/2.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Dianne Russell</h6>
                        <p className="mb-0 fs-sm">Content Creator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/3.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Jenny Wilson</h6>
                        <p className="mb-0 fs-sm">Product Designer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Comfortable to wear for long periods of time. The
                        battery life is impressive, providing up to 8 hours of
                        listening time on a single charge. The earbuds are also
                        sweat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/4.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Guy Hawkins</h6>
                        <p className="mb-0 fs-sm">Digital Marketer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Through my interactions with users, I have seen how
                        technology has made life easier and more convenient for
                        people.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Bessie Cooper</h6>
                        <p className="mb-0 fs-sm">SEO Expert</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        I feel proud to be part of this technological
                        advancement and to be able to help people in their
                        day-to-day activities. It is truly amazing how
                        technology has the power to connect
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Wade Warrent</h6>
                        <p className="mb-0 fs-sm">Marketing Coordinator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        This is the best thing that has happened to my team in a
                        while! Makes post text something we barely need to think
                        about!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/2.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Dianne Russell</h6>
                        <p className="mb-0 fs-sm">Content Creator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/3.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Jenny Wilson</h6>
                        <p className="mb-0 fs-sm">Product Designer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Comfortable to wear for long periods of time. The
                        battery life is impressive, providing up to 8 hours of
                        listening time on a single charge. The earbuds are also
                        sweat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/4.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Guy Hawkins</h6>
                        <p className="mb-0 fs-sm">Digital Marketer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Through my interactions with users, I have seen how
                        technology has made life easier and more convenient for
                        people.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Bessie Cooper</h6>
                        <p className="mb-0 fs-sm">SEO Expert</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        I feel proud to be part of this technological
                        advancement and to be able to help people in their
                        day-to-day activities. It is truly amazing how
                        technology has the power to connect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="review-rolling-carousel-container-reversed mt-6">
            <div className="swiper review-rolling-carousel-reversed">
              <div className="swiper-wrapper rolling-carousel-wrapper">
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Wade Warrent</h6>
                        <p className="mb-0 fs-sm">Marketing Coordinator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        This is the best thing that has happened to my team in a
                        while! Makes post text something we barely need to think
                        about!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/2.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Dianne Russell</h6>
                        <p className="mb-0 fs-sm">Content Creator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/3.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Jenny Wilson</h6>
                        <p className="mb-0 fs-sm">Product Designer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Comfortable to wear for long periods of time. The
                        battery life is impressive, providing up to 8 hours of
                        listening time on a single charge. The earbuds are also
                        sweat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/4.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Guy Hawkins</h6>
                        <p className="mb-0 fs-sm">Digital Marketer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Through my interactions with users, I have seen how
                        technology has made life easier and more convenient for
                        people.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Bessie Cooper</h6>
                        <p className="mb-0 fs-sm">SEO Expert</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        I feel proud to be part of this technological
                        advancement and to be able to help people in their
                        day-to-day activities. It is truly amazing how
                        technology has the power to connect
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Wade Warrent</h6>
                        <p className="mb-0 fs-sm">Marketing Coordinator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        This is the best thing that has happened to my team in a
                        while! Makes post text something we barely need to think
                        about!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/2.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Dianne Russell</h6>
                        <p className="mb-0 fs-sm">Content Creator</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Aliqua id fugiat nostrud irure ex duis ea quis id quis
                        ad et. Sunt qui esse pariatur duis deserunt mollit
                        dolore cillum minim tempor enim.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/3.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Jenny Wilson</h6>
                        <p className="mb-0 fs-sm">Product Designer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Comfortable to wear for long periods of time. The
                        battery life is impressive, providing up to 8 hours of
                        listening time on a single charge. The earbuds are also
                        sweat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/4.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Guy Hawkins</h6>
                        <p className="mb-0 fs-sm">Digital Marketer</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        Through my interactions with users, I have seen how
                        technology has made life easier and more convenient for
                        people.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto">
                  <div className="review-card rounded h-full p-6 border bg-dark-blue-3 border-white border-opacity-10">
                    <div className="d-flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-circle overflow-hidden">
                        <img
                          src="/images/review/1.png"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <h6 className="text-white mb-1">Bessie Cooper</h6>
                        <p className="mb-0 fs-sm">SEO Expert</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="stars d-flex items-center gap-1 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 15 14"
                          className="w-4 h-4 text-primary-dark"
                        >
                          <path d="m4.824 4.225-4.253.617-.075.015A.667.667 0 0 0 .202 5.98l3.082 3-.727 4.236-.009.073a.667.667 0 0 0 .976.63l3.804-2 3.796 2 .066.03a.666.666 0 0 0 .902-.733l-.728-4.237 3.083-3 .052-.056a.667.667 0 0 0-.422-1.08l-4.253-.618L7.922.372a.667.667 0 0 0-1.196 0L4.824 4.225Z" />
                        </svg>
                      </div>
                      <p className="review-text mb-0">
                        I feel proud to be part of this technological
                        advancement and to be able to help people in their
                        day-to-day activities. It is truly amazing how
                        technology has the power to connect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Pricing --> */}
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="row justify-center mb-18">
              <div className="col-lg-10">
                <div className="text-center">
                  <p
                    className="text-primary-dark"
                    data-aos="fade-up-sm"
                    data-aos-delay="50"
                  >
                    Pricing Plan
                  </p>
                  <h1
                    className="text-white mb-5"
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                  >
                    Ready to Get Started? <br />
                    Don't Worry, We'll Keep You Under Budget
                  </h1>
                  <p
                    className="mb-0"
                    data-aos="fade-up-sm"
                    data-aos-delay="150"
                  >
                    Get started with a 5-day trial, Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-6 pricing-table">
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-">
                  <h3 className="text-primary-dark fw-medium mb-0">Free</h3>
                  <h1 className="display-2 fw-semibold text-white mb-0 mt-4">
                    $00
                  </h1>
                  <p className="text-white lead fw-normal mt-4 mb-0">
                    A 10X faster way to writing your professional copy
                  </p>
                  <a
                    href="pricing-plan.html"
                    className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-dark-blue-3"
                  >
                    Start for Free
                  </a>
                  <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                    <li>Single seats</li>
                    <li>10,000 words per month</li>
                    <li>30+ AI writing tools</li>
                    <li>60+ Copywriting tools</li>
                    <li>10+ languages</li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-">
                  <h3 className="text-primary-dark fw-medium mb-0">Starter</h3>
                  <h1 className="display-2 fw-semibold text-white mb-0 mt-4">
                    $29
                  </h1>
                  <p className="text-white lead fw-normal mt-4 mb-0">
                    A 10X faster way to writing your professional copy
                  </p>
                  <a
                    href="pricing-plan.html"
                    className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-dark-blue-3"
                  >
                    Choose Plan
                  </a>
                  <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                    <li>5 User seats</li>
                    <li>
                      <strong className="text-white fw-medium">50,000</strong>{" "}
                      words per month
                    </li>
                    <li>
                      <strong className="text-white fw-medium">70+</strong> AI
                      writing tools
                    </li>
                    <li>
                      <strong className="text-white fw-medium">100+</strong>{" "}
                      Copywriting tools
                    </li>
                    <li>Blog post wizard tool</li>
                    <li>25+ languages</li>
                  </ul>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                <div className="pricing-card p-6 px-lg-10 py-lg-8 rounded-4 h-full bg-">
                  <span className="badge text-bg-primary px-4 py-2 rounded-end-0">
                    Most Popular
                  </span>
                  <h3 className="text-primary-dark fw-medium mb-0">
                    Enterprise
                  </h3>
                  <h1 className="display-2 fw-semibold text-white mb-0 mt-4">
                    $119
                  </h1>
                  <p className="text-white lead fw-normal mt-4 mb-0">
                    A 10X faster way to writing your professional copy
                  </p>
                  <a
                    href="pricing-plan.html"
                    className="pricing-btn btn btn-lg w-full fs-4 lh-sm mt-9 btn-dark-blue-3"
                  >
                    Choose Plan
                  </a>
                  <ul className="pricing-list d-flex flex-column gap-5 fs-lg mt-9 mb-0">
                    <li>Unlimited seats</li>
                    <li>
                      <strong className="text-white fw-medium">100,000</strong>{" "}
                      words per month
                    </li>
                    <li>
                      <strong className="text-white fw-medium">100+</strong> AI
                      writing tools
                    </li>
                    <li>
                      <strong className="text-white fw-medium">200+</strong>{" "}
                      Copywriting tools
                    </li>
                    <li>Blog post wizard tool</li>
                    <li>25+ languages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- FAQ --> */}
        <section className="py-10 py-lg-15">
          <div className="container">
            <div className="row justify-center mb-18">
              <div className="col-lg-10">
                <div className="text-center">
                  <h1
                    className="mb-0 text-white"
                    data-aos="fade-up-sm"
                    data-aos-delay="50"
                  >
                    Questions About our GenAI?{" "}
                    <br className="d-none d-md-block" />
                    We have Answers!
                  </h1>
                </div>
              </div>
            </div>

            <div className="row justify-center">
              <div
                className="col-lg-8"
                data-aos="fade-up-sm"
                data-aos-delay="100"
              >
                <div
                  className="accordion accordion-flush d-flex flex-column gap-6"
                  id="faqAccordion"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-collapseOne"
                        aria-expanded="false"
                        aria-controls="faq-collapseOne"
                      >
                        <span className="icon"></span>
                        What Is GenAI Content Writing Tool?
                      </button>
                    </h2>
                    <div
                      id="faq-collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Once you know your audience, choose a topic that will
                        resonate with them. Look for trending topics in your
                        industry or address common questions or challenges your
                        audience may be facing. Keep in mind that your topic
                        should be both interesting and relevant to your audience
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-collapseTwo"
                        aria-expanded="false"
                        aria-controls="faq-collapseTwo"
                      >
                        <span className="icon"></span>
                        Is it helpful for Digital Marketer or Content Writer?
                      </button>
                    </h2>
                    <div
                      id="faq-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Once you know your audience, choose a topic that will
                        resonate with them. Look for trending topics in your
                        industry or address common questions or challenges your
                        audience may be facing. Keep in mind that your topic
                        should be both interesting and relevant to your audience
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-collapseThree"
                        aria-expanded="false"
                        aria-controls="faq-collapseThree"
                      >
                        <span className="icon"></span>
                        Is there a limit on how much content I can generate?
                      </button>
                    </h2>
                    <div
                      id="faq-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Once you know your audience, choose a topic that will
                        resonate with them. Look for trending topics in your
                        industry or address common questions or challenges your
                        audience may be facing. Keep in mind that your topic
                        should be both interesting and relevant to your audience
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-collapseFour"
                        aria-expanded="false"
                        aria-controls="faq-collapseFour"
                      >
                        <span className="icon"></span>
                        What Languages does it supports?
                      </button>
                    </h2>
                    <div
                      id="faq-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Once you know your audience, choose a topic that will
                        resonate with them. Look for trending topics in your
                        industry or address common questions or challenges your
                        audience may be facing. Keep in mind that your topic
                        should be both interesting and relevant to your audience
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-collapseFive"
                        aria-expanded="false"
                        aria-controls="faq-collapseFive"
                      >
                        <span className="icon"></span>
                        What is SEO Writing AI and how do I use it?
                      </button>
                    </h2>
                    <div
                      id="faq-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Once you know your audience, choose a topic that will
                        resonate with them. Look for trending topics in your
                        industry or address common questions or challenges your
                        audience may be facing. Keep in mind that your topic
                        should be both interesting and relevant to your audience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- CTA --> */}
        <section
          className="cta-section py-10 py-lg-15"
          data-aos="fade-up-sm"
          data-aos-offset="150"
        >
          <div className="container">
            <div className="rounded-5 border position-relative z-1 bg-dark-blue-4">
              <div className="animate-scale position-absolute w-full h-full z-n1">
                <img
                  src="/images/shapes/blurry-shape-4.svg"
                  alt=""
                  className="bg-shape img-fluid"
                />
              </div>
              <div className="row justify-center">
                <div className="col-lg-10">
                  <div className="text-center pt-6 px-6 pt-md-10 px-md-10 pt-lg-18 px-lg-18">
                    <h2 className="mb-6 text-white">
                      Using
                      <span className="text-primary-dark">GenAI</span>
                      you can save hours each week creating long-form content.
                    </h2>
                    <a href="login.html" className="btn btn-primary-dark">
                      Get Started Free
                    </a>
                    <div className="cta-image-container mt-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 34 90"
                        className="text-primary-dark arrow-shape"
                      >
                        <path
                          fill="currentColor"
                          d="M3.724 2.303c8.095 4.54 13.968 13.648 16.408 22.434 2.336 8.415 2.426 20.276-5.705 25.79-2.961 2.01-7.092 2.24-8.781-1.444-1.571-3.422.29-7.096 3.683-8.452 9.162-3.663 16.334 8.02 18.234 15.324a30.563 30.563 0 0 1 .279 14.195c-.952 4.334-2.866 9.283-6.298 12.254-.494.427-1.3-.29-.971-.84 1.77-2.928 3.677-5.571 4.79-8.851 1.155-3.405 1.62-7.048 1.44-10.626-.358-7.103-3.568-15.745-10.125-19.354-3.476-1.912-10.316-1.353-10.055 3.973.107 2.158 1.647 4.035 3.933 3.81 2.086-.209 4.001-1.766 5.333-3.279 5.427-6.16 4.857-15.89 2.67-23.215a39.21 39.21 0 0 0-5.682-11.577c-2.69-3.76-6.017-6.61-9.592-9.472-.35-.277.039-.896.44-.67Z"
                        />
                        <path
                          fill="currentColor"
                          d="M1.562.977c9.931 2.79 17.058 11.508 19.312 21.4 1.085 4.762 1.187 9.7.548 14.54-.653 4.937-1.854 10.549-4.949 14.589-2.156 2.82-7.305 5.961-10.266 2.388-2.608-3.142-2.18-9.094.45-12.093 2.945-3.356 8.048-2.969 11.491-.718 4.112 2.688 6.675 7.596 8.265 12.12 3.48 9.905 2.395 21.33-3.11 30.327-.527.858-1.947.203-1.423-.676 3.935-6.565 5.559-14.253 4.688-21.84-.443-3.864-1.552-7.677-3.306-11.147-2.011-3.973-5.078-8.396-9.854-8.994-5.273-.66-7.99 4.089-7.3 8.82.403 2.76 1.938 4.99 5.042 4.079 2.519-.74 4.35-3.051 5.51-5.296 3.708-7.194 4.563-16.802 3.066-24.658C17.848 13.969 11.217 4.92 1.373 1.995.736 1.812.917.797 1.563.977Z"
                        />
                        <path
                          fill="currentColor"
                          d="M21.218 73.052c.375 2.062.446 4.204.634 6.29.088.987.18 1.975.266 2.964.04.457-.025 2.873.383 3.085.21.11 2.177-1.456 2.452-1.64l2.452-1.641c1.595-1.065 3.329-2.678 5.205-3.148.671-.169 1.174.542.746 1.106-.792 1.05-1.99 1.644-3.08 2.36-1.23.812-2.464 1.62-3.695 2.432-1.142.748-3.43 3.037-4.974 2.3-1.476-.7-.955-3.793-1.042-5.105-.198-2.945-.602-5.957-.531-8.906a.595.595 0 0 1 1.184-.097Z"
                        />
                        <path
                          fill="currentColor"
                          d="M21.773 73.169c-.032 2.254-.679 4.55-.972 6.789-.338 2.597-.601 5.224-.564 7.844-.465-.225-.933-.454-1.398-.68a76.772 76.772 0 0 0 6.002-4.227c1.876-1.465 3.568-3.521 5.632-4.678.6-.336 1.581.26 1.137.983-1.181 1.924-3.415 3.456-5.165 4.844a64.808 64.808 0 0 1-6.607 4.574c-.694.421-1.465-.14-1.385-.91.27-2.565.462-5.128.849-7.683.348-2.297.616-4.895 1.59-7.019.19-.398.887-.308.88.163Z"
                        />
                        <path
                          fill="currentColor"
                          d="M22.85 71.546c-.873 5.764-1.778 11.525-2.588 17.298-.462-.304-.922-.605-1.384-.91 2.439-1.254 4.864-2.527 7.207-3.954 2.158-1.317 4.212-3.127 6.536-4.109.733-.31 1.331.688.841 1.25-1.713 1.972-4.396 3.318-6.619 4.634-2.326 1.378-4.712 2.663-7.172 3.78-.633.287-1.294-.395-1.174-1.015 1.098-5.725 2.104-11.464 3.137-17.2.137-.79 1.337-.563 1.215.226Z"
                        />
                      </svg>
                      <div className="cta-img rounded-top-4">
                        <img
                          src="/images/screens/screen-1.jpg"
                          alt=""
                          className="img-fluid w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
