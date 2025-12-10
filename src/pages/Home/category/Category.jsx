import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useCategories } from "@/hooks/useJob";
import useJobStore from "@/store/jobStore";

// const categories = [
//   "Frontend Developer",
//   "Backend Developer",
//   "Full Stack Developer",
//   "Data Scientist",
//   "DevOps Engineer",
//   "Graphic Designer",
//   "Product Manager",
//   "QA Engineer",
//   "Mobile App Developer",
//   "Cybersecurity Specialist",
// ];

const Category = () => {
  const { selectedCategory, setSelectedCategory } = useJobStore();
  const { data: categories, isLoading, isError } = useCategories();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading categories</div>;
  }
  return (
    <div>
      <Carousel className="w-full max-w-xl  mx-auto my-20">
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem
              key={category._id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Button>{category.name}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Category;
