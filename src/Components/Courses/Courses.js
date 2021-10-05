import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
const Courses = () => {
    const[courses,setCourse]=useState([]);


    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=> setCourse(data))

    }
    ,[])
    console.log(courses);

    return (
        <div className ="course-container  ">
            <h1 className="our-course">Our Courses</h1>
            <div className="search-box">
                <input type="text" className="p-2" placeholder="Enter Your Course Name" />
                <button className="btn btn-dark p-2">Search</button>
            </div>
            <div className="courses">
                <div className="row">
                {
                       courses.map(course=>(
                           <div className =" h-200 card col-md-4 d-flex my-4 align-item-center gap-4 mx-auto shadow-lg  p-3 ms-4"   > 
                           <div className= "cart  "> 
                               <img className=" w-50 img-fluid " src={course.photo} alt="" />
                               <h1>{course.name}</h1>
                               <h3>{course.instractor}</h3>
                               <h4>{course.course_hour}</h4>
                               <h5>{course.price}</h5>

                               <button className="btn btn-danger">Read More</button>
                           </div>
                           
                           
                           </div>
                       ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Courses;