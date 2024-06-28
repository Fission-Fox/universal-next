interface Props {
  carPrice: number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function PriceFormat({ carPrice }: Props) {
   return formatter.format(carPrice).replace(/\.?0+$/, "");
}
