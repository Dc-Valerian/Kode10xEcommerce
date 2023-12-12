import SlidingBorderButton from "../../../components/Props/ButtonProps";

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

        <div className="absolute inset-0  flex items-center justify-center p-[20px] flex-col">
          <div className="w-[100%] text-center h-[50%] text-[white] flex items-center justify-center">
            The wrist watch is more than just a way to tell time - it's a symbol
            of individuality, taste, and personal style. A wrist watch can tell
            a story about its owner - their passions, interests, and
            personality. The choices we make in a wrist watch can reveal a lot
            about who we are. For some, a wrist watch is a fashion accessory,
            for others it's a functional tool, and for many, it's a precious
            heirloom or a cherished gift.
          </div>
          <SlidingBorderButton direction="top" text="Get One Now!" />
        </div>
      </div>
    </div>
  );
};

export default AboutVideo;
