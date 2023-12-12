const AboutVideo = () => {
  return (
    <div className="relative w-[40%] h-[500px] overflow-hidden rounded-[10px] ">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://vod-progressive.akamaized.net/exp=1702392372~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3583%2F15%2F392916062%2F1665822357.mp4~hmac=92b22e5d98c5a5595d3b5a3cf54701b490e331357a1ae58fd4fc8cf932650530/vimeo-prod-skyfire-std-us/01/3583/15/392916062/1665822357.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50 flex items-center justify-center ">
          <h1 className="text-white z-[100px]">valeran pedror e</h1>
        </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="absolute inset-0  flex items-center justify-center p-[20px]">
          <div className="w-[94%] h-[80%] text-[white] flex items-center justify-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            numquam omnis sapiente. Reiciendis, cumque consectetur odit aperiam
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
