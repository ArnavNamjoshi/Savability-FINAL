# Savability

Project Overview & Role

Act as an expert full-stack React developer and kid-focused UI/UX designer to build Savability, a kid-friendly financial web application that helps children manage and understand their money. Build the entire application as an interactive, state-driven single-page web app using React, Tailwind CSS, and Lucide icons.

Design System & Visual Identity

Color Palette: Use soft colors across the interface, specifically slight yellow, slight blue, white, and a dark-blue black for primary text and high-contrast elements.

Typography: Use soft, rounded, kid-friendly fonts for all headings, body text, and numeric counters.

Primary Currency: Display all monetary amounts mainly in the child's chosen imaginary unit (such as pens, chocolates, or chips).

Secondary Currency: Render the actual INR amount directly alongside or beneath the imaginary unit in a smaller, slightly transparent grey font.

Privacy & Onboarding Rules

Zero Personal Data: Do not collect any real personal data, emails, phone numbers, or real names so the app remains strictly safe and kid-friendly.

Unit Configuration: Collect the name of the child's custom imaginary unit (e.g., pens, chocolates, or chips) and how much a single unit costs in INR (e.g., 10, 25, or 50).

Local Persistence: Store all state in browser localStorage so the child can test and use the app without creating an account.

Income & Balance Engine

Regular Additions: Allow the user to configure and add money on a regular basis, such as recurring pocket money.

Irregular Additions: Provide a quick-add button for irregular one-time money additions, such as a gift of 500 rupees.

Core Feature Modules (The Four User Stories)

1. Expense Ledger: Where Did All My Money Go?

Spending File: Maintain a visual file tracking where the user's money goes whenever they log an expense like buying a toy.

Unit-First Breakdown: Display every logged expense primarily in the custom special unit (for example, pens priced at 10 rupees each) with the INR value in smaller transparent grey text.

Custom Unit Controls: Allow the child user to name their special unit and set or adjust its rupee price at any time.

2. Savings Goal Tracker: How Do I Save for That Cycle?

Goal Tracking: Allow the child user to set a specific savings goal, such as a cycle, and visually watch their progress move up or back.

Setback Calculator: Show how non-essential purchases delay the goal, such as an ice cream purchase setting the user back by 3 days.

Goal Balance Display: Display both the amount saved and the amount left mainly in the special currency, with the rupee equivalent in a smaller, slightly transparent font.

3. Purchase Validator: Can I Buy This?

Request Check: Provide a request tool where the child enters an item they want to buy, and the app checks if the cost is below 75% of their account wealth.

Parent Prompt: Ask the child user to call a parent to the screen if the requested item is below 75% of their account wealth.

Parent Approval Screen: Display a clean parent view showing what the child wants to buy and how much it costs in both INR and the imaginary unit.

4. Savings Battle Royale: Encouraging Smart Decisions

Bot-Driven Arena: Create a pseudo-battle royale game populated with simulated bots to give the illusion of a live multiplayer game.

Knockout Rules: Knock players and bots out of the game when they make bad financial decisions, such as spending money on unneeded toys or snacks.

Win Condition: Eliminate bots over time so that if the child user avoids bad financial decisions, they win the match and learn that good decisions help them get ahead of the world.

Rewards & Leveling: Reward the child user upon winning with badges, cosmetics, and XP to dress up their profile and increase their level.

Level Cosmetics: Unlock even more profile cosmetics each time the child's level increases

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c9a55110-4a85-4b45-9693-ec0239be939b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
