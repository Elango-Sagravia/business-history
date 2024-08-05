export default function BlogInfo({ date, read_time }) {
  return (
    <div className="flex items-center gap-2 py-4">
      <p className="text-[12px] font-bold uppercase">{date}</p>
      <p className="rounded-full bg-black w-[5px] h-[5px]"></p>
      <p className="text-[12px] font-bold uppercase">{read_time} READ</p>
    </div>
  );
}
