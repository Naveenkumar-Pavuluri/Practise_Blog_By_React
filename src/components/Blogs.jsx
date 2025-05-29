import { gsap } from "gsap";  
import { useRef, useEffect } from "react";  

const Blogs = () => {
  const blogRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(".title", {
      y: 20,
      duration: 0.5,
      opacity: 0,
    })
    .from(".sub-title", {
      y: 20,
      duration: 0.5,
      opacity: 0,
    })
    .from(".para", {
      y: 20,
      duration: 0.5,
      opacity: 0,
    });
  }, []);  

  return (
    <>
      <div className="mx-10 text-center" ref={blogRef}>
        <div className="py-6">
          <h1 className="title">Title</h1>
          <h3 className="sub-title">Written by Nav</h3>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sed quaerat praesentium veritatis porro temporibus soluta eaque iusto in provident qui iure ipsa fugiat repudiandae nulla quos numquam, quibusdam accusamus?</p>
        </div>
        <div className="py-6">
          <h1 className="title">Title</h1>
          <h3 className="sub-title">Written by Nav</h3>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sed quaerat praesentium veritatis porro temporibus soluta eaque iusto in provident qui iure ipsa fugiat repudiandae nulla quos numquam, quibusdam accusamus?</p>
        </div>
        <div className="py-6">
          <h1 className="title">Title</h1>
          <h3 className="sub-title">Written by Nav</h3>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sed quaerat praesentium veritatis porro temporibus soluta eaque iusto in provident qui iure ipsa fugiat repudiandae nulla quos numquam, quibusdam accusamus?</p>
        </div>
        <div className="py-6">
          <h1 className="title">Title</h1>
          <h3 className="sub-title">Written by Nav</h3>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sed quaerat praesentium veritatis porro temporibus soluta eaque iusto in provident qui iure ipsa fugiat repudiandae nulla quos numquam, quibusdam accusamus?</p>
        </div>
      </div>
    </>
  );
};

export default Blogs;