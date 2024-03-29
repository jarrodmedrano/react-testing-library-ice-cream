import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { ESMap, Map } from 'typescript';
import { pricePerItem } from '../constants';
import { formatCurrency } from '../utilities';

// @ts-ignore
const OrderDetails = createContext();

export const useOrderDetails = () => {
  const context = useContext(OrderDetails);
  if (!context) {
    throw new Error(
      'useOrderDetails must be used within an OrderDetailsProvider'
    );
  }

  return context;
};

const calculateSubtotal = (
  optionType: 'scoops' | 'toppings',
  optionCounts: {
    scoops: ESMap<string, string>;
    toppings: ESMap<string, string>;
  }
) => {
  let optionCount = 0;
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[optionType];
};

export const OrderDetailsProvider = (props) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);

  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  });

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);

    const grandTotal = scoopsSubtotal + toppingsSubtotal;

    setTotals({
      scoops: formatCurrency(scoopsSubtotal),
      toppings: formatCurrency(toppingsSubtotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    const updateItemCount = (
      itemName: string,
      newItemCount: string,
      optionType: string
    ) => {
      const newOptionCounts = { ...optionCounts };
      console.log('me', optionCounts);
      //update option count for this item with new values
      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);
    };
    // getter: object containing options count for scoops and toppings, subtootals and totals
    // setter: updateOptionCount

    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);
  return <OrderDetails.Provider value={value} {...props} />;
};
