import React from 'react'
import CountUp from 'react-countup';

const AboutCount = () => {
    return (
        <section className="single-page-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <h2>About me</h2>
                        <p>With over 4 years of experience as a web developer and strong expertise in WooCommerce, I focus on creating innovative solutions that achieve business goals, establishing myself as a trusted professional in the industry.</p>
                    </div>
                </div>
                <div className="row">
                    <Card count={"4"} title={"Years Of Experience"} />
                    <Card count={"56"} endOprion={""} title={"Complete Projects"} />
                    <Card count={"45"} title={"Client Satisfactions"} />
                    <Card count={"20"} title={"Cup of coffe"} />
                </div>
            </div>
        </section>
    )
}

export default AboutCount


const Card = ({ count, title, endOprion }) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="hero-counter-area wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                    <span className="count-text plus"><CountUp end={count}   />{endOprion}</span>
                    <span className="counter-title">{title}</span>
                </div>
            </div>
        </div>
    )
}