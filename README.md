# Overview
## Screens and Components
### Homepage
- The Homepage is the main screen that users interact with. It displays a welcome message, profile picture, card information, quick action buttons, and a list of recent transactions.

## Key Components
* Profile Section: Displays the user's profile picture, welcome message, and name.
* Search Box: A search icon allowing users to search for transactions or other features.
* Card Information: Displays the user's card details.
* Quick Actions: Buttons for sending money, receiving money, taking loans, and topping up the account.
* Transaction List: A scrollable list displaying recent transactions.
* Uses ScrollView for scrollable content.
* Uses FlatList to render a list of transactions.
* Utilizes TouchableOpacity for interactive footer navigation buttons.

## Settings Screen
- The Settings Screen allows users to customize their app experience, including changing themes, language, viewing their profile, and more.

### Key Components
* Theme Toggle: A switch to toggle between dark and light themes.
* Navigation Links: Options to navigate to different settings such as Language, My Profile, Contact Us, Change Password, and Privacy Policy.
* Utilizes useContext to handle theme changes.
* Employs SafeAreaView for iOS compatibility.
* Integrates Ionicons for forward navigation icons.

## Transaction Component
- The Transaction component is a reusable component to display individual transaction details in the transaction list.
* title: The name of the transaction.
* section: The category or section of the transaction.
* salary: The amount involved in the transaction.
* icon: The icon representing the transaction.
* textColour: Color for the transaction amount text.
* Code Overview
* Uses View and Text for layout and styling.
* Utilizes Image to display transaction icons.
* Applies StyleSheet for styling the component.

## Screenshots
  

![photo_2024-06-26_21-44-06](https://github.com/emmanuellaAk/rn-assignment5-11090094/assets/137521867/200dc7ff-91ee-49fe-9d67-350ef18597a4)
![photo_2024-06-26_21-44-07](https://github.com/emmanuellaAk/rn-assignment5-11090094/assets/137521867/5909f3ff-74cf-4584-99c2-5e6404689064)
![photo_2024-06-26_21-44-08](https://github.com/emmanuellaAk/rn-assignment5-11090094/assets/137521867/3ddcdd47-5156-4fba-b544-11a50cdaf5d6)
![photo_2024-06-26_21-44-07 (2)](https://github.com/emmanuellaAk/rn-assignment5-11090094/assets/137521867/b59cdf91-fed6-4cd8-900f-167abe3b6e16)
![photo_2024-06-26_21-44-08 (2)](https://github.com/emmanuellaAk/rn-assignment5-11090094/assets/137521867/481689d2-dacb-44b8-a929-e6d1634fb1b1)
![photo_2024-06-26_21-58-04](https://github.com/emmanuellaAk/rn-assignment5-11090094/assets/137521867/6ee47444-3c76-4470-a78c-a4d7c455ae02)

