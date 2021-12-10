export class Statistique {
  id: number;
  title: string;
  value: number;
  unit: string;

  constructor(id: number, title: string, value: number, unit: string) {
    this.id = id;
    this.title = title;
    this.value = value;
    this.unit = unit;
  }
}
