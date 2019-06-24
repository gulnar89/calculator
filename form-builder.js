//jshint esversion:6
const h1 =[{name:'id',value:'big-heading'}];

const labelFullname = [{name:'for',value:'fullname'},{name:'id',value:'labelFullname'},{name:'class',value:'input-style'}];
const labelEmail = [{name:'for',value:'email'},{name:'id',value:'labelEmail'},{name:'class',value:'input-style'}];
const labelPassword = [{name:'for',value:'password'},{name:'id',value:'labelPassword'},{name:'class',value:'input-style'}];
const labelPhoto = [{name:'for',value:'photo'},{name:'id',value:'labelPhoto'},{name:'class',value:'input-style'}];
const labelBirthdate = [{name:'for',value:'birthdate'},{name:'id',value:'labelBirthdate'},{name:'class',value:'input-style'}];
const labelPhone = [{name:'for',value:'phone'},{name:'id',value:'labelPhone'},{name:'class',value:'input-style'}];

const form =[{name:'id',value:'reg-form'}];
const iUser =[{name:'class',value:'fas fa-user'}];
const iEmail =[{name:'class',value:'fas fa-envelope'}];
const iPassword =[{name:'class',value:'fas fa-key'}];
const iPhoto =[{name:'class',value:'fas fa-camera'}];
const iPhone =[{name:'class',value:'fas fa-phone'}];
const iBirthdate =[{name:'class',value:'fas fa-birthday-cake'}];

const errorMessage =[{name:'class',value:'error-message'}];

const inputFullname =[{name:'type',  value:'text'},
                       {name:'class', value:'input-text'},
                       {name:'name',value:'fullname'},
                       {name:'placeholder',value:'Enter your full name'},
                        {name:'required',value:'required'},
                      {name:'id',value:'fullname'},
                      {name:'autocomplete',value:'off'}];

const inputEmail =[{name:'type',value:'text'},
                   {name:'class',value:'input-text'},
                   {name:'name',value:'email'},
                   {name:'placeholder',value:'Email'},
                    {name:'required',value:'required'},
                  {name:'id',value:'email'},
                  {name:'autocomplete',value:'off'}];

const inputPhoto =[{name:'type',value:'file'},
                   {name:'class',value:'input-text'},
                   {name:'name',value:'photo'},
                    {name:'required',value:'required'},
                  {name:'id',value:'photo'},
                  {name:'autocomplete',value:'off'},
                  {name:'onChange',value:'checkFile(this)'}];

const inputPassword =[{name:'type',value:'password'},
                      {name:'class',value:'input-text'},
                      {name:'name',value:'password'},
                       {name:'placeholder',value:'********'},
                        {name:'required',value:'required'},
                      {name:'id',value:'password'},
                      {name:'autocomplete',value:'off'}];

const inputBirthdate =[{name:'type',value:'date'},
                     {name:'class',value:'input-text'},
                     {name:'name',value:'birthdate'},
                      {name:'value',value:moment().format('YYYY-MM-DD')},
                       {name:'required',value:'required'},
                     {name:'id',value:'birthdate'},
                     {name:'autocomplete',value:'off'},
                     {name:'max',value:moment().format('YYYY-MM-DD')}];

const inputPhone =[{name:'type',value:'tel'},
                      {name:'class',value:'input-text'},
                      {name:'name',value:'phone'},
                       {name:'placeholder',value:'Phone number'},
                        {name:'required',value:'required'},
                      {name:'id',value:'phone'},
                      {name:'autocomplete',value:'off'}];

const buttonSubmit =[{name:'type',value:'submit'},
                      {name:'class',value:'button-submit'}];


createElement('h1',h1,'Sign up now','#reg-container');
createElement('form',form,'','#reg-container');


//Full tname
createElement('label',labelFullname,'FULL NAME','#reg-form');
createElement('input',inputFullname,'','#labelFullname');
createElement('i',iUser,'','#labelFullname');
createElement('p',errorMessage,'Your name must include only letters and -','#labelFullname');

//Email
createElement('label',labelEmail,'EMAIL','#reg-form');
createElement('input',inputEmail,'','#labelEmail');
createElement('i',iEmail,'','#labelEmail');
createElement('p',errorMessage,'Wrong email! Example: sample@sample.sample','#labelEmail');

//Password
createElement('label',labelPassword,'PASSWORD','#reg-form');
createElement('input',inputPassword,'','#labelPassword');
createElement('i',iPassword,'','#labelPassword');
createElement('p',errorMessage,'Make sure your password includes at least one uppercase and lowercase letter,a number and a special character','#labelPassword');

//Phone number
createElement('label',labelPhone,'PHONE','#reg-form');
createElement('input',inputPhone,'','#labelPhone');
createElement('i',iPhone,'','#labelPhone');
createElement('p',errorMessage,'Make sure you enter onlu digits and +!','#labelPhone');

//Date of Birth
createElement('label',labelBirthdate,'DATE OF BIRTH','#reg-form');
createElement('input',inputBirthdate,'','#labelBirthdate');
createElement('i',iBirthdate,'','#labelBirthdate');
createElement('p',errorMessage,'Wrong type of date!','#labelBirthdate');

//Photo
createElement('label',labelPhoto,'PHOTO','#reg-form');
createElement('input',inputPhoto,'','#labelPhoto');
createElement('i',iPhoto,'','#labelPhoto');
createElement('p',errorMessage,'Please make sure your file is in png or jpg format and less than 5 MB.','#labelPhoto');

//Submit
createElement('button',buttonSubmit,'Send','#reg-form');

document.getElementById("birthdate").setAttribute("max", moment().format('YYYY-MM-DD'));

document.querySelector('#fullname').addEventListener('keyup',(e)=> {
    errorClassToggle('fullname',e);
});

document.querySelector('#fullname').addEventListener('keypress',(e)=> {
  const chars ='!#$%^~*()+="?;:<>"&_@0123456789';
  if (chars.includes(e.key)){
    e.preventDefault();
    console.log(e.keyCode);
  }
});

document.querySelector('#email').addEventListener('keyup',(e)=> {
  errorClassToggle('email',e);
});

document.querySelector('#email').addEventListener('keypress',(e)=> {
  const chars ='!#$%^~*()+="?;:<>"&';
  if (chars.includes(e.key)){
    e.preventDefault();
  }
});

document.querySelector('#password').addEventListener('keyup',(e)=> {
  errorClassToggle('password',e);
});

document.querySelector('#password').addEventListener('keypress',(e)=> {
  if (e.target.value.length>10){
    e.preventDefault();
  }
});

document.querySelector('#phone').addEventListener('keypress',(e)=> {
  if ((e.keyCode < 48 || e.keyCode > 57||e.target.value.length>12)&&e.keyCode!=43) {
    e.preventDefault();
  }
});

document.querySelector('#phone').addEventListener('keyup',(e)=>{
  errorClassToggle('phone',e);
});

document.querySelector('#birthdate').addEventListener('keypress',function(e) {
  if (e.keyCode < 48 || e.keyCode > 57||e.target.value.length>10) {
    e.preventDefault();
  }
});

document.querySelector('#birthdate').addEventListener('keyup',(e)=>{
  errorClassToggle('birthdate',e);
});
