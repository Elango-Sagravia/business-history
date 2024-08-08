import Image from "next/image";

const BlogContentImage = ({
  url,
  alt,
  className,
  width = "w-full",
  height = "h-auto",
}) => {
  return (
    <div className={`${width} ${height} py-8`}>
      <img src={url} alt={alt} className={`${className}`} />
    </div>
  );
};

export default BlogContentImage;
