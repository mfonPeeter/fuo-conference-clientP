export type RegistrationType =
  | "Undergraduate"
  | "Postgraduate"
  | "Retirees"
  | "All others";

export type ParticipantType = "Nigerian" | "International";

interface PriceRange {
  startDate: Date;
  endDate: Date;
  amount: {
    nigerian: number;
    international: number;
  };
}

const pricingStructure: Record<RegistrationType, PriceRange[]> = {
  Undergraduate: [
    {
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-08-31"),
      amount: {
        nigerian: 4000,
        international: 10,
      },
    },
    {
      startDate: new Date("2024-09-01"),
      endDate: new Date("2024-09-30"),
      amount: {
        nigerian: 5000,
        international: 15,
      },
    },
    {
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-12-31"),
      amount: {
        nigerian: 7500,
        international: 20,
      },
    },
  ],
  Postgraduate: [
    {
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-08-31"),
      amount: {
        nigerian: 8000,
        international: 20,
      },
    },
    {
      startDate: new Date("2024-09-01"),
      endDate: new Date("2024-09-30"),
      amount: {
        nigerian: 10000,
        international: 25,
      },
    },
    {
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-12-31"),
      amount: {
        nigerian: 15000,
        international: 30,
      },
    },
  ],
  Retirees: [
    {
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-08-31"),
      amount: {
        nigerian: 10000,
        international: 40,
      },
    },
    {
      startDate: new Date("2024-09-01"),
      endDate: new Date("2024-09-30"),
      amount: {
        nigerian: 15000,
        international: 50,
      },
    },
    {
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-12-31"),
      amount: {
        nigerian: 20000,
        international: 60,
      },
    },
  ],
  "All others": [
    {
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-08-31"),
      amount: {
        nigerian: 20000,
        international: 100,
      },
    },
    {
      startDate: new Date("2024-09-01"),
      endDate: new Date("2024-09-30"),
      amount: {
        nigerian: 30000,
        international: 100,
      },
    },
    {
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-12-31"),
      amount: {
        nigerian: 35000,
        international: 110,
      },
    },
  ],
};

export function getRegistrationFee(
  type: RegistrationType,
  participantType: ParticipantType
): number {
  const now = new Date();
  const priceRanges = pricingStructure[type];

  const currentRange = priceRanges.find(
    (range) => now >= range.startDate && now <= range.endDate
  );

  if (!currentRange) {
    // If current date is outside all ranges, return the last range's amount
    return priceRanges[priceRanges.length - 1].amount[
      participantType.toLowerCase() as "nigerian" | "international"
    ];
  }

  return currentRange.amount[
    participantType.toLowerCase() as "nigerian" | "international"
  ];
}

export function formatCurrency(
  amount: number,
  participantType: ParticipantType
): string {
  return new Intl.NumberFormat(
    participantType === "Nigerian" ? "en-NG" : "en-US",
    {
      style: "currency",
      currency: participantType === "Nigerian" ? "NGN" : "USD",
    }
  ).format(amount);
}
