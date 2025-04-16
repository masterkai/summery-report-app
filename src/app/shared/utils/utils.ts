export interface Year {
  year: string
  code: string
}
export interface Quarter {
  quarter: "1Q" | "2Q" | "3Q" | "4Q"
  code: string
}
class Utils {
  yearOptionGenerator(from: number) {
    const currentYear = new Date().getFullYear();
    const years: Year[] = [];
    for (let i = from; i <= currentYear; i++) {
      years.push({ year: `${i}`, code: `${i}` });
    }
    return years;
  }

  quarterOptionGenerator(): Quarter[] {
    return [
      { quarter: "1Q", code: "1" },
      { quarter: "2Q", code: "2" },
      { quarter: "3Q", code: "3" },
      { quarter: "4Q", code: "4" }
    ]
  }
}

const utils = new Utils();
export default utils;
