

const Bedroom = () => {
  //   return <img src="/IMG_0025.png" className="w-screen h-screen bg-center" />;
  return (
    <div>
      <img
        src="/IMG_0025.png"
        className="w-full overflow-hidden object-cover h-full absolute"
      />

      <a href="/rooms/library1">
        <img
          src="/scaryportrait.jpeg"
          className="h-56 brightness-50 absolute z-99 left-[50%] top-[20%] animate-pulse"
        />
      </a>
    </div>
  );
};

export default Bedroom;
