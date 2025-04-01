export type RegistrationType =
  | "Undergraduate"
  | "Postgraduate"
  | "Retirees"
  | "All others"
  | "International";

interface PriceRange {
  startDate: Date;
  endDate: Date;
  amount: number;
}

const pricingStructure: Record<RegistrationType, PriceRange[]> = {
  Undergraduate: [
    {
      startDate: new Date("2025-03-31"),
      endDate: new Date("2025-05-31"),
      amount: 5000,
    },
    {
      startDate: new Date("2025-06-01"),
      endDate: new Date("2025-07-31"),
      amount: 7500,
    },
    {
      startDate: new Date("2025-08-01"),
      endDate: new Date("2025-09-30"),
      amount: 10000,
    },
  ],
  Postgraduate: [
    {
      startDate: new Date("2025-03-31"),
      endDate: new Date("2025-05-31"),
      amount: 10000,
    },
    {
      startDate: new Date("2025-06-01"),
      endDate: new Date("2025-07-31"),
      amount: 15000,
    },
    {
      startDate: new Date("2025-08-01"),
      endDate: new Date("2025-09-30"),
      amount: 15000,
    },
  ],
  Retirees: [
    {
      startDate: new Date("2025-03-31"),
      endDate: new Date("2025-05-31"),
      amount: 15000,
    },
    {
      startDate: new Date("2025-06-01"),
      endDate: new Date("2025-07-31"),
      amount: 20000,
    },
    {
      startDate: new Date("2025-08-01"),
      endDate: new Date("2025-09-30"),
      amount: 30000,
    },
  ],
  "All others": [
    {
      startDate: new Date("2025-03-31"),
      endDate: new Date("2025-05-31"),
      amount: 30000,
    },
    {
      startDate: new Date("2025-06-01"),
      endDate: new Date("2025-07-31"),
      amount: 35000,
    },
    {
      startDate: new Date("2025-08-01"),
      endDate: new Date("2025-09-30"),
      amount: 40000,
    },
  ],
  International: [
    {
      startDate: new Date("2025-03-31"),
      endDate: new Date("2025-09-30"),
      amount: 100,
    },
  ],
};

export function getRegistrationFee(type: RegistrationType): number {
  const now = new Date();
  const priceRanges = pricingStructure[type];

  const currentRange = priceRanges.find(
    (range) => now >= range.startDate && now <= range.endDate
  );

  if (!currentRange) {
    // If current date is outside all ranges, return the last range's amount
    return priceRanges[priceRanges.length - 1].amount;
  }

  return currentRange.amount;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
}
