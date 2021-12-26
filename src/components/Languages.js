import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const Languages = () => {
    return (
        <div  className="ml-20">

            <div data-aos="fade-down">
                <img className="object-scale-down mx-auto h-48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down mx-auto  h-48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://www.gcreddy.com/wp-content/uploads/2021/05/Java-Programming-Language.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://www.tutorialrepublic.com/lib/images/javascript-illustration.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png"></img>
            </div>

        </div>
    )
}

export default Languages
