"use client";
import blogs from "@/blogs";
import BlogAuthorDetail from "@/components/ui/blogAuthorDetail/blogAuthorDetail";
import BlogBannerImage from "@/components/ui/blogBannerImage/blogBannerImage";
import BlogHeading from "@/components/ui/blogHeading/blogHeading";
import BlogInfo from "@/components/ui/blogInfo/blogInfo";
import BlogPara from "@/components/ui/blogPara/blogPara";
import BlogTitle from "@/components/ui/blogTitle/blogTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RelatedArticles from "@/components/ui/relatedArticles/relatedArticles";
import Subscribe from "@/components/ui/subscribe/subscribe";
import SubscriberForm from "@/components/ui/subscriberForm/subscriberForm";
import content from "@/content/content";
import { useAppContext } from "@/context/appContext";
import { notFound } from "next/navigation";

// export async function generateStaticParams() {
//   return blogs.map((post) => ({
//     slug: post.slug,
//   }));
// }

export default function Home({ params }) {
  const { isSubscribed } = useAppContext();
  const post = blogs.find((blog) => blog.slug === params.slug);
  const cut_off = isSubscribed ? post.data.length : post.cut_off;

  const related_articles = blogs.filter((blog) =>
    post.related_articles.includes(blog.slug)
  );

  console.log(related_articles);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section
        className={`w-full md:w-3/5 lg:w-2/3 px-8 md:px-0 mx-auto pt-16 pb-16 md:pt-32 max-w-7xl ${
          isSubscribed && "md:pb-32"
        }`}
      >
        <BlogInfo date={post.published_at} read_time={post.read_time} />
        <BlogTitle title={post.title} />
        <BlogAuthorDetail name={post.author} img={post.author_image} />
        <BlogBannerImage url={post.banner_image} />
        {post.data.slice(0, cut_off).map((item, index) => {
          if (item.type === "p") {
            return (
              <BlogPara
                key={index}
                className={`${item.classname} ${
                  !isSubscribed &&
                  index === cut_off - 1 &&
                  "text-nl_blog_para blur-sm"
                }`}
              >
                {item.content}
              </BlogPara>
            );
          } else {
            return <BlogHeading key={index}>{item.content}</BlogHeading>;
          }
        })}
        {isSubscribed && <RelatedArticles articles={related_articles} />}
      </section>
      {!isSubscribed && (
        <section className="bg-gradient-to-t	from-nl_sec_background to-white px-8 pt-4 pb-16 md:py-16 md:px-16 md:pb-32">
          <div className="w-full md:w-4/5 lg:w-3/5 mx-auto">
            <h3 className="text-4xl text-nl_background md:text-center">
              {content.archivePage.formSection.heading}
            </h3>
            <p className="text-sm mt-4 md:text-center md:w-4/5 md:mx-auto">
              {content.archivePage.formSection.description}
            </p>
            <SubscriberForm formClasses="w-5/6 md:w-3/4 lg:w-3/5 flex flex-col gap-2 mt-8 md:mx-auto" />
            {/* <form className="w-5/6 md:w-3/4 lg:w-3/5 flex flex-col mt-8 md:mx-auto">
              <div className="flex gap-2 justify-center">
                <Input
                  type="email"
                  className="focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                  placeholder="Enter email"
                />
                <Button className="rounded-none" type="submit">
                  Join Free
                </Button>
              </div>
              <span className="text-[12px] mt-4">
                100% free. No spam. Unsubscribe anytime
              </span>
            </form> */}
          </div>
        </section>
      )}
    </>
  );
}
