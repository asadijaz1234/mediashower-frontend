import type { GetServerSideProps } from "next";
import { HomePageServer } from "~/views/home"; 
import { getRandomHeroActiveIndex } from "~/app/actions"; 
import { BlogPostApi } from "~/app/api/api-helpers"; 

export async function getServerSideProps(): Promise<
  GetServerSideProps<{ activeIndex: any; posts: any }>
> {
  const activeIndex = await getRandomHeroActiveIndex();
  const posts: any = await BlogPostApi.list({ limit: 3 }); 
  return {
    // @ts-ignore
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
  activeIndex: any;
  posts: any;
}) {
  return <HomePageServer activeIndex={activeIndex} posts={posts} />;
}
