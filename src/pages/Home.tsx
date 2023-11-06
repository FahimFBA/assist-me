import { useEffect, useRef } from "react";
// @ts-ignore
import Typed from "typed.js";
// import { FaRegEnvelope } from "react-icons/fa";
import {
  TbAlpha,
  TbArtboard,
  TbBrandJuejin,
  TbBrandBlogger,
  TbAd,
} from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { FaRegNewspaper, FaStar } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { LuLayoutList } from "react-icons/lu";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";
import { LuGanttChartSquare } from "react-icons/lu";
import { PiNotebookLight } from "react-icons/pi";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";
// import { BiTargetLock } from "react-icons/bi";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "ToDo",
        "Markdown Support",
        "Customized Notification",
        "Gmail Integration",
        "Google Calendar Integration",
        "GitHub Integration",
        "Weather Forecast",
        "Artificial Intelligence (AI) Chatbot"
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
          marginTop: "80px",
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
                    <TbAlpha size={30} strokeWidth={1.5} />
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
                    <TbBrandJuejin size={30} strokeWidth={1.5} />
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
                    <TbArtboard size={30} strokeWidth={1.5} />
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
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Start creating powerful content, for your next ads
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Let's Communicate with your customers with emotions
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
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
                    <BsArrowUpRight size={20} strokeWidth={1.5} />
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

                    <BsArrowUpRight size={20} strokeWidth={1.5} />
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
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Start creating powerful content, for your next ads
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Let's Communicate with your customers with emotions
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
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
                    <BsArrowUpRight size={20} strokeWidth={1.5} />
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
        <section className="bg-dark-blue-4 py-20 py-lg-30">
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
                    <TbBrandBlogger size={30} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <TbAd size={35} strokeWidth={1} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="250">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <FaRegNewspaper size={27} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="300">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <BiTargetLock size={30} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <LuLayoutList size={25} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <TfiLayoutMediaCenterAlt size={25} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="250">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <LuGanttChartSquare size={27} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-up-sm" data-aos-delay="300">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <PiNotebookLight size={30} strokeWidth={1} />
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
                      <BsArrowUpRight size={15} strokeWidth={1} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />
                        <FaStar size={20} style={{ color: "yellow" }} />
                        <FaStar size={20} style={{ color: "yellow" }} />
                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />

                        <FaStar size={20} style={{ color: "yellow" }} />
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
                    <div className="cta-image-container">
                      <div>
                        <HiOutlineArrowTrendingDown
                          size={100}
                          strokeWidth={1.5}
                          style={{ color: "#f5f777" }}
                        />
                      </div>
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
