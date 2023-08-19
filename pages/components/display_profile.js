import ProfilePhoto from "./profile/profile_photo";
import ContactInfo from "./profile/contact_info";
import AboutMe from "./profile/about_me";
import Skills from "./profile/skills";
import ProfesstionalDetails from "./profile/professtional_details";
import Certifications from "./profile/certifications";
import Experience from "./profile/experiences";
import Education from "./profile/education";

export default function DisplayProfile() {
  const {
    name: pName,
    imgURL,
    email,
    phoneNo,
    aboutMe = "I love to make stuff up",
  } = {
    name: "Shantanu",
    imgURL: "/",
    email: "shafkjhsaf@gamil.com",
    phoneNo: 1309473978,
  };

  return (
    <div className="flex-grow flex flex-col px-1 " style={{ height: "80dvh" }}>
      <main className="flex flex-grow flex-col gap-2  overflow-auto scroll-auto">
        <div className="bg-indigo-900  text-white text-lg pt-2 pb-40 px-3 rounded-md h-44 mt-3">
          MY PROFILE
        </div>
        <div className="relative -top-20  grid lg:grid-cols-2 py-8 px-10 text-xs  bg-slate-50 rounded-lg mx-10">
          <div className="  left min-h-max px-6  gap-5 flex flex-col">
            <ProfilePhoto imgURL={imgURL} pName={pName} />
            <ContactInfo pName={pName} email={email} phoneNo={phoneNo} />
            <AboutMe pName={pName} aboutMe={aboutMe} />
            <Skills />
          </div>
          <div className="right min-h-max px-6 gap-5 flex flex-col">
            <ProfesstionalDetails />
            <Certifications />
            <Experience />
            <Education />
          </div>
        </div>
      </main>
    </div>
  );
}
