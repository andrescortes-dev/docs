import {
  Coffee,
  CreditCard,
  HeartHandshake,
  Landmark,
  Smartphone,
  Wallet,
} from "lucide-react";
import { PaymentMethod } from "./_types";

export const PAYMENT_METHODS: {
  global: PaymentMethod[];
  colombia: PaymentMethod[];
} = {
  global: [
    {
      id: "paypal",
      title: "PayPal",
      color: "#0070ba",
      desc: "Internacional / Tarjeta",
      Icon: CreditCard,
      href: "https://paypal.me/",
    },
    {
      id: "patreon",
      title: "Patreon",
      color: "#ff424d",
      desc: "Mecenazgo mensual",
      Icon: HeartHandshake,
      href: "https://patreon.com/",
    },
    {
      id: "coffee",
      title: "Buy Me a Coffee",
      color: "#FFDD00",
      desc: "Donación puntual",
      Icon: Coffee,
      href: "https://buymeacoffee.com/",
    },
  ],
  colombia: [
    {
      id: "nequi",
      title: "Nequi",
      color: "#E10075",
      Icon: Smartphone,
      qr: "/img/donar/nequi-qr.png",
    },
    {
      id: "daviplata",
      title: "Daviplata",
      color: "#ED1C24",
      Icon: Wallet,
      qr: "/img/donar/daviplata-qr.png",
    },
    {
      id: "bancolombia",
      title: "Bancolombia",
      color: "#fdc82d",
      Icon: Landmark,
      qr: "/img/donar/bancolombia-qr.png",
    },
  ],
};
