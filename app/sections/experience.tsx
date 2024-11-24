"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { useHasMounted, useSectionInView } from "../common/lib/hooks";
import SectionHeading from "../components/shared/section-heading";
import { experiencesData } from "../common/lib/data";
import SectionDivider from "../components/shared/section-divider";

export default function Experience() {
  const { ref } = useSectionInView("experience");
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="experience"
      ref={ref}
      className="dark:bg-darkBg w-full scroll-mt-20 dark:text-white"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline animate={false}>
        {ihasMounted &&
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                  display: theme === "dark" ? "none" : "block",
                }}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                  color: "#ffffff",
                  display: theme === "dark" ? "none" : "flex",
                }}
              >
                <h3 className="font-semibold capitalize text-gray-100 dark:text-white">
                  {item.title}
                </h3>
                <p className="!mt-0 font-normal text-gray-300 dark:text-gray-400">
                  {item.location}
                </p>
                <p className="!mt-1 !font-normal text-gray-500 dark:text-gray-500">
                  {item.description}
                </p>
                <p
                  className={`mt-2 text-sm font-bold ${
                    theme === "light" ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {item.date}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
      <div className="dark:bg-darkBg flex w-full justify-center">
        <SectionDivider />
      </div>
    </section>
  );
}
