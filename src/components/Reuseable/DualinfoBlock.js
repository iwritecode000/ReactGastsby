import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualinfoBlock({ heading, image }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, veniam saepe rerum corrupti nihil vero ipsa, aliquam
              perferendis, maxime eveniet distinctio? Ut a, ipsa rerum id porro
              velit deserunt pariatur repellat officia nesciunt accusamus
              adipisci saepe sequi natus molestias iure. Similique repudiandae
              iusto voluptatibus sint aut quibusdam impedit perspiciatis at. .
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              iusto odit perferendis amet minima, minus vel velit doloribus non
              nisi dolore aspernatur quia dolorem fuga quas, officiis enim ullam
              perspiciatis eaque laudantium debitis quidem earum! Voluptatibus
              eius magni veniam ad. Cupiditate necessitatibus quam voluptatibus
              est fugiat totam, ea dignissimos nisi eos? Soluta accusamus autem
              dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nulla, magni provident exercitationem dolore rem deserunt incidunt
              ab! Quidem aspernatur impedit nesciunt, molestiae, incidunt
              corrupti cumque laboriosam ab nulla facilis modi?
            </p>
          </div>
          <div className="col-4">
            <div class="card">
              <img
                src={image}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body bg-dark">
                <h5 class="card-title text-success">Card title</h5>
                <p class="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia qui sequi quis, eaque doloremque illo maxime nobis
                  saepe animi, at sunt minus. Mollitia saepe ex reiciendis
                  obcaecati ducimus repudiandae voluptatibus!
                </p>
                <Link to="/about">
                  <button className="btn btn-warning btn-block">{heading}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
