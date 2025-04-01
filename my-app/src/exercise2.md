# Exercise 2: Feature Access Matrix
✓ Objective:
Check if a user has access to a feature based on their plan using a decision object.
Data:
const accessMatrix = {
basic: {
dashboard: true,
analytics: false,
},
premium: {
dashboard: true,
analytics: true,
},
};
Task:
Create a FeatureAccess component that takes plan and feature props and displays:
✔"Feature is available."
X "Upgrade your plan to access this feature."
● "Invalid plan or feature." if the key is missing