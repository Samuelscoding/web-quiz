import React from 'react';
import './App.css'; 
import Taskleiste from './components/Taskleiste';
import Quizblock from './components/QuizBlock';

function App() {

  const handleMatrizenClick = () => {
    console.log('Matrizentest wurde ausgewählt');
  }

  return (
    <div className="App">
      <Taskleiste />
      <h2>Wählen Sie bitte einer drei Quiz-Möglichkeiten aus!</h2>
      <div className="quiz-container">
        <Quizblock
          title="Matrizentest"
          description="Wählen Sie das richtige Bild um die Matrix zu vervollständigen"
          imageUrl={require('./resources/images/Example 1br.png')}
          onClick={handleMatrizenClick}
        />
        <Quizblock
          title="Kreativitätstest"
          description="Lass deine Kreativität freien Lauf und beantworte alle Fragen"
          imageUrl={require('./resources/images/Kreativitätstest.jpg')}
        />
        <Quizblock
          title="Persönlichkeitstest"
          description="Führe eine Selbstreflexion aus und bewerte dich selber"
          imageUrl={require('./resources/images/Persönlichkeitstest.png')}
        />
      </div>
    </div>
  );
}

export default App;
