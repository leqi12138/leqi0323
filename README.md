# leqi0323

9103 final assignment

My Section: Time-Based Changes
My part of the project focuses on creating a time-driven blinking effect for lightbulbs. There are five lightbulbs in total, each blinking at different intervals of 0.5 seconds, 1 second, and 1.5 seconds. Over time, the lightbulbs alternately turn on and off according to their respective blinking intervals, creating a dynamic visual effect. The blinking of each lightbulb represents different life signs: the faster it blinks, the weaker the life sign, reflecting the inspiration I drew from the movie The Shop of the Lamp, where lightbulbs symbolize human life, and the blinking frequency reflects the urgency of the situation.

Code Knowledge
For my section, I used the following techniques and code knowledge:

setInterval() Method: This method is used to repeatedly execute the blinking function for the lightbulbs at a specified time interval. Each lightbulb has a different blinking interval set using setInterval(), for example, 0.5 seconds, 1 second, and 1.5 seconds, controlling their blinking frequencies.
frameRate() Method: By setting the frame rate, I ensure that the animation runs smoothly.
Conditional Statements: I used if statements to control the on/off states of each lightbulb, determining whether the lightbulb should be on based on the passage of time.
fill() and ellipse() Methods: These methods are used to draw the lightbulbs and set their colors.
millis() Method: This method helps track the number of milliseconds since the program started, which I use to precisely control the blinking times for each lightbulb.
Knowledge Sources
The technical implementation of my section is based on the p5.js official documentation and examples from developer communities. I specifically referenced the following resources:

p5.js Documentation: https://p5js.org/reference/
The official p5.js documentation provided detailed explanations of common methods like setInterval(), millis(), and frameRate().

Stack Overflow: https://stackoverflow.com/
Discussions and solutions on Stack Overflow helped me better understand how to control image dynamics based on time intervals, especially for implementing animation and blinking effects.
