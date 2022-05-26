import React from 'react';
import code from '../assets/images/code.png'

const Blogs = () => {
    return (
        <div className='container mx-auto px-2'>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>Question & Answer</h2>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: The following steps can increase the performance of React,</p>
                    <p>a. Using Immutable Data Structures</p>
                    <p>b.React's components are properly arranged</p>
                    <p>	c. Each component should be divided into layers and coded less</p>
                    <p>	d.Using Production Mode Flag in Webpack</p>
                    <p>	e.Dependency must be well maintained and optimization</p>
                    <p>	f. Avoid Inline Function Definition in the Render Function</p>
                    <p>	g.Spreading props on DOM elements</p>
                    <p>	h.CDN cannot be used</p>
                </div>
            </div>

            <div className="collapse mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>And: React state can be managed in 4 ways.
                        Local state,Global state,Server state,URL state.
                        In small applications its impact is not much later, but in large applications it has to be done in a serious way. So it is very important to do react state management. Redux can be used to manage react state.</p>
                </div>
            </div>
            <div className="collapse mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans: prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </div>
            </div>
            <div className="collapse mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans:If we set the product = value directly, then the value of the product may change later using the set product.The quality of the product will change later. So the value of the product cannot be set directly</p>
                </div>
            </div>

            <div className="collapse mt-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Ans:Follow the code below to search by name,

                        <img src={code} alt="code" />

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;