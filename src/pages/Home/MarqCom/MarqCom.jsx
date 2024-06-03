import Marquee from "react-fast-marquee";
const MarqCom = () => {
  return (
    <div className="border flex items-center justify-center rounded-lg mt-3">
      <button className="btn btn-accent">Latest News:</button>
      <div>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          minima facilis in. Nulla quidem voluptatum culpa mollitia molestiae
          odit! Alias.
        </Marquee>
      </div>
    </div>
  );
};

export default MarqCom;
