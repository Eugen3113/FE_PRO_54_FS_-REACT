// Lessons
import Lesson_02 from "./lessons/Lesson_02/Lesson_02";
import Lesson_03 from "./lessons/lesson_03/Lesson_03";
import Lesson_04 from "./lessons/lesson_04/Lesson_04";
import Lesson_05 from "./lessons/lesson_05/Lesson_05";

// Homeworks
import Homework_02 from "./homeworks/Homework_02/Homework_02";
import Homework_03 from "./homeworks/Homework_03/Homework_03";
import Homework_04 from "./homeworks/Homework_04/Homework_04";

// Consultation
import User from "./consultations/Consultation_02/User";


import "./App.css";

function App() {

   // Consultation_02 User стр.31
  //  const name1 = "Jhon"; 

  return (
    <div className="app">
      {/* Lessons */}
      {/* <Lesson_02 /> */}
      {/* <Lesson_03 /> */}
      {/* <Lesson_04 /> */}
      <Lesson_05 />

      {/* Homeworks */}
      {/* <Homework_02 /> */}
      {/* <Homework_03/> */}
      {/* <Homework_04/> */}
      


      {/* Consultation */}
       {/* Consultation_02 User */}
      {/* <User firstname="Kiril" lastname="Pev" age="243" username="babun" email="j@gmail.com" />
      <User firstname={name1} lastname='Petrov' age='29' username='soson' email='mail1@gmail.com' />
      <User firstname='Inga' lastname='Ivanova' age='13' username='alan' email='mail2@gmail.com' />
      <User firstname='Anna' lastname='Sidorova' age='33' username='bobo' email='mail3@gmail.com' />
      <User firstname='Petr' lastname='Ushanov' age='55' username='gruvi' email='mail4@gmail.com' /> */}
         
    </div>
  );
}

export default App;