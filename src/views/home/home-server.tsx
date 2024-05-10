import { HomePage } from "./home";

export const HomePageServer = ({
  activeIndex,
  posts,
}: {
  activeIndex: number;
  posts: any;
}) => {
  return <HomePage activeIndex={activeIndex} posts={posts} />;
};
