interface Props {
  carPrice: number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function PriceFormat({ carPrice }: Props) {
  if (carPrice === 0) {
    return (
      <>
        <p className="text-sm">Ask for Freight Price</p>
      </>
    );
  }
  return formatter.format(carPrice).replace(/\.?0+$/, "");
}
