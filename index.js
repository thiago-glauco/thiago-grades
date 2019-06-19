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
  otherGrade = new Grade( ['10', '5', '2'] );
} catch ( e ) {
  console.warn( e );
  otherGrade = new Grade( );
}
console.dir(otherGrade)
console.log(otherGrade);