# Cypress Cucumber Typescript Automation Framework 

<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQF1dg2KtKFdPg/company-logo_200_200/0/1626295436859?e=2159024400&v=beta&t=Ib_T9PXXQxkHRKnj3Oe65EKuR6EAh01IgAA6IGvU0FY" alt="exemplo imagem">


### 💻 What has been integrated:

- [x] [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [x] [cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [x] [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- [x] [cucumber json formatter](https://github.com/cucumber/json-formatter)
- [x] [cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin)



### 💻 Pre-requisites

1. Node JS with latest stable version
2. Optional: Java 8 for Allure Reporter
3. Optional: [Json-formatter](https://github.com/cucumber/json-formatter) for Native Reporter option(depends on your OS)

### 🚀 Install the project

- Install project dependencies with: 
  - Git clone the project, cd ${projectRootFolder} 
  - npm i

### How to run the test and open report

1. Run test in Chrome with headless, generete allure report and open report:
   - npm run cypress:run-allure:headless
2. Run test in Chrome with headed, generete cucumber report and open multiple-cucumber-html report:
   - npm run cypress:run:cucumber
3. Open traditioal Cucumber Report:
   - open cucumber-report.html
4. Open Allure Report:
   - allure open
5. Dig into the package.json scripts, you will find more cli to run the test in other mode/combination


### To do list

1. In the E2E test scenario, a user purchase journey happy path was created with the less validation, the purpose is demo the automation framework extensibility. Could add more validation on each page, e.g. validate the qty / amount /address / notification email received for PO delivery, etc
    
2. Persist user data (email address, address, PO number, SKU number, etc) and write into a json file for later validation purpose.
   
