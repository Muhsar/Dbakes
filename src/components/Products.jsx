import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import image from "../images/i1.jpg"
export default function Products() {
    const localProducts = JSON.parse(localStorage?.products)
  const [products, setProducts] = React.useState([...localProducts]);
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState({
    id: Math.random(),
    name: "",
    price: 0
  });
  const addProduct = async(e) => {
      e.preventDefault()
      const newProduct = {
          id: product.id,
          name: product.name,
          price: product.price
      }
      setProducts([...products, newProduct])
      localStorage.setItem("products", JSON.stringify(products))
      setOpen(false)
      setProduct({
          ...product,
          name: "",
          price: 0
      })
  };
  const handleChange = (e) => {
      setProduct({
          ...product,
          [e.target.name]: e.target.value
      })
  }
  console.log(products)
  return (
    <>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add A New Product</DialogTitle>
        <DialogContent>
          <form onSubmit={addProduct}>
            <div className="my-2">
            <label htmlFor="" className="text-xl">
            </label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id=""
                placeholder="Enter Product Name"
                className="rounded-full px-4 placeholder-gray-400 border-2 border-green-400 py-4 focus:outline-none"
              />
            </div>
            <div className="my-2">
              <input
                onChange={handleChange}
                type="number"
                name="price"
                id=""
                placeholder="Enter Product Price"
                className="rounded-full px-4 placeholder-gray-400 border-2 border-green-400 py-4 focus:outline-none"
              />
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="rounded-full px-4 text-green-400 border-2 border-green-400 py-4 focus:outline-none w-full hover:text-green-100 hover:bg-green-400"
              >+ Add</button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <div className="py-8 px-3">
        <h1 className="text-center text-2xl"> Our Products</h1>
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">Collection</h1>
          <button
            className="p-3 px-6 text-green-400 text-center rounded-full border-2 border-green-400"
            onClick={() => setOpen(true)}
          >
            + Add Product
          </button>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {products?.map((product, index) => (
            <div className="col-span-1 flex-col items-start justify-start" key={index}>
            <img src={image} alt="" />
            <p className="text-lg text-left">{product.name}</p>
            <p className="text-lg text-left">#{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
