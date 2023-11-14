import { useEffect, useRef } from "react";
// @ts-ignore
import Typed from "typed.js";
// import { FaRegEnvelope } from "react-icons/fa";

// Get the tb-react-icons from: https://react-icons.github.io/react-icons/icons/tb/

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
import { TbNote } from "react-icons/tb";
import { TbLayoutDashboard } from "react-icons/tb";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { TbDeviceDesktopSearch } from "react-icons/tb";
import { TbBrandGoogle } from "react-icons/tb";
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
        "Artificial Intelligence (AI) Chatbot",
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
                      Personalized Web Application
                    </p>
                    <h1
                      className="text-white mb-8"
                      data-aos="fade-up-sm"
                      data-aos-delay="150"
                    >
                      An Application That You Need EVERYDAY! <br />
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
                      Start Using - It's Free
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
                    <li>Manage Your Day To Day Tasks</li>
                    <li>Use As Your All In One Grading Application</li>
                    <li>Check Your GMail Directly</li>
                    <li>Check Latest News Directly Within A Single Application</li>
                    <li>Get Real Time Weather Update</li>
                    <li>Get Your Own Personalized Dashboard</li>
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
                Generate Important Tasks & Workflows On-The-Spot,{" "}
                <br className="d-none d-lg-block" />
                Across All Your Devices
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
                      Write Down Your Tasks & Notes
                    </h4>
                    <p>
                      This tool helps you to write down your tasks and notes,
                      and get them done on time. It also helps you to manage
                      custom notifications and workflows. You can also set
                      specific time for your tasks and notes.
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
                      AssistMe writing tools can analyze data and generate
                      insights to help you make better decisions. It can
                      also help you to write better content faster.
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
                      Improve your productivity by using AssistMe writing tools
                      that includes Google and GitHub integration right out of
                      the box to help you get more done.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="login.html" className="btn btn-primary-dark">
                Try a demo using the free tier
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
                    Let's Create AI-Powered Content With A Single Click
                  </h1>
                  <p className="mb-6">
                    To create powerful content, initially you need to have
                    the knowledge of AI prompts. But you don't need to
                    worry anything if you simply use AssistMe. It will
                    help you on the go based on your personal preferences.
                  </p>
                  <ul className="list-unstyled list-check mb-8">
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Start creating powerful content, for your next tasks
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Let's Manage your timeline, schedule and appointments
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Use visuals like images, videos, or infographics to make
                        your content more refreshing
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
                    A Magical Tool To Optimize Your Productivity
                  </h1>
                  <p className="mb-6">
                    AssistMe always focusses on your productivity. It
                    provides you with the best suggestions to improve your
                    productivity. It also helps you to manage custom
                    notifications and workflows. You can also set specific
                    time for your tasks and notes. You can choose exactly which
                    notifications you want to receive and when.
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
                    Check Your GMail & GitHub Directly Within A Single Application Using{" "}
                    <span className="text-primary-dark">AssistMe</span>.
                  </h1>
                  <p className="mb-6">
                    AssistMe provides your Google Mail and GitHub notifications (Issues & Pull Requests)
                    directly within it. Therefore, you don't need to open your Gmail or GitHub
                    separately. You can also manage your Gmail and GitHub notifications
                    within AssistMe.
                  </p>
                  <ul className="list-unstyled list-check mb-8">
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Start working on your other tasks instead of wasting time on
                        checking your Gmail or GitHub as AssistMe has got you covered!
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Let's Manage your timeline, schedule and appointments from your Gmail
                        and GitHub notifications
                      </span>
                    </li>
                    <li>
                      <IoMdCheckmark size={25} strokeWidth={1.5} />
                      <span>
                        Use prioritization to make your GMail and GitHub notifications
                        based on pre-defined rules.
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
                    AssistMe Use Cases
                  </p>
                  <h1
                    className="text-white mb-0"
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                  >
                    Manage Your Time & Tasks Efficiently With AssistMe,
                    The Future Of AIO (All In One) Specialized Writing Tool
                    is Here
                  </h1>
                </div>
              </div>
            </div>
            <div className="row justify-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gx-8 gy-14">
              <div className="col" data-aos="fade-up-sm" data-aos-delay="150">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <TbNote size={30} />
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Organize Your Daily Tasks</h5>
                    <p className="mb-0">
                      Writing your To-Do tasks with AssistMe, make you stand out
                      in your tasks as you are getting a complete package
                      of features including AI-powered content generation
                      and Markdown support.
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
              {/* Change the logo */}
              <div className="col" data-aos="fade-up-sm" data-aos-delay="200">
                <div className="d-flex flex-column justify-between gap-6 h-full">
                  <div className="icon w-14 h-14 flex-shrink-0 d-flex align-center justify-center rounded-3 p-2 border bg-gradient-3 text-primary-dark border-white border-opacity-10">
                    <TbLayoutDashboard size={35} strokeWidth={1} />
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Customized Dashboard</h5>
                    <p className="mb-0">
                      It's your application, and everything within it is owned by YOU!
                      Customize the dashboard as you like. You have the full accessibility
                      to modify them as you want!
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
                    <TbDeviceIpadMinus size={27} />
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Admin Panel</h5>
                    <p className="mb-0">
                      If you are thinking about using AssistMe in your organization, then
                      you are more than welcome, as you can customize the features and
                      accessibility depending on your need. You can also apply user role-based
                      features.
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
                    <TbDeviceDesktopSearch size={30} />
                  </div>
                  <div className="content flex-grow-1">
                    <h5 className="text-white mb-4">Devices Synchronization</h5>
                    <p className="mb-0">
                    As this is a cloud based web application, your changes
                    will be available on all across your devices
                    and each of the devices get updated real-time.
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
                    <h5 className="text-white mb-4">Grading</h5>
                    <p className="mb-0">
                      You can use AssistMe as your default grading application
                      like Google Spreadsheet or Microsoft Application, or any kind
                      of other applications relevant to these tasks.
                      The bottomline is that you don't need to use different application
                      for these types of tasks anymore from now on!
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
                    <h5 className="text-white mb-4">GMail Integration</h5>
                    <p className="mb-0">
                      You don't need to open your email client, or browser to check
                      for your new Google emails anymore! You can check them directly
                      from our application. You can also create your own custom
                      notification system for each sender.
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
