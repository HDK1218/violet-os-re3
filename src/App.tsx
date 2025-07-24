import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MyRoom from './pages/MyRoom'
import Tasks from './pages/Tasks'
import Projects from './pages/Projects'
import Quests from './pages/Quests'
import Scenarios from './pages/Scenarios'
import Chat from './pages/Chat'
import Inbox from './pages/Inbox'
import Profile from './pages/Profile'
import Inventory from './pages/Inventory'
import Staff from './pages/Staff'
import Reports from './pages/Reports'
import Admin from './pages/Admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-room" element={<MyRoom />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
