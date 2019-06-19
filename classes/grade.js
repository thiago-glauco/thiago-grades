export class Grade {

  constructor( vals ) {
    //This constructor receive arrays or a sequence of values and check if these values are valid numbers
    this.grades = [];
    console.dir(arguments);

    if( arguments.length > 0 ) {
      //If there are arguments, lets check if they are arrays or scalar values
      for( let arg of arguments ) {
        if( Array.isArray(arg) ) {
          //if the arg is an array we check each value before adding to the grades
          if( arg.every( this.checkNum )) {
            this.grades = this.grades.concat( arg );
          } else {
            throw new Exception("Valor não numérico ou fora do range permitido");
          }
        } else {
          //if it is a scalar value, we check and add to the array
          this.addGrade(arg)
        }
      }
    } else {
      this.grades = [];
    }
    /*
    if( vals !== undefined ) {
      if( Array.isArray(vals) ) {
        if( vals.every( this.checkNum )) {
          this.grades = vals.slice();
        } else {
          throw new Exception("Valor não numérico ou fora do range permitido");
        }
      }
    } else {
      this.grades = [];
    }*/
  }

  checkNum( n ) {
    const expression = new RegExp('^(\\d{1,2})(\\.\\d{1,2})?$');
    console.log("Grade is " + expression.test(n));
    if ( expression.test(n) ){
      let value = Number.parseFloat( n );
      if( value >= 0 && value <= 10 ){
        return true;
      }
    }
    return false;
  }

  addGrade( grade ) {
    if( this.checkNum( grade ) ) {
      this.grades.push( grade );
    }
    else {
      throw new Exception("Valor não numérico ou fora do range permitido");
    }
  }

  average( ) {
    if( this.grades.length >= 1 ){
      let sum = this.grades.reduce( ( a, b ) => 
        (Number.parseFloat(a) + Number.parseFloat(b) ) );
      let avg = sum/this.grades.length
      return avg.toFixed(2);
    }
    else throw new Exception("Não é possível calcular a média! Não existem notas!");
  }
}

class Exception {
  constructor( msg ) {
    this.message = msg;
    this.name = "GradeException"
  }

  toString() {
    return this.name + ': "' + this.message + '"';
  }
}