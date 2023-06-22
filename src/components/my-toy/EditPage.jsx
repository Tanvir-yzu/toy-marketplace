import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const EditPage = () => {
  const toy = useLoaderData([]);

  const updateCart = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const detail = form.detail.value;
    const cartupdate = {
      price,
      quantity,
      detail,
    };
    
    fetch(`https://hunter-toy-tanvir2023.vercel.app/alldata/${toy._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartupdate),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            // alert("user updated successfully");
            Swal.fire({
                title: 'Success!',
                text: 'Toy Update Successfully',
                icon: 'success',
                confirmButtonText: '<a href="/mytoy">Back </a>',
                
              })

          }
        });
  };
  return (
    <div className="card card-side   bg-base-100 shadow-xl mt-9">
      <figure>
        <img className="h-64 w-65p-1" src={toy?.url} alt="Movie" />
      </figure>

      <div className="card-body text-center">
        <h2 className="card-title ">{toy?.toyname}</h2>

        <form onSubmit={updateCart}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              defaultValue={toy?.price}
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              defaultValue={toy?.quantity}
              name="quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail</span>
            </label>
            <textarea name="detail"   type="text"  className="input input-bordered" defaultValue={toy?.detail} id="" cols="30" rows="10"></textarea>
          </div>
          <div className="form-control my-6">
            <input
              type="submit"
              className=" btn btn-success input input-bordered"
              value="update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
