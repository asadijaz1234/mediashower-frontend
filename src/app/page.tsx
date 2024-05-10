import { HomePageServer } from "~/views/home";
import { getRandomHeroActiveIndex } from "~/app/actions";
import { BlogPostApi } from "~/app/api/api-helpers";
 async function homePageServerSideProps() {
  const activeIndex = await getRandomHeroActiveIndex();
  const posts = await BlogPostApi.list({ limit: 3 });

  return {
    props: {
      activeIndex,
      posts,
    },
  };
}

export const metadata = {
  title: "All-In-One Marketing Content Platform | Media Shower",
  description:
    "Media Shower: The ultimate solution for marketing teams. Create, manage, and scale your content effortlessly. Transform from overworked to overjoyed today.",
};

export default function Home({
  activeIndex,
  posts,
}: {
  activeIndex: number;
  posts: any;
}) {
  return <HomePageServer activeIndex={activeIndex} posts={posts} />;
}
