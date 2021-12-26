import { useEffect,  useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import AOS from 'aos';
import "aos/dist/aos.css";
import Languages from './components/Languages';
import Frameworks from './components/Frameworks';
import Db from './components/Db'


function App() {

  
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);

  const [isDark,setDark]=useState(true);
  return (
    <div className={isDark ? 'dark':'' } >
      <div className="dark:bg-slate-800">
      <Navbar isDark={isDark} setDark={setDark}/>
      <div className="dark:bg-slate-800 dark:text-white">
        {/* <button onClick={() =>{setDark(!isDark)}}>dark MOde</button> */}
        <img data-aos="fade-up" className="h-96 p-6 border  border-8 border-green-500 m-10 rounded-3xl mx-auto" src="././my-photo.jpeg"></img>


        <h1 data-aos="fade-up" className="text-center text-5xl mb-10 ">Hi! My name is Saaransh Shandilya<span role="img" aria-label="wave">👋</span></h1>
        <p data-aos="fade-up" className="text-center dark:text-teal-400 text-2xl leading-8">I am a full stack web developer who can work with a lot of tools outside the web development.
        </p>
        <p data-aos="fade-up" className="text-center dark:text-teal-400 text-2xl leading-8">Welcome to my corner of the web!</p>
        <p data-aos="fade-up" className="text-center dark:text-teal-400 text-2xl leading-8 pb-10">I am glad that you are here.</p>
        <div id="about" className="bg-slate-200 p-5 shadow-inner dark:bg-cyan-900">
          <h1 data-aos="flip-left" id="#about" className="mt-20 ml-20 text-left font-bold dark:text-emerald-500 text-blue-600 text-4xl">ABOUT ME</h1>
          <div data-aos="flip-left" className="mt-10 ml-20 mr-10 mb-20 text-2xl"><p>I am an aspiring young acheiver who is zelous enough to overcome whatever is thrown at him and reach the zenith of the work.</p> <p>I love challenges and solving critical conditions in a given time. Other than that, I can work in multiple fields and manage to produce an output by whatever is thrown at me.</p>
          </div>
        </div>
        <div id="quali" className="bg-green-200 p-0.5  dark:bg-stone-800 shadow-2xl">
          <h1 data-aos="flip-up"  className="mt-20 ml-20 mb-10 text-left font-bold text-pink-600 text-4xl">ACADEMIC QUALIFICATIONS</h1>
          <div className="relative">
            <div data-aos="fade-up" className="bg-green-400 dark:bg-sky-900  border-l-8 border-l-green-600 border-b-8 border-b-green-600 text-2xl text-center  m-20 ml-40 p-10 w-1/3 border rounded-lg">
              <p className="text-white font-bold">Pursuing Bachelor in Technology from</p>
              <p className="dark:text-teal-300">G.D. Goenka University, Gurugram, Haryana</p>
              <p className="dark:text-teal-300">Currently in 6th Semester</p>
              <p className="dark:text-teal-300">With a GPA of 9.3</p>
            </div>

            <div data-aos="fade-up" className="bg-red-400 text-2xl dark:bg-sky-900 border-b-8 border-r-8 border-b-red-600 border-r-red-600 text-center ml-auto m-20 mt-10 w-1/3 p-10 border rounded-lg">
              <p className="text-white font-bold">Passed 12th Class from</p>
              <p className="dark:text-teal-300">Colonel's Central Academy, Gurugram, Haryana</p>
              <p className="dark:text-teal-300">in the year 2019 from Science Stream</p>
              <p className="dark:text-teal-300">With 93.4% </p>
            </div>
            <div data-aos="fade-up" className="bg-blue-400 border-l-8 dark:bg-sky-900 border-l-blue-600 border-b-8 border-b-blue-600 text-2xl text-center  m-20 ml-40 mt-10 p-10 w-1/3 border rounded-lg">
              <p className="text-white font-bold">Passed 10th Class from</p>
              <p className="dark:text-teal-300">Colonel's Central Academy, Gurugram, Haryana</p>
              <p className="dark:text-teal-300">in the year 2017 </p>
              <p className="dark:text-teal-300">With 10 CGPA </p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div id="it" className="dark:bg-slate-800 ">
      <h1  className="mt-20 ml-20 mb-10 text-left font-bold text-yellow-500 text-4xl">IT PROFICIENCY</h1>

      <div className="grid grid-cols-3">
        <div>
          <h1 className="text-2xl text-center mx-auto my-10 text-white font-bold p-3 border border-blue-600 rounded-full bg-blue-600 w-1/2">Languages</h1>
          <div>{<Languages />}</div>
        </div>
        <div>
          <h1 className="text-2xl text-center mx-auto my-10 text-white font-bold p-3 border border-blue-600 rounded-full bg-blue-600 w-1/2">Frameworks</h1>
          <div>{<Frameworks />}</div>
        </div>
        <div>
          <h1 className="text-2xl text-center mx-auto my-10 text-white font-bold p-3 border border-blue-600 rounded-full bg-blue-600 w-3/4">Databases and others</h1>
          <div>{<Db />}</div>
        </div>
      </div>
      </div>
      <div id ="job" className="bg-blue-200 p-5 shadow-2xl dark:bg-stone-800 dark:text-white">
      <h1 data-aos="flip-up" className="mt-20 ml-20 mb-10 text-left  font-bold text-red-600 text-4xl">JOB EXPERIENCE</h1>
      <div data-aos="flip-down" className="m-20 text-2xl">
        <p>1. Worked as a Backend Development intern at <a className="text-blue-500 font underline" href="https://wilyer.com/">Wilyer</a></p>
        <p>From March 2021 to May 2021</p>
        <p>My job was to build the backend of a website using Django framework and RESTful API. The website had three interfaces, namely for the user, the provider and the superuser or the authoritative who could control everything in the website.</p>
      </div>
      <div data-aos="flip-down" className="m-20 text-2xl">
        <p>2. Worked as an intern at <a className="text-blue-500 font underline" href="https://koders.in/#/">Koders.in</a></p>
        <p>From February 2021 to March 2021</p>
        <p>My job included building a bot using Selenium and javascript frameworks that could easily log in into the shoppign webistes and automatically order products in bulk and make payment. </p>
        <p>In the meantime, I also made a Deepfake Detection Program using Tensorflow and a Discord Bot using Node.js for the firm.</p>
      </div>
      </div>
      <h1 id="strenghts" data-aos="zoom-in-down" className="mt-20 ml-20 mb-10 text-left font-bold text-green-500 text-4xl">STRENGHTS</h1>
      < div className="grid grid-cols-3">
        <div>
          <div data-aos="zoom-in-up" className="bg-red-500 m-10 pb-5 p-10 border dark:bg-cyan-700 dark:border-cyan-700 rounded-3xl">
            <img className="h-50" src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e5be48c765d4500072d946a%2F0x0.jpg"></img>
            <p className="text-center text-white font-bold mt-2 text-2xl">LEADER</p>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in-up" className="bg-red-500 m-10 pb-4 p-10 border dark:bg-cyan-700 dark:border-cyan-700 rounded-3xl">
            <img className="h-50" src="https://edexec.co.uk/wp-content/uploads/2020/02/iStock-1162567225-637x381.jpg"></img>
            <p className="text-center text-white font-bold mt-2 text-2xl">TEAM PLAYER</p>
          </div>
        </div>

        <div>
          <div data-aos="zoom-in-up" className="bg-red-500 m-10 pb-4 p-10 dark:bg-cyan-700 dark:border-cyan-700 border rounded-3xl">
            <img className="h-52 mx-auto w-96" src="https://www.mtdtraining.com/wp-content/uploads/2020/07/visionary-leadership-style.jpg"></img>
            <p className="text-center text-white font-bold mt-2 text-2xl">VISIONARY</p>
          </div>
        </div>
      
      </div>
      <div id="hobbies" className="bg-teal-200 dark:bg-stone-900 p-3 shadow-inner ">
      <h1 className="mt-20 ml-20 mb-10 text-left  font-bold text-yellow-500 text-4xl">HOBBIES</h1>
      <div className="grid grid-cols-3">
        <div>
          <div data-aos="zoom-in-left" className="bg-blue-500 dark:bg-red-600 dark:border-red-600 m-10 pb-5 p-10 border rounded-3xl">
            <img className="h-52 w-96" src="https://static.toiimg.com/thumb/msid-80009581,width-1200,height-900,resizemode-4/.jpg"></img>
            <p className="text-center text-white font-bold mt-2 text-2xl">PLAYING GUITAR</p>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in-left" className="bg-blue-500 m-10 pb-4 p-10 border dark:bg-red-600 dark:border-red-600 rounded-3xl">
            <img className="h-52 w-96" src="https://sm.pcmag.com/pcmag_in/how-to/7/7-easy-way/7-easy-ways-to-save-money-on-video-games_dyqs.jpg"></img>
            <p className="text-center text-white font-bold mt-2 text-2xl">PLAYING VIDEO GAMES</p>
          </div>
        </div>

        <div>
          <div data-aos="zoom-in-left" className="bg-blue-500 m-10 pb-4 p-10 border dark:bg-red-600 dark:border-red-600 rounded-3xl">
            <img className="h-44 mx-auto w-96" src="https://mongooseagency.com/files/3415/9620/1413/Return_of_Sports.jpg"></img>
            <p className="text-center text-white font-bold mt-2 text-2xl">INDULDGING IN ALL KINDS OF SPORTS</p>
          </div>
        </div>
      </div>
      </div>
      <footer>
        <div className={isDark ? 'spacer darklayer' : 'spacer layer'}></div>
        <div id="contact" className="bg-neutral-900 p-10 grid grid-cols-2 text-white">
          <div>
            <h1 className="text-4xl ml-20 mb-10 text-teal-500">QUICK LINKS:</h1>
            <p className="text-2xl ml-20 mb-10 " ><a href="#about">About</a></p>
            <p className="text-2xl ml-20 mb-10"><a href="#quali">Academic Qualifications</a></p>
            <p className="text-2xl ml-20 mb-10"><a href="#it">IT Proficiency</a></p>
            <p className="text-2xl ml-20 mb-10"><a href="#job">Job Experience</a></p>
            <p className="text-2xl ml-20 mb-10"><a href="#strenghts">Strenghts</a></p>
            <p className="text-2xl ml-20 mb-10"><a href="#hobbies">Hobbies</a></p>
          </div>
          <div>
            <h1 className="text-4xl ml-20 mb-10 text-teal-500">FIND ME:</h1>
            <a href="https://github.com/SaaranshShandilya" className='fa fa-github text-5xl ml-20'></a>
            <a href="https://www.facebook.com/Saaranshsundi47" className='fa fa-facebook text-5xl ml-10'></a>
            <a href="https://www.instagram.com/whyyysaaransh/" className='fa fa-instagram text-5xl ml-10'></a>
            <a href="https://www.linkedin.com/in/saaransh-shandilya-799b441b5/" className='fa fa-linkedin text-5xl ml-10'></a>

            <h1 className="text-4xl mt-10 ml-20 mb-10 text-teal-500">CONTACT ME:</h1>
            <p className="text-2xl ml-20 mb-10 ">Phone: +91-7289009286</p>
            <p className="text-2xl ml-20 mb-10 ">Email: saaranshshandilya@gmail.com</p>
            <p className="text-2xl ml-20 mb-10 ">Address: 101, Om Residency, Laxman Vihar, Phase-2</p>
            <p className="text-2xl ml-20 mb-10 ">Gali no.4, Gurgaon, Haryana</p>



          </div>
        </div>
      </footer>
      </div>

    </div>
  );
}

export default App;
