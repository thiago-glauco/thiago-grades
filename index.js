// Import stylesheets
import './style.css';
import { Grade } from './classes/grade';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let grade = new Grade();
grade.addGrade( '0.55' );
grade.addGrade( '1' );
grade.addGrade( '2' );
grade.addGrade( '5' );
console.dir( grade );

let otherGrade;
try{ 
  otherGrade = new Grade( 4, 5, 6, ['10', '5', '2'], 10, '5' );
} catch ( e ) {
  console.warn( e );
  otherGrade = new Grade( );
}
console.dir(otherGrade);
try {
  console.log(otherGrade.average());
} catch ( e ) {
  console.warn( e );
}