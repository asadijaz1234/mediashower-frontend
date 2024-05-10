import { getRandomHeroActiveIndex } from "~/app/actions";
import { BlogPostApi } from "~/app/api/api-helpers";
import { HomePage } from "./home";

export const HomePageServer = async () => {
  const activeIndex = await getRandomHeroActiveIndex();
  const posts = await BlogPostApi.list({ limit: 3 });

  return <HomePage activeIndex={activeIndex} posts={posts} />;
};
