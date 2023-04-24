# Goals
This repository contains code examples and instructions on how to implement JQuery into a web page. The goal of the repository is to learn jQuery by doing hands-on exercises that are easy to follow and understand.

# Project #1: JQuery Count-Up

## A JavaScript number counter

### To use and implement this code, follow these steps:

1. Include the required dependencies: jQuery, Bootstrap, and countTo.js.

2. Copy and paste the code into your script.js file, or into a separate JavaScript file if you prefer.

3. Ensure that the HTML markup for the counters is set up correctly. Each counter should be contained within a .counter-item element, and have a data-to attribute specifying the target value for the counter. For example:

```
<div class="counter-item">
    <span class="counter-value" data-to="100">0</span>
    <p class="counter-label">Happy Customers</p>
</div>
```
4. The code will automatically initialize the counter animation when the page loads. As the user scrolls down the page, the counters will animate into view and count up to their target values.

5. If you need to modify the animation trigger point, adjust the value -800 in the code to a different value that suits your needs. This value determines the distance (in pixels) between the top of the browser window and the element before the animation begins.

6. If you need to customize the appearance or behavior of the counter animation, you can modify the code to suit your needs. Refer to the comments in the code for guidance on how to make changes.

7. Finally, test your implementation thoroughly to ensure that the counters are animating correctly and that there are no errors or issues with the code.

### See it in action

![](https://github.com/NicholasStambaugh/JQuery-Projects/blob/main/ezgif-1-31e436de9c.gif)

# Project #2: JQuery Redirect within selectpicker

This jQuery code allows you to redirect the user to a specific URL when they select a particular option from a select element. The code listens for a change event on the select element and reads the value of the selected option. If the option has a value attribute, the code redirects the browser to the specified URL.

### To use and implement this code, follow these steps:

1. Ensure that you have included the jQuery library in your HTML file.

2. Copy and paste the code into your script.js file, or into a separate JavaScript file if you prefer.

3. Add a select element to your HTML file and give it a class of "selectpicker". For example:

```
<select class="selectpicker">
  <option value="index.html">Employer Branding</option>
  <option>Retention</option>
  <option>Sourcing and Recruiting</option>
</select>
```
4. If you want the "Employer Branding" option to redirect to "index.html", add a value attribute to the option tag with the value "index.html".

5. The code will automatically initialize the change event listener when the page loads. When the user selects an option, the code will read the value of the option and redirect the browser to the specified URL.

6. Test your implementation thoroughly to ensure that the select element is working correctly and that there are no errors or issues with the code.

### See it in action

![](https://github.com/NicholasStambaugh/JQuery-Projects/blob/main/ezgif-4-7e6dfbd017.gif)

# Project #3: JQuery ToDo List

This is a simple web application that allows you to create a list of tasks or to-do items. The app is built using HTML, CSS, and jQuery, and is designed to be simple and easy to use.

### To use and implement this code, follow these steps:

1. Ensure that you have included the jQuery library in your HTML file. This can be done by adding the following script tag in the head section of your HTML file:

```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

2. Copy and paste the code into your script.js file, or into a separate JavaScript file if you prefer.

3. Add an unordered list element to your HTML file and give it an id of "item-list". For example:

```
<ul id="item-list"></ul>
```
4. Add a form element to your HTML file with an input field for the task and a date field for the due date. Give the form an id of "add-form". For example:

```
<form id="add-form">
  <input type="text" id="new-item" placeholder="Add new item">
  <input type="date" id="new-item-date">
  <button type="submit">Add</button>
</form>

```

5. The code will automatically initialize the submit event listener when the page loads. When the user submits the form, the code will read the values of the input fields and add a new item to the todo list with a due date.

6. Test your implementation thoroughly to ensure that the todo list is working correctly and that there are no errors or issues with the code.

### See it in action

![](https://github.com/NicholasStambaugh/JQuery-Projects/blob/main/todogif.gif)
