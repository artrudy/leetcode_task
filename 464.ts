function canIWin(maxChoosableInteger: number, desiredTotal: number): boolean {
  const sum = (maxChoosableInteger * (maxChoosableInteger + 1)) / 2;
  if (sum < desiredTotal) return false;

  if (desiredTotal <= 0) return true;

  const memo = new Map<number, boolean>();

  function canWin(usedNumbers: number, currentTotal: number): boolean {
    if (memo.has(usedNumbers)) {
      return memo.get(usedNumbers)!;
    }

    for (let i = 1; i <= maxChoosableInteger; i++) {
      const currentBit = 1 << (i - 1);
      if ((usedNumbers & currentBit) === 0) {
        if (
          currentTotal + i >= desiredTotal ||
          !canWin(usedNumbers | currentBit, currentTotal + i)
        ) {
          memo.set(usedNumbers, true);
          return true;
        }
      }
    }

    memo.set(usedNumbers, false);
    return false;
  }

  return canWin(0, 0);
}
