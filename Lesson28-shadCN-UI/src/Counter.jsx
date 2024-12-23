import { toast } from "react-toastify";
// import { Button } from "./components/ui/button"; //Importing ShadCN-Component
import { Button } from "@/components/ui/button"; //Alternative way
import { Carousel,CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";


import M from "./assets/M.jpg";
import Monk from "./assets/Monk.jpg";
import R from "./assets/R.jpg";

function Counter() {
  //Simple Toasts
  const showSuccessToast = () => {
    toast.success("Success! Everything worked perfectly.");
  };

  return (
    <>
      <div className="p-[20px]">
        <button onClick={showSuccessToast} className="bg-green-500 mx-3">
          Show Success Toast
        </button>
        <Button> Hello-ShadCN </Button>
      </div>
      <Carousel>
        <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-red-600 mr-2 text-center">
            Akshit
            <div className="mx-2 mb-2">
              <img src={Monk} alt="Monk" className="object-contain"/>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-green-600 mr-2 text-center">
            Saurab
            <div className="mx-2 mb-2">
              <img src={R} alt="Monk" className="object-contain"/>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-yellow-600 mr-2 text-center">
            Anushree
            <div className="mx-2 mb-2">
              <img src={M} alt="Monk" className="object-contain"/>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-red-500 mr-2 text-center">
            Plakchha
            <div className="mx-2 mb-2">
              <img src={Monk} alt="Monk" className="object-contain"/>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-green-600 mr-2 text-center">
            Rohit
            <div className="mx-2 mb-2">
              <img src={R} alt="Monk" className="object-contain"/>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-yellow-600 mr-2 text-center">
            Anjali
            <div className="mx-2 mb-2">
              <img src={M} alt="Monk" className="object-contain"/>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default Counter;
