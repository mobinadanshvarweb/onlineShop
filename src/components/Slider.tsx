const Slider = () => {
  const src = [
    { id: "1", src: "slider (1).gif" },
    { id: "2", src: "slider (1).jpg" },
    { id: "3", src: "slider (2).jpg" },
    { id: "4", src: "slider (3).jpg" },
    { id: "5", src: "slider (4).jpg" },
    { id: "6", src: "slider (5).jpg" },
    { id: "7", src: "slider (6).jpg" },
    { id: "8", src: "slider (7).jpg" },
    { id: "9", src: "slider (8).jpg" },
    { id: "10", src: "slider (9).jpg" },
  ];
  return (
    <div className="w-full border overflow-x-hidden flex relative">
      {src.map((image) => {
        return (
          <img
            key={image.id}
            src={`/${image.src}`}
            className="h-screen object-cover lg:h-auto"
          />
        );
      })}
      <div className="flex gap-1 absolute bottom-2 left-[50%] translate-x-[-50%] px-10">
        {src.map((item) => {
          return (
            <span
              key={item.id}
              className="w-2 h-2 rounded-full bg-white cursor-pointer"
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
