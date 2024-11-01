"use client";

// Import CSS
import "../style/index.css";
// Import other pages
import About from "./about";
// Import other things that require
import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  Tabs,
  Modal,
  Button,
  Accordion,
  Flowbite,
} from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const customTheme: CustomFlowbiteTheme = {
  tabs: {
    base: "flex flex-col gap-2",
    tablist: {
      base: "flex text-center",
      variant: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline:
          "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
        pills:
          "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
        fullWidth:
          "grid w-full grid-flow-col divide-x divide-gray-200 text-sm font-medium dark:divide-gray-700 dark:text-gray-400 rounded-lg gap-2",
      },
      tabitem: {
        base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-transparent disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
        variant: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-cyan-600 text-white",
              off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "ml-0 flex w-full rounded-lg first:ml-0",
            active: {
              on: "active rounded-lg bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
              off: "rounded-lg bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabitemcontainer: {
      base: "",
      variant: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: "",
      },
    },
    tabpanel: "py-3",
  },
  accordion: {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: {
        off: "rounded-lg border",
        on: "border-b",
      },
    },
    content: {
      base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180",
        },
      },
      base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-0 focus:ring-transparent dark:hover:bg-gray-800",
        on: "bg-transparent dark:bg-transparent",
      },
      heading: "",
      open: {
        off: "dark:text-white",
        on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
      },
    },
  },
};

const About_Nice: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="min-h-screen">
        <Breadcrumb
          aria-label="Default breadcrumb"
          className="m-2 rounded-3xl bg-slate-600 px-3 py-2 drop-shadow-md"
        >
          <BreadcrumbItem className="ml-1">
            <Link
              to="/"
              className="text-slate-400 transition-colors hover:text-white hover:transition-colors"
            >
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link
              to="/about"
              className="text-slate-400 transition-colors hover:text-white hover:transition-colors"
            >
              About
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span className="text-slate-300">Nice</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <div className="animate__animated animate__fadeInDown animate__faster mx-6 mt-5 rounded-xl bg-gray-800 bg-opacity-75 pb-32 pt-16 text-center drop-shadow-xl">
          <h1 className="pb-9 text-2xl drop-shadow-md">About Me!</h1>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Avatar size="xl" alt="placeholder" />
            <p className="text-xl">Hello!</p>
          </div>
          <div className="mt-10 overflow-x-auto mobile:mx-3 desktop:mx-36">
            <Flowbite theme={{ theme: customTheme }}>
              <Tabs
                aria-label="Full width tabs"
                variant="fullWidth"
                className="dark"
              >
                <Tabs.Item active title="About">
                  Soon
                </Tabs.Item>

                <Tabs.Item title="FAQ">
                  <Accordion collapseAll>
                    <Accordion.Panel>
                      <Accordion.Title>Soon</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Asperiores pariatur qui voluptatum repudiandae
                          neque accusantium obcaecati dolorem facere, soluta
                          rerum aperiam ad excepturi repellendus blanditiis illo
                          ullam corporis laboriosam libero!
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>Soon</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Deleniti alias, enim beatae officiis ullam
                          libero non dolores dolorem blanditiis eos iste eaque
                          totam veniam, laboriosam ipsa repudiandae eum
                          voluptatem harum?
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                      <Accordion.Title>Soon</Accordion.Title>
                      <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Deleniti alias, enim beatae officiis ullam
                          libero non dolores dolorem blanditiis eos iste eaque
                          totam veniam, laboriosam ipsa repudiandae eum
                          voluptatem harum?
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </Tabs.Item>

                <Tabs.Item title="Contacts">
                  <div className="mx-20 mt-10 flex flex-wrap justify-center gap-20 text-center text-xl">
                    <Link
                      to="https://www.facebook.com/Tanakorn51213"
                      className="my-5 flex gap-3"
                      target="_blank"
                    >
                      <FaFacebook className="h-7 w-5" />
                      Facebook
                    </Link>
                    <Link
                      to="https://www.instagram.com/gamemine098/"
                      className="my-5 flex gap-3"
                      target="_blank"
                    >
                      <FaInstagram className="h-7 w-5" />
                      Instagram
                    </Link>
                    <Link
                      to="https://www.youtube.com/@Gamemine098"
                      className="my-5 flex gap-3"
                      target="_blank"
                    >
                      <FaYoutube className="h-7 w-5" />
                      Youtube
                      <span className="cursor-pointer">(Gaming)</span>
                    </Link>
                    <Link
                      to="https://www.youtube.com/@NiceLyneTH"
                      className="my-5 flex gap-3"
                      target="_blank"
                    >
                      <FaYoutube className="h-7 w-5" />
                      Youtube
                      <span className="cursor-pointer">(Animation, Art)</span>
                    </Link>
                    <Link
                      to="https://github.com/Gamemine098"
                      className="my-5 flex gap-3"
                      target="_blank"
                    >
                      <FaGithub className="h-7 w-5" />
                      Github
                    </Link>
                    <Link
                      to="https://bsky.app/profile/nicelyne.bsky.social"
                      className="my-5 flex gap-3"
                      target="_blank"
                    >
                      <FaBluesky className="h-7 w-5" />
                      Bluesky
                    </Link>
                    <a
                      className="my-5 flex cursor-pointer gap-3"
                      onClick={() => setOpenModal(true)}
                    >
                      <FaDiscord className="h-7 w-5" />
                      Discord
                    </a>
                    <Link
                      to="https://www.twitch.tv/gamemine098"
                      className="my-5 flex gap-3"
                      target="_blank"
                    >
                      <FaTwitch className="h-7 w-5" />
                      Twitch
                    </Link>
                    <Link to="" className="my-5 flex gap-3">
                      <img
                        loading="lazy"
                        src="/toyhouse.svg"
                        alt="Toyhouse Icon"
                        className="h-7 w-5"
                      />
                      Toyhouse (Soon)
                    </Link>

                    {/* modal */}
                    <Modal
                      show={openModal}
                      size="md"
                      onClose={() => setOpenModal(false)}
                      popup
                      className="dark"
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <span className="text-white">gamemine098</span> and{" "}
                            <span className="text-white">nicelyne_th</span>
                          </h3>
                          <div className="flex justify-center gap-4">
                            <Button
                              color="gray"
                              onClick={() => setOpenModal(false)}
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </Tabs.Item>

                <Tabs.Item title="Portfolios">Soon</Tabs.Item>
              </Tabs>
            </Flowbite>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default About_Nice;
