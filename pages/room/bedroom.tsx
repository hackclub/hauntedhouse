const Bedroom = () => {
  //   return <img src="/IMG_0025.png" className="w-screen h-screen bg-center" />;
  return (
    <div>
      <img
        src="/IMG_0025.png"
        className="w-full overflow-hidden object-cover h-full absolute"
      />
      <div className="max-h-36 h-[13%] w-2 bg-red-500 absolute z-99 mt-[30vh] ml-[50%]"></div>
      <div className="max-h-16 max-w-12 h-[13%] w-[13%] bg-red-100 absolute z-99 ml-[70%] mt-[20vh]"></div>
    </div>
  );
};

export default Bedroom;
