import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/Login.css';
import logo from '../../assets/logo.png';
import { Eye, EyeSlash } from "react-bootstrap-icons";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>

        <div className="text-center mb-3">
          <img src={logo} alt="Logo" className="img-fluid" style={{ maxHeight: '80px' }} />
        </div>

        <h5 className="text-center mb-2 text-muted">Government of Lao PDR</h5>
        <h3 className="text-center mb-4">LoginForm</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>

            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
          >
            LoginForm
          </button>

          {/* Forgot Password */}
          <div className="text-center mb-3">
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password?
            </button>
          </div>

          {/* Info */}
          <div className="alert alert-info text-center p-2">
            For User ID and Password, please contact your <strong>Local Admin</strong>.
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;