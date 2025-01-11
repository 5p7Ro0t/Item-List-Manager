// Importing React, useState, and CSS styles
import React, { useState } from 'react';
import './App.css'; // Importing CSS for styles

function ItemListManager() {
  // State to manage the list of items and input field value
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handler for adding a new item
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]); // Add new item to the list
      setInputValue(''); // Clear input field
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <img className='logo'
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
          alt="Logo"
        />
        <h1>
          Item List Manager
        </h1>
      </header>
      <main className="main-content">
        <h2 className="list-title" style={{"margin-right":'220px'}}>Item List</h2>
        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="add-button" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default ItemListManager;
