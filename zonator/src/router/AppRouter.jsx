import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import CreateRecipePage from './pages/CreateRecipePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Private Routes (Protected) */}
        <Route path="/create-recipe" element={<CreateRecipePage />} />
        <Route path="/edit-recipe/:recipeId" element={<CreateRecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;