import React from 'react'

const Resume = () => {
    return (
        <div className="resume-area" id="resume">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <h2>Education & Experience</h2>
                                <p>Established history of success in design and development, consistently delivering valuable insights and driving significant results.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="resume-wrapper wow fadeInUp delay-0-2s">
                                <Card year={"2023 - Present"} title={"@ Software Developer"} institution={"Blind Matrix"} description={"At a software company, I worked as an eCommerce developer specializing in creating custom plugins and tailoring WooCommerce functionalities to meet client needs. I was responsible for developing intuitive front-end designs and implementing seamless backend solutions to enhance user experience. My work contributed to building robust, user-friendly eCommerce platforms that aligned with client goals and received excellent feedback for performance and design."} />
                                <Card year={"2021 - 2023"} title={"@ Software Developer"} institution={"OneDot Media Pvt Ltd"} description={"At a Digital marketing company, I worked as a web developer responsible for designing and maintaining eCommerce websites for clients. I developed user-friendly interfaces, implemented mobile-responsive designs, and ensured seamless functionality to enhance customer satisfaction. Additionally, I provided ongoing web server maintenance to optimize performance, troubleshoot issues, and ensure site reliability. My contributions helped clients achieve successful online stores and improved customer experiences, earning positive feedback for delivering innovative and dependable solutions."} />
                                <Card year={"2020 - 2021"} title={"@ Junior Software Developer"} institution={"Codingrim solutions"} description={"As a Junior Software Developer at a Digital marketing company, I was responsible for designing user interfaces for the company's online shopping platform. I collaborated closely with the company's marketing and development teams to create designs that not only looked great but also drove conversions and increased sales."} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume

const Card = ({ year, description, title, institution }) => {
    return (
        <div className="resume-box">
            <span className="resume-date">{year}</span>
            <h5 className="fw-medium">{institution}</h5>
            <span>{title}</span>
            <p>{description}</p>
        </div>
    )
}