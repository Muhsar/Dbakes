import React from "react";
import Images from "../../utils/Images";
import Pagination from "./Pagination";
import ModalLayout from "../../utils/Modal";

const Content = ({ img, name, price,handleChange, handleSubmit }) => (
    <main className="flex items-center p-5 w-full h-full bg-white">
      <div className="border-t border-b pt-16 grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="flex flex-col justify-start">
          <div
            className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
            style={{ height: 320 }}
          >
            <img
              className="w-full h-full object-cover"
              src={img}
              alt="nike shoes"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <h1 className="capitalize text-4xl font-extrabold">{name}</h1>
            <h2 className="text-3xl">${price}</h2>
            <div>
              <div className="my-2">
                <input onChange={handleChange} type="text" name="name" placeholder="Enter Full name" className="rounded-xl h-15 w-full" />
              </div>
              <div className="my-2">
                <input onChange={handleChange} type="number" name="amount" placeholder={`Enter Amount of ${name} needed`} className="rounded-xl h-15 w-full" />
              </div>
            <div className="flex justify-center items-center gap-4 my-6 cursor-pointer">
              <button type="button" onClick={()=>handleSubmit(name, price)} className="bg-blue-600 px-5 py-3 text-white rounded-lg w-full text-center">
                Place Order
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  const Trigger = ({setOpen}) => (
    <button
      onClick={() => setOpen(true)}
      className="p-2 rounded-full bg-purple-600 text-white mx-5 -mb-4 hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );

export default function Products() {
  const [images, setImages] = React.useState(Images());
  const [order, setOrder] = React.useState("asc");
  const [listCount, setlistCount] = React.useState(0);
  const [active, setActive] = React.useState<number>(1);
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    setList(images?.slice(listCount, listCount + 7));
  }, [listCount, images]);
  const [disable, setDisable] = React.useState(false);
  const handleNext = () => {
    listCount + 7 === images?.length && setDisable(true);
    listCount >= 0 &&
      listCount + 7 < images?.length &&
      setlistCount(listCount + 7);
    listCount === 7 && setActive(1);
    listCount === 14 && setActive(2);
    listCount === 21 && setActive(3);
    listCount === 28 && setActive(4);
  };
  const handlePrevious = () => {
    listCount - 6 > 0 && setlistCount(listCount - 7);
    listCount === 7 && setActive(1);
    listCount === 14 && setActive(2);
    listCount === 21 && setActive(3);
    listCount === 28 && setActive(4);
    // setlistCount(listCount-7)
  };
  React.useEffect(() => {
    listCount === 7 && setActive(1);
    listCount === 14 && setActive(2);
    listCount === 21 && setActive(3);
    listCount === 28 && setActive(4);
  }, [listCount]);
  const [state, setState] = React.useState({
    name: "",
    amount: 0
  })
  const handleSubmit = (name, price) => {
    const waText = `Hey CEO of Deezah Bakes, ${state.name} just placed an order for ${state.amount} pieces of ${name}`
    console.log(waText)
     window.open(`https://wa.me/${'+234'+`${9078044747}`}?text=${encodeURIComponent(waText)}`, '_blank')
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const [open, setOpen] = React.useState(false);
  
  return (
    <div>
      <div className="flex flex-row justify-between px-5 py-2 w-full">
        <div className="text-3xl font-extrabold bg-purple-700 text-white p-5 rounded-lg">
          DB
        </div>
        <h1 className="text-3xl font-extrabold py-2 text-gray-400">
          Deezah Bakes
        </h1>
      </div>
      <main className="my-8">
        <div className="mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {list?.map((img, index) => (
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover transform transition-all hover:scale-105"
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <ModalLayout
                    trigger={<Trigger setOpen={setOpen} />}
                    open={open}
                    setOpen={setOpen}
                    content={
                      <Content
                        img={img}
                        name={`Food ${index}`}
                        price={`${index}.99`}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                      />
                    }
                    title={`Place Order For Food ${index}`}
                  />
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">Food {index}</h3>
                  <span className="text-gray-500 mt-2">${index}.99</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination
          active={active}
          next={handleNext}
          prev={handlePrevious}
          disable={disable}
        />
      </main>
    </div>
  );
}
