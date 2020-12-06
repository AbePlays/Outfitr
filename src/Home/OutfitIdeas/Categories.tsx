import React from "react";
import { ScrollView, View } from "react-native";

import Category from "./Category";

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#ffe8e9",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#beecc4",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#bfeaf5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#f1e0ff",
  },
  {
    id: "accesories",
    title: "Accesories",
    color: "#ff38e9",
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <Category key={cat.id} category={cat} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
