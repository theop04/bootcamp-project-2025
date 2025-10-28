import React from "react";

export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content: React.ReactNode;
}

const blogs: Blog[] = [
  {
    title: "How to Get Rich Guaranteed... in 40 Years",
    date: "2025-10-14",
    description: "A step-by-step guide to building generational wealth",
    image: "/images/upward_stocks.jpg",  //this path might be wrong
    imageAlt: "Upward stocks image",
    slug: "how-to-get-rich-guaranteed",
    content: (
      <>
        <p>
          If you want to build real wealth, think in decades and be boring about
          it. Assume a 7% annual return after inflation and invest consistently.
          For example, investing <strong>$500 per month</strong> at 7% (real)
          gives you roughly:
        </p>
        <ul>
          <li>After 10 years: about <strong>$86,542</strong></li>
          <li>After 15 years: about <strong>$158,481</strong></li>
          <li>After 20 years: about <strong>$260,463</strong></li>
          <li>After 25 years: about <strong>$405,036</strong></li>
          <li>After 30 years: about <strong>$609,985</strong></li>
          <li>After 35 years: about <strong>$900,527</strong></li>
          <li>After 40 years: about <strong>$1,312,407</strong></li>
        </ul>
        <p>
          Those numbers are the result of steady saving plus compound growth.
          Imagine what they could look like if you invested more than $500/month.
          A Roth IRA is a powerful vehicle here because qualified withdrawals are
          tax free, which helps the long term math. The practical levers you
          control are your savings rate and your time horizon. Try to live below
          your means and direct as large a share of your income as you reasonably
          can into investments. Even moving from saving 10% of pay to 20% makes a
          huge difference over decades.
        </p>
      </>
    ),
  },
  {
    title: "Understanding TypeScript Types",
    date: "2025-10-10",
    description:
      "Learn how TypeScript types help you write safer and cleaner code.",
    image: "/images/ts-types.png", //this path might be wrong
    imageAlt: "TypeScript types illustration",
    slug: "understanding-typescript-types",
    content: (
      <>
        <p>
          TypeScript is not a magic tool, it is a practical one. It helps you
          state what your code expects so you get fewer surprises at runtime.
          Instead of guessing whether a value is a string or an object, types make
          those expectations explicit.
        </p>

        <p>
          At first types feel like extra typing, but they save time later. You
          catch bugs earlier, your editor gives better suggestions, and
          collaborating with others becomes smoother because the code communicates
          its intent. After a little practice, writing with types starts to feel
          natural rather than annoying.
        </p>
      </>
    ),
  },
];

export default blogs;
