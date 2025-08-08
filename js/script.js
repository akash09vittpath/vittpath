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
  borderBottomLeftRadius: "20px"
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