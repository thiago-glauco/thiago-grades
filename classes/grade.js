export class Grade {

  constructor( vals ) {
    if( vals !== undefined ) {
      if( Array.isArray(vals) ) {
        if( vals.some( this.checkN )) {
          this.grades = [];
        } else {
          this.grades = vals.slice();
        }
      }
    } else {
      this.grades = [];
    }
    this.error = [];
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
      return 1;
    }
    else {
      console.log( "Cannot add grade!")
      return -1;
    }
  }
}