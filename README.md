# Task 1:  Massiverocket Assignment : Playwright With Typescript - Automation  for React version of TodoMVC available at TodoMVC
--------------------------------------------------------------------------------------------------------------------------
 
Playwright is a powerful, open source test automation framework specifically designed for testing web applications. It provides the ability to perform end-to-end testing with great efficiency and accuracy.

Application Under Test: React version of TodoMVC available at TodoMVC: React.

Test Scenarios:
Add New Todos: Automate adding multiple to-do items and verify they appear in the list correctly.
Complete Todos: Automate marking an item as completed and verify the item's state changes accordingly.
Delete Todos: Automate the deletion of a to-do item and ensure it's removed from the list.

# Installation Node and Playwirght on Mac: 

1. Check if Node.js is Installed : Before downloading Node.js, you can check if it's already installed on your system. Open your terminal or command prompt and run the following commands:

    node -v
    npm -v

2. Download Node.js: Go to the official Node.js website and download the appropriate installer for your operating system.

macOS:
Open the downloaded .pkg file.
Follow the installation instructions, and drag the Node.js icon to the Applications folder.
You can access Node.js from the Applications folder or using the terminal
After installation, you can verify that Node.js and npm are correctly installed by running the following commands in your terminal:
       node -v
       npm -v

3. Install Playwright : You can install playwright

Create a new folder, in my case I have created a folder named Playwright although you can name it anything.
Now open this folder in Visual Studio Code. To open the folder click on File → Open Folder → Navigate to the folder that you created and Open the folder
After you open this folder the alert box will be prompted click on “Yes, I trust the Authors”. You will see the folder will get opened on VS Code

Open Terminal in VS Code. To Open the terminal click on Terminal in the top menu bar and click on New Terminal. A terminal will be opened at the bottom

Go to the terminal and run the command :
        npm init playwright@latest
After you run this command it will ask you 4 things: 
1. Do you want to use Typescript or JavaScript? → I am using typescript. If you want to use Javascript press the arrow key and click Enter
2. Where to put your end-to-end tests? → Its a free-form text you can name it anything. I have named it tests
3. Add a GitHub Actions workflow? → Press y if you want to add it and enter
4. Install Playwright browsers (can be done manually via ‘npx playwright install’)? (Y/n) → Press Y if you want to install playwright browsers.

Wait for the installations to get finished. After the installation is done on Explorer, on left-hand side, you can see the project structure/folders have been created

Check the playwright version by running the following command
        npm playwright -v
You can also check all the options which we can use with playwright commands
        npx playwright --help

**How to run the test?**
To run the test run the below command in VS Code Terminal
        npx playwright test


**Reports:** Use this command to generate reports:
        npx playwright show-report
        


        

