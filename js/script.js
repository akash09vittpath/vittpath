//footer btn style
const btnStyle = {
  backgroundColor: "gray",
  color: "white",
  padding: "7px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer"
};

// Select element
const mail = document.querySelector(".mail");

// Apply the grouped styles
Object.assign(mail.style, btnStyle);

mail.addEventListener("click", () => {
    alert("Done");
});

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
};

//service div
const serviceStyle = {
  marginRight: "12px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  padding: "15px",
  borderTop: "5px solid white",
  borderBottom: "5px solid white",
  borderTopRightRadius: "20px",
  borderBottomLeftRadius: "20px",
  height: "50vh"
}

const service1 = document.querySelector(".service-1");
const service2 = document.querySelector(".service-2");
const service3 = document.querySelector(".service-3");

Object.assign(service1.style, serviceStyle);
Object.assign(service2.style, serviceStyle);
Object.assign(service3.style, serviceStyle);

//common display flex style
const commonDivFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const serviceObj2 = document.querySelector(".services-obj1-1");
const aboutUs = document.querySelector(".about-us");
const ourServices = document.querySelector(".our-services ");

Object.assign(serviceObj2.style, commonDivFlex);
Object.assign(aboutUs.style, commonDivFlex);
Object.assign(ourServices.style, commonDivFlex);

//column flexdirection flex style
const columnFlexDirection = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}

const serviceObj1 = document.querySelector(".services-obj1");
const aboutUsObj1 = document.querySelector(".about-us-obj1");
const heroObj1 = document.querySelector(".hero-obj1");
const footerObj1 = document.querySelector(".footer-obj1");

Object.assign(serviceObj1.style, columnFlexDirection);
Object.assign(aboutUsObj1.style, columnFlexDirection);
Object.assign(heroObj1.style, columnFlexDirection);
Object.assign(footerObj1.style, columnFlexDirection);

//updating bootstrap classes based on screen sizes
function updateClassBasedOnScreenSize() {
  
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  
  const allBtns = document.querySelectorAll(".btn");
  const btnInfo = document.querySelector(".btn-info");
  const company = document.querySelector(".company");

  //navbar
  const navbar = document.querySelector(".navbar-nav");
  const navbarLinks = document.querySelectorAll(".nav-custom");
  
  //hero-section
  const heroSection = document.querySelector('.hero-section');
  
  
  //about
  const about = document.querySelector('.about-us');
  const aboutSubText = document.querySelectorAll('.about-sub-text ');

  //contact
  const contact = document.querySelector(".contact");
  const contactObj1 = document.querySelector(".contact-obj1");
  const contactObj2 = document.querySelector(".contact-obj2");
  const contactDetails = document.querySelector(".contact-details");
  const contactForm = document.querySelector(".contact-form");

  if(isMobile) {

    //Navbar
    navbar.classList.remove("w-50");
    navbar.classList.add("w-100");
    navbarLinks.forEach(links=>{
      links.classList.add("w-100");
      links.classList.add("d-flex");
      links.classList.add("justify-content-center");
      links.classList.add("fs-2");
    })

    //buttons
    allBtns.forEach(btn => {
      btn.classList.remove("w-25");
      btn.classList.add("w-50");
    });

    company.style['font-size'] = '0.8rem'
    
    btnInfo.classList.remove('w-50');
    btnInfo.style.width = '90px';
    
    //hero-section
    heroSection.classList.remove('vh-100');
    
    heroSection.style.height = '100%';
    
    //about
    about.classList.remove('vh-100');
    aboutSubText.forEach(aboutSubText => {
      aboutSubText.classList.remove('w-25');
      aboutSubText.classList.add('w-100');
      aboutSubText.style['font-size'] = '0.8rem';
    });

    about.style.height = '100%';  

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

  }
  else {

    //buttons
    allBtns.forEach(btn => {
      btn.classList.add("w-25");
    });
    
    btnInfo.classList.add('w-25');
    
    //hero-section
    heroSection.classList.add('vh-100');
    
    //about
    about.classList.add('vh-100');
    aboutSubText.forEach(aboutSubText => {
      aboutSubText.classList.add('w-25');
    });

    //contact
    contact.classList.add('d-flex');
    contact.classList.add('vh-100');
    contactObj1.classList.add('w-50');
    contactObj2.classList.add('w-50');
    contactForm.classList.add('w-75');
    contactObj2.classList.add('p-5');
    contact.classList.add('d-flex');

    contact.style.padding = '5rem';
  }
}
updateClassBasedOnScreenSize();
window.addEventListener('resize', updateClassBasedOnScreenSize);
AOS.init();