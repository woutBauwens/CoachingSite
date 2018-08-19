export class Calculator {

public days: number;
  public kayak: number;
    public climbing: number;
    public fitness: number;
    public walking: number;
    private calories: number;

  constructor(
    public weigth: number,
    public gender: string
  ) {  }

  Calculate(){
    this.calories = 10 * this.weigth + 1500;
    this.calories = this.calories*this.days;
    this.calories = this.calories + this.kayak*100 + this.climbing*500 + this.fitness*500 + this.walking*100;
    this.calories = this.calories*this.weigth/60;
    if(this.gender=="F"){
      this.calories = this.calories*0.75;
    }
    return this.calories;
  }
}
