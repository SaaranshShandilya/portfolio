import React, {useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const Frameworks = () => {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    return (
        <div className="ml-20 ">
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://miro.medium.com/max/1200/1*slHeZngyeUr7ypEz7MNL5w.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://northell.design/wp-content/uploads/2021/11/1pHsEux2h8wc3-yNCQNwz0A.jpeg"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://miro.medium.com/max/1400/1*XP-mZOrIqX7OsFInN2ngRQ.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://www.edureka.co/blog/wp-content/uploads/2017/06/selenium.png"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://www.pragimtech.com/wp-content/uploads/2019/04/bootstrap.jpg"></img>
            </div>
            <div data-aos="fade-down">
                <img className="object-scale-down h-48" src="https://miro.medium.com/max/712/0*QXkyD4rFK7ivYf9-.png"></img>
            </div>

            
        </div>
    )
}

export default Frameworks
