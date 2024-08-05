export default function BlogPara({ className, children }) {
  return (
    <p className={`text-sm py-4 leading-loose text-black ${className}`}>
      {children}
    </p>
  );
}
