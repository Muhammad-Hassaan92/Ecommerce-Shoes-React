import React from 'react'

const HCard = (props) => {
  return (
    <div className="col-12 col-lg-5 d-flex justify-content-center mb-4">
      <div className="card mx-4 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.image} className="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="fs-4 fw-bolder py-2 px-3">{props.title}</div>
              <div className="px-3">{props.des}</div>
              <div className="py-2 px-3 fs-5">
                <i className="fa-solid fa-star text-danger"></i>
                <i className="fa-solid fa-star text-danger"></i>
                <i className="fa-solid fa-star text-danger"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="row">
                <div className="col-6 px-4 d-flex align-items-center">COLORS</div>
                <div className="col-6 px-4 text-end fw-bolder fs-4">{props.price}</div>
              </div>
              <div className="px-3 fs-5">
                <i className="fa-solid fa-circle text-warning"></i>
                <i className="fa-solid fa-circle text-danger"></i>
                <i className="fa-solid fa-circle text-primary"></i>
              </div>
              <div className="d-flex align-items-center justify-content-center py-3">
                <button type="button" className="btn btn-success w-100 mx-3">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HCard