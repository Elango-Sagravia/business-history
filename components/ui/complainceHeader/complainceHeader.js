function ComplainceHeader({ title, date }) {
  return (
    <div className="bg-nl_sec_background">
      <div className="w-full md:w-4/5 lg:w-2/3 px-4 md:px-0 mx-auto pb-16 pt-16 max-w-7xl">
        <h1 className="text-4xl text-nl_background">{title}</h1>
        <p className="text-sm mt-4">Updated: {date}</p>
      </div>
    </div>
  );
}

export default ComplainceHeader;
