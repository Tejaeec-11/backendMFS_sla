import { useRef } from 'react'
import profile from '../assets/hero.png'

const SrollingToTheContent = () => {
const homeRef = useRef(null)
const aboutRef = useRef(null)
const contectRef = useRef(null)
const skillsRef = useRef(null)

//saves input on blur and hides/shows a box.
const handleClick = (datas) => {
datas.current.scrollIntoView({
behavior: "smooth",
block: "start"
})
}

const handleTop = () => {
homeRef.current.scrollIntoView({
behavior: "smooth",
block: "start"
})
}

return (
<>
{/*NavBar */}
<div className="px-5 pt-24">
<nav className="bg-blue-500 fixed top-3 left-5 right-5 z-50 shadow-2xl text-white rounded-2xl p-3 flex justify-between items-center gap-5">
<div className="mx-5">Logo</div>
<div className="flex gap-5 mx-5 flex-wrap">
      <button onClick={() => handleClick(homeRef)}>Home</button>
      <button onClick={() => handleClick(aboutRef)}>About My Profile</button>
      <button onClick={() => handleClick(contectRef)}>Contact Me</button>
      <button onClick={() => handleClick(skillsRef)}>Skills</button>
</div>
</nav>
</div>

{/* Home */}
<section className="p-10 scroll-mt-24" ref={homeRef}>
     <h2 className="text-2xl mb-10 font-sans">My Home</h2>
<div className="flex gap-5 justify-start items-center">
      <img src={profile} className="w-[30%] rounded-full" alt="Profile" />
<div className="w-[60%]">
     <h2 className="text-4xl mb-5">Objectives</h2>
     <p className="mb-5">Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
     <p className="mb-5">Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.My strengths are problem-solving, quick learning and technical communication.I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.Thank you.</p>
     <p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
</div></div>
</section>

{/* About */}
<section className="p-10 scroll-mt-24" ref={aboutRef}>
     <h2 className="text-2xl mb-10 font-sans">About My Profile</h2>
<div className="flex gap-5 justify-start items-center">
     <img src={profile} className="w-[30%] rounded-full" alt="Profile" />
<div className="w-[60%]">
     <h2 className="text-4xl mb-5">Objectives</h2>
     <p className="mb-5">Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
     <p className="mb-5">Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.My strengths are problem-solving, quick learning and technical communication.I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.Thank you.</p>
     <p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
</div></div>
</section>

{/* Contact */}
<section className="p-10 scroll-mt-24" ref={contectRef}>
     <h2 className="text-2xl mb-10 font-sans">Contact</h2>
<div className="flex gap-5 justify-start items-center">
     <img src={profile} className="w-[30%] rounded-full" alt="Profile" />
<div className="w-[60%]">
     <h2 className="text-4xl mb-5">Objectives</h2>
     <p className="mb-5">Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
     <p className="mb-5">Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.My strengths are problem-solving, quick learning and technical communication.I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.Thank you.</p>
     <p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
</div></div>
</section>

{/* Skills */}
<section className="p-10 scroll-mt-24" ref={skillsRef}>
     <h2 className="text-2xl mb-10 font-sans">Skills</h2>
<div className="flex gap-5 justify-start items-center">
     <img src={profile} className="w-[30%] rounded-full" alt="Profile" />
<div className="w-[60%]">
     <h2 className="text-4xl mb-5">Objectives</h2>
     <p className="mb-5">Passionate Full Stack Developer and Technical Trainer with hands-on experience in MERN stack and real-world application development. Seeking a challenging opportunity to leverage my technical skills, problem-solving abilities and continuous learning mindset to build scalable applications and contribute to organizational growth.</p>
     <p className="mb-5">Good morning. I am a Full Stack Developer and Technical Trainer with hands-on experience in React.js, Node.js, Express.js, MongoDB, SQL and JavaScript.Currently, I am working at SLA Institute, where I train students in full stack development through practical, project-based learning.Along with training, I have worked on real-time projects, including SIVELS Finance and SSK ERP. My responsibilities include frontend development, API integration, authentication, debugging and business workflow implementation.My strengths are problem-solving, quick learning and technical communication.I am looking for an opportunity where I can utilize my development experience, contribute to real-world projects and grow professionally.Thank you.</p>
     <p>My technical skills include HTML, CSS, JavaScript, TypeScript, React.js, Angular, Node.js, Express.js, MongoDB, SQL, Java and Python.</p>
</div></div>
</section>

<div className="p-5">
<button onClick={handleTop}className="bg-blue-500 text-white p-3 rounded-lg">Click to Top</button>
</div>
</>
  )
}

export default SrollingToTheContent
