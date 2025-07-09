import React from 'react'

const VCard = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2 d-flex justify-content-center">
      <div className="card shadow" style={{ width: '18rem' }}>
        <div className="ratio ratio-1x1">
          <img src={props.image} className="w-100 h-100 object-fit-cover" alt="Image"></img>
        </div>
        <div className="card-body">
          <h1 className="fs-4 fw-bolder py-2 px-3">{props.title}</h1>
          <p className="px-3">{props.des}</p>
          <div className="py-2 px-3 fs-5">
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="row">
            <p className="col-6 px-4 d-flex align-items-center">COLORS</p>
            <p className="col-6 px-4 text-end fw-bolder fs-4">{props.price}$</p>
          </div>
          <div className="px-3 fs-5">
            <i className="fa-solid fa-circle text-warning"></i>
            <i className="fa-solid fa-circle text-danger"></i>
            <i className="fa-solid fa-circle text-primary"></i>
          </div>
          <div className="d-flex align-items-center justify-content-center py-3">
            <button type="button" className="btn btn-success w-100 mx-3">SHOP
              NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VCard