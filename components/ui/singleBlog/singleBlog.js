"use client";

import { useAppContext } from "@/context/appContext";
import BlogBannerImage from "../blogBannerImage/blogBannerImage";
import BlogInfo from "../blogInfo/blogInfo";
import BlogTitle from "../blogTitle/blogTitle";
import "./styles.css";
import HTMLContent from "./myComponent";
import content from "@/content/content";
import SubscriberForm from "../subscriberForm/subscriberForm";
import RelatedArticles from "../relatedArticles/relatedArticles";

const SingleBlog = ({ blog, relatedArticles }) => {
  console.log(relatedArticles);
  const { isSubscribed } = useAppContext();
  console.log("object :>> ", blog);
  return (
    <>
      <section
        className={`w-full md:w-4/5 lg:w-2/3 px-4 md:px-0 mx-auto pt-16 pb-16 md:pt-32 max-w-7xl ${
          isSubscribed && "md:pb-32"
        }`}
      >
        <BlogInfo date={blog.publishedAt} read_time={blog.readTime} />
        <BlogTitle title={blog.title} />
        {/* <BlogBannerImage url={blog.coverImage} /> */}
        <div className="mt-10">
          <HTMLContent
            contentString={blog.content}
            blogCutOff={!isSubscribed ? blog.cutOff : blog.content.length}
            enableCutOff={true}
          />
        </div>
        {isSubscribed && relatedArticles.length > 0 && (
          <RelatedArticles articles={relatedArticles} />
        )}
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
            <SubscriberForm formClasses="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-2 mt-8 md:mx-auto" />
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
};

export default SingleBlog;
