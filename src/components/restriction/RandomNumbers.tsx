type RandomNumbersType = {
    value: number
}

type PositiveNumber = RandomNumbersType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type NegativeNumber = RandomNumbersType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
}

type Zero = RandomNumbersType & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never
}

type RandomNumbersProps = PositiveNumber | NegativeNumber | Zero

const RandomNumbers = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumbersProps) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </div>
  );
};

export default RandomNumbers;
