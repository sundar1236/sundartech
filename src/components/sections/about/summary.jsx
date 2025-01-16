import React from 'react'
import profile from "../../../assets/images/about/me.jpg"
const Summary = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row align-items-center">
                        {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                        <div className="col-lg-5">
                            <div className="about-image-part wow fadeInUp delay-0-3s">
                                <img src={profile} alt="About Me" />
                            </div>
                        </div>
                        {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                        <!-- START ABOUT TEXT DESIGN AREA --> */}
                        <div className="col-lg-7">
                            <div className="about-content-part wow fadeInUp delay-0-5s">
                                <h2>
                                    A passionate <span>web designer</span> turning <span>ideas</span> into visually stunning, user-friendly websites.
                                </h2>
                                <p>
                                Hello! I’m Sundaramoorthi, a self-taught and dedicated web developer with 4+ years of experience, specializing in crafting innovative solutions and seamless WooCommerce integrations. My journey began as a passion project in my childhood room, and I’ve since honed my skills to deliver impactful digital experiences, earning recognition as a trusted professional in the industry.
                                </p>
                                <p>I create seamless online experiences to enhance businesses. From responsive designs to efficient development, I blend creativity with functionality, ensuring your digital presence captivates and converts.</p>
                            </div>
                        </div>
                        {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summary