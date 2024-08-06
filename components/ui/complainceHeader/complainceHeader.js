function ComplainceHeader({ title, date }) {
  return (
    <div className="px-4 md:px-16 py-16 bg-nl_sec_background">
      <h1 className="text-4xl text-nl_background">{title}</h1>
      <p className="text-sm mt-4">Updated: {date}</p>
    </div>
  );
}

export default ComplainceHeader;
