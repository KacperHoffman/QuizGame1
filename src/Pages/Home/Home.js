import { MenuItem, TextField, Button } from '@mui/material';
import './Home.css';
import categories, { } from '../../Data/categories'
import { useState } from 'react';
import { useHistory} from "react-router";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const Home = ({name, setName, fetchQuestions}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
          setError(true);
          return;
        } else {
          setError(false);
          fetchQuestions(category, difficulty);
          history.push("/quiz");
        }
      };


      return (
        <div className="content">
          <div className="settings">
            <span style={{ fontSize: 30 }}>Ustawienia gry</span>
            <div className="settings_select">
              {error && <ErrorMessage>Wypełnij wszystkie pola!</ErrorMessage>}
              <TextField
                style={{ marginBottom: 25 }}
                label="Wpisz swoje imię..."
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />

            <TextField
            select
            label="Wybierz kategorię"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Wybierz poziom trudności"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Łatwy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Średni
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Trudny
            </MenuItem>
          </TextField>


            <Button variant='container' color="primary" size="large"
            onClick={handleSubmit}>
                Rozpocznij Quiz

            </Button>



             </div>
        
         </div>

         <img src='quiz-logo-speech-bubble-symbols-flat-concept-social-communication-chatting-interview-voting-discussion-talk-team-dialog-190997491.jpg' className='banner' alt="quiz app"></img>
        </div>
    );
};

export default Home