import React from "react";
//STYLE
import "../assets/styles/components/Home.scss";
//COMPONENTS
import "@brainhubeu/react-carousel/lib/style.css";
import LargeCard from "../components/LargeCard";
import GridCard from "../components/GridCard";
import ProductLines from "../components/ProductLines";
import Carousel from "@brainhubeu/react-carousel";
import CarouselCard from "../components/CarouselCard";
//REDUX
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Home = () => {
  const data = useSelector((store) => store.dataReducer.data.items);
  const justArrived = data ? data.filter((_, index) => index < 4) : [];
  const topSells = data
    ? data.filter((_, index) => index > 4 && index <= 8)
    : [];
  // deberia ser filtrado por el rating
  const topRating = data
    ? data.filter((_, index) => index > 2 && index < 7)
    : [];

  return  data  ? (
    <div className="Home">
      <div className="Home__container">
        <LargeCard
          urlImage="https://mitienda.moda/img/productos-de-entrega-inmediata.e07d1e57.png"
          redirect="/entrega-inmediata"
        />

        <div>
          <Carousel>
            <CarouselCard
              imageUrl="https://api.tissini.app/img/categories/ropa-interior-prominent.jpg"
              redirectTo="/catalogo/8"
            />
            <CarouselCard
              imageUrl="https://api.tissini.app/img/categories/seamless-prominent.jpg"
              redirectTo="/catalogo/8"
            />
            <CarouselCard
              imageUrl="https://api.tissini.app/img/categories/tapabocas-prominent.jpg"
              redirectTo="/catalogo/8"
            />
          </Carousel>
        </div>

        <LargeCard urlImage="https://api.tissini.app/img/categories/newarrivals.png?vuetify-preload" />

        <div className="Home__grid">
          {justArrived.map((item) => (
            <GridCard
              image={item.imageUrl}
              product={item.name}
              category={item.objectType}
              price={item.price}
              key={item._id}
            />
          ))}
        </div>

        <LargeCard urlImage="https://api.tissini.app/img/categories/bestsellers.png?vuetify-preload" />

        <div className="Home__grid">
          {topSells.map((item) => (
            <GridCard
              image={item.imageUrl}
              product={item.name}
              category={item.objectType}
              price={item.price}
              key={item._id}
            />
          ))}
        </div>

        <LargeCard urlImage="https://api.tissini.app/img/categories/recommended.png?vuetify-preload" />

        <div className="Home__grid">
          {topRating.map((item) => (
            <GridCard
              image={item.imageUrl}
              product={item.name}
              category={item.objectType}
              price={item.price}
              key={item._id}
            />
          ))}
        </div>

        <LargeCard urlImage="https://api.tissini.app/img/categories/season.png?vuetify-preload" />

        <div className="Home__grid">
        {justArrived.map((item) => (
            <GridCard
              image={item.imageUrl}
              product={item.name}
              category={item.objectType}
              price={item.price}
              key={item._id}
            />
          ))}
        </div>

        <LargeCard urlImage="https://api.tissini.app/img/categories/product-lines.png" />

        <ProductLines />
      </div>
    </div>
  ) : <Loading />;
};

export default Home;
