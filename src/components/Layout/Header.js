import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* cannot use dot notation with css class names that have spaces */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table of food" />
      </div>
    </>
  );
};

export default Header;
