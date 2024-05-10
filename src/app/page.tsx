import { HomePage } from "~/views/home";
import HomePageServer from "~/views/home/home-server";

export const metadata = {
  title: "All-In-One Marketing Content Platform | Media Shower",
  description:
    "Media Shower: The ultimate solution for marketing teams. Create, manage, and scale your content effortlessly. Transform from overworked to overjoyed today.",
};

export default function Home() {
  return <HomePageServer />;
}
