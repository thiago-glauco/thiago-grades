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