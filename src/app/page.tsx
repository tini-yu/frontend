import Link from "next/link";
import Catalog from "@/components/Catalog";

import Footer from "@/components/Footer";
import CatalogCard from "@/components/CatalogCard";
import HeaderMenu from "@/components/HeaderMenu";
import Promo from "@/components/Promo";

export default function Home() {
  return (
    <div>
      <HeaderMenu />
      <Promo />
    </div>
  );
}
