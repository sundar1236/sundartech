import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import React from 'react'

const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                <h2>Services</h2>
                                <p>My Services Pave the Way for Exceptional Experiences, Where Quality and Commitment Define Every Interaction."</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Card description={"Web design shapes digital experiences, fostering engagement, usability, and brand identity. Vital for online success!"} icon={<RiGlobalFill size={55} />} title={"Website Design"} />
                        <Card description={"Graphic design transforms ideas into visual impact, crucial for effective communication and memorable brand aesthetics."} icon={<RiQuillPenLine size={55}/>} title={"Graphic Design"} />
                        <Card description={"Digital marketing propels brands, driving visibility, engagement, and growth in the online landscape. Essential for business success!"} icon={<RiPantoneFill size={55}/>} title={"Digital Marketing"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services

const Card = ({ title, description, icon }) => {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="service-item wow fadeInUp delay-0-2s">
                <div className="content">
                    <i>{icon}</i>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}