import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({heading}) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title = {heading}/>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              corrupti molestiae, accusamus officia ratione quibusdam ex qui
              veritatis iste cum provident vero, eos nobis excepturi voluptatem
              in voluptas cumque aliquam nesciunt expedita! Dolor, excepturi!
              Illum ad voluptatem quasi vel aliquid error consequuntur
              distinctio? Quas, inventore mollitia veniam quidem earum minus
              architecto quis error voluptate eaque molestias! Sequi perferendis
              magnam eos!
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
