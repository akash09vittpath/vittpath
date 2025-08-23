const commonDesign = {
  width: "100%",
  backgroundColor: "black",
  height: "82%"
}

const Text = {
  width: "45%",
  height: "55%",
  padding: "3rem"
}
const leftAlignImg = {
  width: "55%",
  height: "65%",
  backgroundSize: "cover",
  border: "15px solid white",
  borderRadius: "15px",
  transform: "rotate(-2.5deg)"
}

const rightAlignImg = {
  width: "55%",
  height: "65%",
  backgroundSize: "cover",
  border: "15px solid white",
  borderRadius: "15px",
  transform: "rotate(2.5deg)"
}
//FinanceAndTrading
const FinanceAndTrading = document.querySelector(".FinanceAndTrading");
const FinanceAndTradingObj1 = document.querySelector(".FinanceAndTradingObj1");
const FinanceAndTradingObj2 = document.querySelector(".FinanceAndTradingObj2");
Object.assign(FinanceAndTrading.style, commonDesign);
Object.assign(FinanceAndTradingObj1.style, Text);
Object.assign(FinanceAndTradingObj2.style, rightAlignImg);

//PaperTrading
const PaperTrading = document.querySelector(".PaperTrading");
const PaperTradingObj1 = document.querySelector(".PaperTradingObj1");
const PaperTradingObj2 = document.querySelector(".PaperTradingObj2");
Object.assign(PaperTrading.style, commonDesign);
Object.assign(PaperTradingObj1.style, leftAlignImg);
Object.assign(PaperTradingObj2.style, Text);

//SoftwareDevelopment
const SoftwareDevelopment = document.querySelector(".SoftwareDevelopment");
const SoftwareDevelopmentObj1 = document.querySelector(".SoftwareDevelopmentObj1");
const SoftwareDevelopmentObj2 = document.querySelector(".SoftwareDevelopmentObj2");
Object.assign(SoftwareDevelopment.style, commonDesign);
Object.assign(SoftwareDevelopmentObj2.style, rightAlignImg);
Object.assign(SoftwareDevelopmentObj1.style, Text);

//.WebDev
const WebDev = document.querySelector(".WebDev");
const WebDevObj1 = document.querySelector(".WebDevObj1");
const WebDevObj2 = document.querySelector(".WebDevObj2");
Object.assign(WebDev.style, commonDesign);
Object.assign(WebDevObj1.style, leftAlignImg);
Object.assign(WebDevObj2.style, Text);

//column flexdirection flex style
const columnFlexDirection = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

const scrollToTop = document.querySelector(".scrollToTop");

scrollToTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smooth scrolling
    });
  };
  window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollToTop.style.display = "block";
    scrollToTop.classList.add("d-flex")
  } else {
    scrollToTop.classList.remove("d-flex")
    scrollToTop.style.display = "none";
  }
}

//updating bootstrap classes based on screen sizes
function updateClassBasedOnScreenSize() {
    const commonSize = {
        width: "100%",
        backgroundColor: "black",
        height: "100%",
    };

    const commonObj1 = {
        width: "100%",
        padding: "2rem",
    };

    const commonObj2 = {
        width: "90%",
        maxWidth: "400px",
        aspectRatio: "1 / 1",
        transform: "rotate(0deg)",
        backgroundPosition: "center",
    };

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

      //contact
      const contact = document.querySelector(".contact");
      const contactObj1 = document.querySelector(".contact-obj1");
      const contactObj2 = document.querySelector(".contact-obj2");
      const contactDetails = document.querySelector(".contact-details");
      const contactForm = document.querySelector(".contact-form");
      
      //navbar
      const navbar = document.querySelector(".navbar-nav");
      const navbarLinks = document.querySelectorAll(".nav-custom");
    if (isMobile) {

        // FinanceAndTrading
        Object.assign(FinanceAndTrading.style, columnFlexDirection, commonSize);
        Object.assign(FinanceAndTradingObj1.style, commonObj1);
        Object.assign(FinanceAndTradingObj2.style, commonObj2);

        // PaperTrading
        Object.assign(PaperTrading.style, columnFlexDirection, commonSize);
        Object.assign(PaperTradingObj1.style, commonObj2); 
        Object.assign(PaperTradingObj2.style, commonObj1);

        // SoftwareDevelopment
        Object.assign(SoftwareDevelopment.style, columnFlexDirection, commonSize);
        Object.assign(SoftwareDevelopmentObj1.style, commonObj1);
        Object.assign(SoftwareDevelopmentObj2.style, commonObj2);

        // WebDev
        Object.assign(WebDev.style, columnFlexDirection, commonSize);
        Object.assign(WebDevObj1.style, commonObj2);
        Object.assign(WebDevObj2.style, commonObj1);



        //Navbar
        navbar.classList.remove("w-50");
        navbar.classList.add("w-100");
        navbarLinks.forEach(links=>{
          links.classList.add("w-100");
          links.classList.add("d-flex");
          links.classList.add("justify-content-center");
          links.classList.add("fs-2");
        })

        //contact
        contact.classList.remove('d-flex');
        contact.classList.remove('vh-100');
        contactObj1.classList.remove('w-50');
        contactObj2.classList.remove('w-50');
        contactForm.classList.remove('w-75');
        contactObj2.classList.remove('p-5');
        contactObj2.classList.remove('justify-content-end');
        contactObj2.classList.add('justify-content-center');
        
        Object.assign(contact.style, columnFlexDirection);
        
        contact.style.height = '100%';
        contactObj1.style.width = '100%';
        contactObj2.style.width = '100%';
        contactDetails.style['font-size'] = '0.8rem';
        contact.style.padding = '3.5rem';

    } else {

        // Restore desktop styles
        Object.assign(FinanceAndTrading.style, commonDesign);
        Object.assign(FinanceAndTradingObj1.style, Text);
        Object.assign(FinanceAndTradingObj2.style, rightAlignImg);

        Object.assign(PaperTrading.style, commonDesign);
        Object.assign(PaperTradingObj1.style, leftAlignImg);
        Object.assign(PaperTradingObj2.style, Text);

        Object.assign(SoftwareDevelopment.style, commonDesign);
        Object.assign(SoftwareDevelopmentObj1.style, Text);
        Object.assign(SoftwareDevelopmentObj2.style, rightAlignImg);

        Object.assign(WebDev.style, commonDesign);
        Object.assign(WebDevObj1.style, leftAlignImg);
        Object.assign(WebDevObj2.style, Text);
        
    }
}

updateClassBasedOnScreenSize();
window.addEventListener('resize', updateClassBasedOnScreenSize);
AOS.init();
