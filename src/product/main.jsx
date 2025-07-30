import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Product from "./Product";
import ProductList from "./ProductList";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <ProductList />
    </StrictMode>
)