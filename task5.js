export class Player {
    name;
    level;
    xp;

    constructor(name,level,xp) {
      this.name = name;
      this.level = level;  
      this.xp = xp;  
    }
    info(){
      console.log(`${this.name} has reached Level ${this.level}!`);
    }
    raiseXp(){
        this.xp += 100;
        return this.levelUp();
    }

    levelUp(){
        if(this.xp >= 500){
            this.level++;

            this.xp -= 500;
            return `${this.name} ha alcanzado 100pts de experiencia y subió de nivel, ahora es nivel ${this.level}`
         }else{
            return `${this.name} tiene ${this.xp} de exp y aún no es suficiente para subir de nivel`;
         }
    }
  }

  const p1 = new Player("Lalo", 3, 300);

  for(let i = 0; i < 7; i++){
  console.log(p1.raiseXp());
  }
  
  