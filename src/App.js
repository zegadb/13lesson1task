import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./styles.css";
import AboutPage from "./AboutPage";
import ContactsPage from "./ContactsPage";
import Examples from "./Examples";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/about">О себе</Link>
            <Link to="/examples">Примеры работ</Link>
            <Link to="/contacts">Контактная информация</Link>
          </nav>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
