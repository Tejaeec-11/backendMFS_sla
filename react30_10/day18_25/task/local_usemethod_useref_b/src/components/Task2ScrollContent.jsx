import { useRef } from "react";

const Task2ScrollContent = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (data) => {
    data.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <h2>Scroll Navigation</h2>
      <nav>
        <button onClick={() => handleScroll(homeRef)}>Hom</button>
        <button onClick={() => handleScroll(aboutRef)}>About</button>
        <button onClick={() => handleScroll(contactRef)}>Contact</button>
      </nav>

      <section ref={homeRef} style={{ height: "500px", backgroundColor: "lightblue" }}>
      <h2>Home Section</h2>
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui fugiat laborum, autem sapiente expedita debitis atque molestias, dolorem neque iusto repellat a perspiciatis, adipisci quod sunt quam quis asperiores impedit! Quidem quas quos sequi neque eos illo? Nostrum, dignissimos! Repudiandae porro sunt ipsam accusamus quia dolore, laudantium praesentium amet.</p> */}
      </section>

      <section ref={aboutRef} style={{ height: "500px", backgroundColor: "lightgreen" }}>
      <h2>About Section</h2>
      </section>

      <section ref={contactRef} style={{ height: "500px", backgroundColor: "lightpink" }}>
      <h2>Contact Section</h2>
      </section>

      <button onClick={() => window.scrollTo({top: 0,behavior: "smooth",})}>Back to Top</button>
    </div>
  );
};
export default Task2ScrollContent