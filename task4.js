export class Player {
    name;
    level;

    constructor(name,level) {
      this.name = name;
      this.level = level;    
    }
    info(){
      console.log(`${this.name} has reached Level ${this.level}!`);
    }
    levelUp(){
     this.level++;
    }
  }

  const p1 = new Player("Lalo", 3);
  p1.info();
  p1.levelUp();
  p1.info();
  
  