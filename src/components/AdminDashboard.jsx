import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiSave, FiEdit, FiLogOut, FiSettings, FiUsers, FiMessageSquare, FiGift } = FiIcons;

const AdminDashboard = () => {
  const { user, signIn, signOut } = useAuth();
  const { theme, changeTheme, themes } = useTheme();
  const { t } = useLanguage();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulate login for demo
    if (loginForm.email === 'admin@unitythreads.com' && loginForm.password === 'admin123') {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const dashboardStats = {
    totalRSVPs: 147,
    confirmedGuests: 112,
    guestbookMessages: 23,
    registryItems: 8
  };

  const recentActivity = [
    { type: 'rsvp', message: 'Sarah Johnson confirmed attendance', time: '2 hours ago' },
    { type: 'guestbook', message: 'New blessing from राज शर्मा', time: '4 hours ago' },
    { type: 'registry', message: 'Silver Pooja Thali Set was gifted', time: '6 hours ago' },
    { type: 'rsvp', message: 'Maria Rodriguez updated guest count', time: '1 day ago' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indian-background to-indian-primary/10 flex items-center justify-center p-4">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indian-primary to-indian-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-script text-3xl text-indian-text mb-2">
              Unity Threads Admin
            </h1>
            <p className="text-indian-text/70 font-serif">
              Manage your wedding website
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-indian-text font-sans font-semibold mb-2">
                Email Address
              </label>
              <div className="relative">
                <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                  placeholder="admin@unitythreads.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-indian-text font-sans font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indian-primary w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={loginForm.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-12 pr-12 py-3 border border-indian-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indian-primary/30 focus:border-indian-primary transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indian-primary hover:text-indian-secondary transition-colors"
                >
                  <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-indian-primary to-indian-secondary text-white py-3 rounded-lg font-sans font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-indian-primary/10 rounded-lg">
            <p className="text-indian-text/70 text-sm text-center">
              <strong>Demo Login:</strong><br />
              Email: admin@unitythreads.com<br />
              Password: admin123
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indian-background to-indian-primary/5">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-indian-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indian-primary to-indian-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">UT</span>
              </div>
              <div>
                <h1 className="font-script text-2xl text-indian-text">Unity Threads</h1>
                <p className="text-indian-text/70 text-sm">Admin Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => window.open('/', '_blank')}
                className="bg-indian-primary/10 text-indian-primary px-4 py-2 rounded-lg font-sans font-semibold text-sm hover:bg-indian-primary/20 transition-colors flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiEye} className="w-4 h-4" />
                <span>Preview Site</span>
              </motion.button>
              
              <motion.button
                onClick={handleLogout}
                className="bg-red-500/10 text-red-500 px-4 py-2 rounded-lg font-sans font-semibold text-sm hover:bg-red-500/20 transition-colors flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                <span>Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-indian-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: FiSettings },
              { id: 'rsvps', label: 'RSVPs', icon: FiUsers },
              { id: 'guestbook', label: 'Guestbook', icon: FiMessageSquare },
              { id: 'registry', label: 'Registry', icon: FiGift },
              { id: 'settings', label: 'Settings', icon: FiEdit }
            ].map(tab => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-4 border-b-2 font-sans font-semibold text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-indian-primary text-indian-primary'
                    : 'border-transparent text-indian-text/70 hover:text-indian-text'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={tab.icon} className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total RSVPs', value: dashboardStats.totalRSVPs, color: 'from-blue-500 to-blue-600' },
                { label: 'Confirmed Guests', value: dashboardStats.confirmedGuests, color: 'from-green-500 to-green-600' },
                { label: 'Guestbook Messages', value: dashboardStats.guestbookMessages, color: 'from-purple-500 to-purple-600' },
                { label: 'Registry Items Gifted', value: dashboardStats.registryItems, color: 'from-orange-500 to-orange-600' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white font-bold text-xl">{stat.value}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-indian-text">{stat.label}</h3>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-script text-2xl text-indian-text mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-indian-background/30 rounded-lg">
                    <div className="w-10 h-10 bg-indian-primary/20 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiUsers} className="w-5 h-5 text-indian-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-indian-text font-sans">{activity.message}</p>
                      <p className="text-indian-text/60 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === 'settings' && (
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-script text-3xl text-indian-text mb-8">Website Settings</h2>
            
            <div className="space-y-8">
              {/* Theme Selection */}
              <div>
                <h3 className="font-sans font-semibold text-indian-text mb-4">Theme Selection</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(themes).map(([key, themeData]) => (
                    <motion.button
                      key={key}
                      onClick={() => changeTheme(key)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        theme === themeData ? 'border-indian-primary bg-indian-primary/10' : 'border-gray-200 hover:border-indian-primary/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div 
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: themeData.colors.primary }}
                        />
                        <span className="font-sans font-semibold text-sm">{themeData.name}</span>
                      </div>
                      <div className="flex space-x-1">
                        {Object.values(themeData.colors).slice(0, 4).map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <motion.button
                className="bg-gradient-to-r from-indian-primary to-indian-secondary text-white px-8 py-3 rounded-lg font-sans font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiSave} className="w-5 h-5" />
                <span>Save Changes</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Placeholder for other tabs */}
        {['rsvps', 'guestbook', 'registry'].includes(activeTab) && (
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-script text-3xl text-indian-text mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
            </h2>
            <p className="text-indian-text/70 font-serif">
              This section would contain detailed management tools for {activeTab}.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;