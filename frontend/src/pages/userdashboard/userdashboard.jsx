import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Trainings = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  const API_KEY = 'ff973f39708a4ca5a5b7ecf0a195131b';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://newsapi.org/v2/everything?q=cybersecurity&apiKey=${API_KEY}`);
        setArticles(response.data.articles.slice(0, 5));
        setError(null);
      } catch (error) {
        setError('Failed to fetch articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleAnswerChange = (question, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [question]: answer }));
  };

  const handleSubmitQuiz = () => {
    const correctAnswers = {
      question1: 'b',
      question2: 'c',
      question3: 'a',
      question4: 'b',
      question5: 'c',
    };

    const newFeedback = {};
    Object.keys(correctAnswers).forEach(question => {
      newFeedback[question] = selectedAnswers[question] === correctAnswers[question] ? 'correct' : 'incorrect';
    });

    setFeedback(newFeedback);
    setQuizSubmitted(true);
  };

  return (
    <div className="flex min-h-screen">
     
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold">User Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="hover:bg-gray-700">
              <Link to="/userdashboard" className="block px-4 py-2">Trainings</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/userpolicies" className="block px-4 py-2">Policies</Link>
            </li>
            <li className="hover:bg-gray-700">
              <Link to="/usersettings" className="block px-4 py-2">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>

    
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Security Awareness Trainings</h1>

     
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Video Trainings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://www.youtube.com/embed/wtCDiS-mZQQ',
              'https://www.youtube.com/embed/GZc-CpV5Z1k',
              'https://www.youtube.com/embed/y-sTPVW6PeY',
              'https://www.youtube.com/embed/hw8eL3TRcwE',
              'https://www.youtube.com/embed/i1Ly1nmCEeo',
              'https://www.youtube.com/embed/hQM2vbieUPU',
              'https://www.youtube.com/embed/yrYgBeION44'
            ].map((url, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg transition-transform transform hover:scale-105">
                <iframe 
                  width="100%" 
                  height="200" 
                  src={url} 
                  title={`YouTube video ${index + 1}`} 
                  frameBorder="0" 
                  allowFullScreen
                />
                <p className="mt-2 text-sm text-gray-600">Video Training {index + 1}</p>
              </div>
            ))}
          </div>
        </section>

       
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Latest Cybersecurity Articles</h2>
          {loading ? (
            <p>Loading articles...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <ul className="space-y-4">
              {articles.map(article => (
                <li key={article.url} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold">
                    {article.title}
                  </a>
                  <p className="text-sm text-gray-500">by {article.author} - {new Date(article.publishedAt).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

    
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Cybersecurity Best Practices</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Use strong and unique passwords for different accounts.</li>
            <li>Enable two-factor authentication wherever possible.</li>
            <li>Be cautious of suspicious emails and links (phishing attempts).</li>
            <li>Regularly update software and systems to patch vulnerabilities.</li>
            <li>Use reputable antivirus and antimalware solutions.</li>
            <li>Educate yourself and your team about the latest cybersecurity threats.</li>
          </ul>
        </section>

     
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-600">Cybersecurity Awareness Quiz</h2>
          <div className="space-y-6">
           
            {[
              { question: 'What is phishing?', options: ['Sending malware to a system', 'Attempt to obtain sensitive information', 'Hacking an email server'], correct: 'b' },
              { question: 'What is the best way to protect against malware?', options: ['Download antivirus software', 'Disable all internet connections', 'Use strong firewalls and regular updates'], correct: 'c' },
              { question: 'Which of the following is NOT a strong password?', options: ['Password123', 'S3cure!Pass', '2h9#MqpV%'], correct: 'a' },
              { question: 'What does two-factor authentication provide?', options: ['Increased security', 'Reduced security', 'None of the above'], correct: 'b' },
              { question: 'What should you do with suspicious emails?', options: ['Delete them immediately', 'Ignore them', 'Open and inspect them'], correct: 'c' },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg text-gray-700 mb-2">{index + 1}. {item.question}</p>
                <ul className="space-y-2">
                  {item.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="flex items-center">
                      <label className="flex items-center space-x-2 block">
                        <input
                          type="radio"
                          name={`question${index + 1}`}
                          value={String.fromCharCode(97 + optionIndex)} // 'a', 'b', 'c', ...
                          onChange={() => handleAnswerChange(`question${index + 1}`, String.fromCharCode(97 + optionIndex))}
                        />
                        <span>{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
                {quizSubmitted && feedback[`question${index + 1}`] && (
                  <p className={`mt-2 ${feedback[`question${index + 1}`] === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
                    {feedback[`question${index + 1}`] === 'correct' ? <FaCheckCircle /> : <FaTimesCircle />} 
                    {feedback[`question${index + 1}`] === 'correct' ? 'Correct!' : 'Incorrect!'}
                  </p>
                )}
              </div>
            ))}

            <button 
              onClick={handleSubmitQuiz}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Quiz
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trainings;
