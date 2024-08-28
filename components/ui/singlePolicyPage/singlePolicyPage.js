"use client";
import HTMLContent from "../singleBlog/myComponent";

const SinglePolicyPage = ({ policy }) => {
  return (
    <HTMLContent
      contentString={policy.content}
      blogCutOff={policy.content.length + 1}
      enableCutOff={false}
    />
  );
};

export default SinglePolicyPage;
