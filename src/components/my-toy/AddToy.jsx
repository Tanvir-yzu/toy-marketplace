import React, { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'

const AddToy = () => {
  const { user } = useContext(AuthContex);
  console.log(user);
  const handleBookService = (event) => {
    // event.preventDefault();
    const form = event.target;
    const toyname = form.toyname.value;
    const url = form.url.value;
    const email = user?.email;
    const seller = user?.displayName;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const catagory = form.catagory.value;
    const detail = form.detail.value;

    const booking = {
      toyname,
      url,
      email,
      seller,
      price,
      rating,
      quantity,
      catagory,
      detail,
    };
    console.log(JSON.stringify(booking));

    fetch('https://hunter-toy-tanvir2023.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                 
            }
            form.reset()
        })
  };
  return (
    <div className="text-center">
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center p-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Toy Name</span>
            </label>
            <input
              type="text"
              name="toyname"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture Url </span>
            </label>
            <input type="url" name="url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              min={0}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub Catagory</span>
            </label>

            <select name="catagory" className="input input-bordered" required>
              <option value="car" name="catagory">
                {" "}
                car
              </option>
              <option value="Dol" name="catagory">
                {" "}
                Dol
              </option>
              <option value="toy" name="catagory">
                {" "}
                Toy
              </option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail</span>
            </label>
            <textarea
              name="detail"
              className="input input-bordered"
              rows=""
              cols=""
              placeholder="Detail Description"
              required
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
