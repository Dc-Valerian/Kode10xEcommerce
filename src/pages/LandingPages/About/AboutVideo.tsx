const AboutVideo = () => {
    return (
      <div className="relative w-[40%] h-[500px] overflow-hidden rounded-[10px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="https://player.vimeo.com/external/443931221.sd.mp4?s=f27c4f3b90fa98d2c5ee5fd9fcfbdfa5c867fe7a&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        
        </video>
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
  