import { useState, useEffect, useMemo, useRef } from 'react';
import { erc20ABI, useNetwork, usePublicClient } from 'wagmi';
import { parseUnits } from 'viem';

const usePriceImpact = (ratio, swapAmount, swapSecondAmount) => {
  const [priceImpact, setPriceImpact] = useState(0.0);

  useEffect(() => {
    if(ratio === 0 || swapAmount === 0 || swapSecondAmount === 0) {
      setPriceImpact(0.00);
    } else {
      const basePriceScaled = ratio * swapAmount;
      const priceImpact = (1 - swapSecondAmount / basePriceScaled) * 100;
      if(priceImpact > 0 && priceImpact < 100) {
        setPriceImpact(priceImpact.toFixed(2));
      }
    }
  }, [ratio, swapAmount, swapSecondAmount])

  return priceImpact;
};

export { usePriceImpact }