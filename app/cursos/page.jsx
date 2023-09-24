
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroCourse from "@/components/HeroCourse";
import ApiPagination from "@/components/ApiPagination";
import Calendar from "@/components/Calendar";
import DoubleCourse from "@/components/DobleCourse";
import Banner from "@/components/Banner";


function EducationPage () {


  return (
    <div>
      <Navbar/>
      <HeroCourse image={"./team.png"}/>
      <DoubleCourse/>
      <ApiPagination/>
      <Banner/>
      <Calendar/>
      <Footer/>
    </div>
  )
};

export default EducationPage;