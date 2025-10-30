import React from 'react';
import "./about.css";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = "https://plus.unsplash.com/premium_photo-1749246466452-7af5c7f64d68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJvb2slMjBjb2xsZWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600" alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About FindBook</h2>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.</p>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About