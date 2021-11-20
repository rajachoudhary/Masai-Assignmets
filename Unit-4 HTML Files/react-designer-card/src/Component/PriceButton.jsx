const Button  = () => {
  return (
      <div class="row  mx-3 my-4">
          <h1 class="col" style={{fontWeight:"bold"}}>$23.90</h1  >
          <h2 class="text-decoration-line-through col text-danger">$29.90</h2>
          <button class="btn-lg btn-success col mx-4 " style={{border:"none"}}>ORDER</button>
      </div>
  )
}
export  default Button