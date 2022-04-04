import React from 'react';
import styles from "./guid.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const Guid = ({setIsShown}) => {

    const handler =()=>{
        setIsShown(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>words that are recommended to search</h1>
                <FontAwesomeIcon className={styles.Xmark} onClick={handler} icon={faXmark}/>
            </div>
           <div className={styles.all_guides}>
               <div className={styles.guides}>
                   <h4>Nutrient Guide</h4>
                   <p>Added sugar</p>
                   <p>Calcium, Ca	</p>
                   <p>Carbohydrate (net)</p>
                   <p>Carbohydrate, by difference</p>
                   <p>Cholesterol</p>
                   <p>Energy</p>
                   <p>Fatty acids, total monounsaturated	</p>
                   <p>Fiber, total dietary	</p>
                   <p>Vitamin K</p>
                   <p>Vitamin A</p>
                   <p>water</p>
                   <p>Folate, food	</p>
                   <p>Iron, Fe</p>
                   <p>Niacin</p>
                   <p>Magnesium</p>
                   <p>Niacin</p>
                   <p>Sodium, Na</p>
                   <p>Protein</p>
                   <p>Zinc, Zn</p>
               </div>
               <div className={styles.guides}>
                   <h4>Health Labels</h4>
                   <p>alcohol-cocktail</p>
                   <p>alcohol-free</p>
                   <p>celery-free</p>
                   <p>crustacean-free</p>
                   <p>dairy-free</p>
                   <p>DASH</p>
                   <p>egg-free</p>
                   <p>fish-free</p>
                   <p>fodmap-free</p>
                   <p>gluten-free</p>
                   <p>keto-friendly</p>
                   <p>kosher</p>
                   <p>low-sugar</p>
                   <p>lupine-free</p>
                   <p>mollusk-free</p>
                   <p>No-oil-added</p>
                   <p>peanut-free</p>
                   <p>pecatarian</p>
                   <p>vegan</p>
               </div>
               <div className={styles.guides}>
                   <h4>Dish Types</h4>
                   <p>Alcohol-cocktail</p>
                   <p>Biscuits and cookies</p>
                   <p>Bread</p>
                   <p>Cereals</p>
                   <p>Condiments and sauces</p>
                   <p>Drinks</p>
                   <p>Desserts</p>
                   <p>Egg</p>
                   <p>Main course</p>
                   <p>Omelet</p>
                   <p>Pancake</p>
                   <p>Preps</p>
                   <p>Preserve</p>
                   <p>Salad</p>
                   <p>Sandwiches</p>
                   <p>Soup</p>
                   <p>Starter</p>
                   <p>Snack</p>
                   <p>Teatime</p>
               </div>
               <div className={styles.guides}>
                   <h4>Cuisine Types</h4>
                   <p>American</p>
                   <p>Asian</p>
                   <p>British</p>
                   <p>Caribbean</p>
                   <p>Central Europe</p>
                   <p>Chinese</p>
                   <p>Eastern Europe</p>
                   <p>French</p>
                   <p>Indian</p>
                   <p>Italian</p>
                   <p>Japanese</p>
                   <p>Kosher</p>
                   <p>Mediterranean</p>
                   <p>Mexican</p>
                   <p>Middle Eastern</p>
                   <p>Nordic</p>
                   <p>South American</p>
                   <p>Dinner</p>
                   <p>Lunch</p>
               </div>
           </div>
        </div>
    );
};

export default Guid;