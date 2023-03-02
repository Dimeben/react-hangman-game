# Tiny React Apps

When learning a new technology, especially frameworks, beginners often fall in the trap of trying to bit more than they can chew. To learn React, instead of writing one fully-featured application, we propose building several tiny applications that implement simple ideas. The component-based nature of React plays really well with this approach, tiny applications can be as small as a single component or they can later become part of a bigger application. Either way, you'll get tons of practice by being exposed to different problems and patterns.

Tiny applications should be achievable goals, small projects that you can start and finish in a matter of days and you can potentially improve or scale later. Finishing a project, no matter how small, will give you momentum and the boost of confidence that you need to keep developing your skills.

Another great benefit of building several tiny apps is that you get to show future employers a wider range of skills by choosing to use different libraries and approaches.

## Instructions

We've attached a checklist that applies to all React project development. The most important things to think about are planning out your app, then constructing a static version with no functionality, then making it do stuff!

_REMEMBER:_ Commit changes after finishing a meaningful unit of work (a component, a feature of functionality, a successful refactor.) 

Use [create-react-app](https://github.com/facebook/create-react-app) to bootleg your project. We recommend you do this with `npx create-react-app <project-name>` - this means you don't need to globally install create-react-app and risk it becoming outdated. [More on npx](https://www.npmjs.com/package/npx).

# Sprint Day 1

On day 1 we're going to focus on apps which _do not need any text input_ ❌📝

## Pick a tiny-app to try from this list

- _Dog-Hat-O-matic_ - Use a button to switch between a picture of a dog with and without a hat on. (look in the assets/dog-hat folder for images)
- _Random **\_\_\_** generator_ - Replicate a 'random name generator' or 'random dnd character generator'. You will need to hard code your data.
- _Image Gallery_ - Have an array of image urls (you can use [unsplash](https://unsplash.com/) for free images or provide your own!) and make an image gallery with buttons for displaying the next image.
- _Dice Roller_ - A dice roller where pressing a button randomly generates a single dice roll.
- _Travel locations_ - Render a list of locations that people can visit and tick off once they've been there. Users can click on one to change it to visited and change styling accordingly.
- _Shopping list_ - Provide the user with a list of clickable available items to buy. When you click an item, you add it to your shopping list, and can click them again to remove them.
- _Fortune teller_ - you randomly select from a group of ten fortunes, when the user clicks a button. (If you can't think of any fortunes, check 'fortunes.js' file the assets folder)

If you have made _at least_ one app from the above list ✅, you can either have a go at one from this list, try another one from the above list, or create an idea of your own 💡 (remember no text input for now!)

- _Click Attack!_ - A click-speed test that tests how many times the user can click a button in 30 seconds.
- _Swat the Button_ - A reflex-based click game where buttons appear randomly on the screen and you must click them as fast as possible.
- _Dice Roller 2.0_ - A dice roller where you can select the number of sides on the dice, and how many dice you would like to roll. For example: roll 4 8-sided dice and give the user the total.

# Sprint Day 2

If you've not finished the app you were working on yesterday, you can come back to it _after you've had a go_ at one of the below projects. Now we have unlocked _controlled components_, let's put them to use! We can explore apps that need text input, or forms. ✅📝

💡Here are some ideas to choose from:💡

- _Auto-Greeter_ - A form that asks for your name, and after it has been submitted, then adds text to the screen that says: "Hello, (your name here)"
- _To-do list_ - an app where you can add items to the to-do list by typing them in, and clicking a submit button.
- _Pet Namer_ - you are presented with different pets (you can find pet image urls in the pet-namer.js file in the assets folder), the user must name them using text input.
- _Names-in-a-hat generator_ - You add names one at a time, via a text input to a list of names, and then have the option to pick a random name from the list.

Once you've had a go at _at least one_ of the above ideas, you can either pick another from the list to try, have a go at one of your own ideas 💡, or if you're feeling brave - have a look at the ideas below.

Day 2 continued... if you want a challenge....

- _Wordle_ - Re-create a modern classic. You'll need to source a word list from somewhere but it can be hardcoded once you've found one.
- _Calculator_ - an app that replicates the functionality and looks of your operating system's calculator. You could head into scientific territory if you feel brave...
- _Noughts and Crosses_ - The classic game which tracks scores - could you make this so you could programmatically make different size boards?

## Credits

The idea for React tiny apps comes from the following article by Andrew Farmer:

- https://www.javascriptstuff.com/tiny-unique-app/

Some examples of the tiny-apps that they built can be found here:

- [Emoji Search](https://ahfarmer.github.io/emoji-search/)
- [Calculator](https://ahfarmer.github.io/calculator/)
