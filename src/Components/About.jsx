export default function About() {
  return (
    <div className="my-16 px-6 sm:px-12 lg:px-20 bg-gray-50 py-20">
      <h1 className="text-center pb-2 mb-6 text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-800">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12 md:text-xl">
        {/* Left Section */}
        <div className="flex-1 text-gray-700 leading-relaxed space-y-4">
          <p>
            Assalamu Assalam, I am Moshiur Islam, and I started my programming
            journey alongside my diploma. Initially, programming seemed like
            just another skill to learn, but over time, it became my passion. I
            genuinely enjoy writing code and solving complex problems, and each
            new challenge excites me even more.
          </p>
          <p>
            Apart from programming, I love playing games. Gaming is not just a
            source of entertainment for me but also a way to explore creativity
            and find inspiration. Living in a village keeps me connected to
            nature, bringing peace and balance to my thoughts and daily life.
          </p>
          <p>
            Beyond programming and gaming, I am always curious to learn new
            things and enhance my skills. I believe in continuous growth and am
            determined to achieve bigger dreams as I move forward in my journey.
          </p>
        </div>
      </div>
    </div>
  );
}
