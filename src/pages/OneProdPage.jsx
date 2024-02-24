import { Button } from "@material-tailwind/react";
import React from "react";
const features = [
  { name: "Caracteristicas", description: "Descripcion" },
  { name: "Caracteristicas", description: "Descripcion" },
  { name: "Caracteristicas", description: "Descripcion" },
  { name: "Caracteristicas", description: "Descripcion" },
  { name: "Caracteristicas", description: "Descripcion" },
  { name: "Caracteristicas", description: "Descripcion" },
];
const OneProdPage = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nombre del producto
          </h2>
          <div className="flex justify-between">
            <p className="mt-4 text-gray-500">Descripcion del producto </p>
            <p className="mt-4 text-gray-500">Precio del producto </p>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2  gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div className="text-center ">
          <Button className="color-nav-footer">Consultar stock </Button>
        </div>
      </div>
    </div>
  );
};

export default OneProdPage;
