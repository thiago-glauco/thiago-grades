export class Grade {

  constructor( vals ) {
    this.grades = [];
    console.dir(arguments);
    if( arguments.length > 0 ) {
      for( let arg of arguments ) {
        if( Array.isArray(arg) ) {
          if( arg.every( this.checkNum )) {
            this.grades = this.grades.concat( arg );
          } else {
            throw new Exception("Valor não numérico ou fora do range permitido");
          }
        } else {
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
    let sum = this.grades.reduce( ( a, b ) => 
      (Number.parseFloat(a) + Number.parseFloat(b) ) );
    let avg = sum/this.grades.length
    return avg.toFixed(2);
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