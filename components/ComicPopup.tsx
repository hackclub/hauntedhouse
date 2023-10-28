export const ComicPopup = ({ text }: { text: string }) => {
  return (
    <div
      className="bg-beige shadow font-comic p-4 md:p-8"
      style={{
        boxShadow: "0.5rem 0.5rem black",
      }}
    >
      <span className="font-comic italic font-black text-black text-xl">
        {text}
      </span>
    </div>
  );
};
