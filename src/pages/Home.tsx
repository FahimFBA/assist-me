import { Button } from "@/components/ui/button";
import { RefreshCcwDot, Mails, Github, CalendarCheck, ActivitySquare, ShieldCheck, FolderLock, ShieldPlus, TimerOff } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 text-center">
            {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"> */}

            {/* 
            text-2xl is the default font size.
            sm:text-3xl will be applied on small screens and above (sm: breakpoint).
            md:text-4xl will be applied on medium screens and above (md: breakpoint).
            lg:text-5xl will be applied on large screens and above (lg: breakpoint). */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Manage Your Tasks and Emails in One Place
              {/* <br />
              <br />
              Effortlessly! */}
            </h1>
            {/* <br />
            <br /> */}
            <br />
            <p className="text-gray-500 mt-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Effortlessly streamline Your Day with Integrated Email and Todo List Management!
            </p>
            <br />
            <Link to="/signup">
              <Button className="mt-4" variant="secondary">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <CalendarCheck className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">To-Do List</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Add tasks to your to-do list so that you never forget them.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Mails className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">GMail Integration</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Integrate your Google account and check, send and receive your emails.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <RefreshCcwDot className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Synchronization</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Synchronize your data across all your devices.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <ActivitySquare className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Activity Log</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Keep track of your activity with the activity log.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Secured APIs</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  All our APIs are secured with JWT tokens, so you don't have to worry about your data.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FolderLock className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Data Encryption</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  All your data is encrypted with SCRYPT encryption.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldPlus className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Verification System</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Strong email verification system to prevent spam.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <TimerOff className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">IP Based Login Throttling</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Login throttling to prevent brute force attacks.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Github className="h-12 w-12" />
                <h3 className="text-lg font-bold mt-4">Open Source</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Our code is open source and available on GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Let's Get Started...
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mt-4">
              {/* To get started with our documentation, simply click on the "Docs"
              link in the navigation menu. You can search for specific topics or
              browse through the categories. */}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
