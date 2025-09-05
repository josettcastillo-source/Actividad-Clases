export class Player {
    name;
    level;

    constructor(name,level) {
      this.name = name;
      this.level = level;    
    }
    info(){
      return `${this.name} has reached Level ${this.level}!`;
    }
  }

  const p1 = new Player("Lalo", 3);
  console.log(p1.info());
  
