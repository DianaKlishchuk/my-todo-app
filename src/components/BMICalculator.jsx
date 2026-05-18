import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0 || w <= 0) return null;
    return (w / (h * h)).toFixed(1);
  };

  const getDiagnosis = (bmi) => {
    if (bmi < 18.5) return { text: 'Недостатня вага', color: '#2196f3' };
    if (bmi < 25)   return { text: 'Норма', color: '#4caf50' };
    if (bmi < 30)   return { text: 'Надмірна вага', color: '#ff9800' };
    return { text: 'Ожиріння', color: '#f44336' };
  };

  const bmi = calculateBMI();
  const diagnosis = bmi ? getDiagnosis(bmi) : null;

  return (
    <div className="bmi-container">
      <h2>Калькулятор ІМТ</h2>
      <div className="bmi-form">
        <label>
          Зріст (см):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="наприклад, 170"
          />
        </label>
        <label>
          Вага (кг):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="наприклад, 65"
          />
        </label>
      </div>
      {bmi && (
        <div className="bmi-result">
          <p>Ваш ІМТ: <strong>{bmi}</strong></p>
          <p style={{ color: diagnosis.color, fontWeight: 'bold' }}>
            {diagnosis.text}
          </p>
        </div>
      )}
    </div>
  );
}