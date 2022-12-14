import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import img5 from "../assets/img5.jpeg"
import img6 from "../assets/img6.jpeg"

function Gallery() {

  return (
    <div className="overflow-hidden text-gray-700">
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
      <div className="w-1/2 p-1 md:p-2">
      <img className="block object-cover object-center w-full h-full rounded-lg"src={img1}/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
        <img className="block object-cover object-center w-full h-full rounded-lg"src={img2}/>
        </div>
        <div class="w-full p-1 md:p-2">
        <img className="block object-cover object-center w-full h-full rounded-lg"src={img3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img className="block object-cover object-center w-full h-full rounded-lg"src={img4}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img className="block object-cover object-center w-full h-full rounded-lg" src={img5} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img className="block object-cover object-center w-full h-full rounded-lg" src={img6} />
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Gallery;