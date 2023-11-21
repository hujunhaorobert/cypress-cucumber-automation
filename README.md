# Cypress Cucumber Typescript Automation Framework 

<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQF1dg2KtKFdPg/company-logo_200_200/0/1626295436859?e=2159024400&v=beta&t=Ib_T9PXXQxkHRKnj3Oe65EKuR6EAh01IgAA6IGvU0FY" alt="exemplo imagem">


### 💻 What has been integrated:

- [x] [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [x] [cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)
- [x] [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- [x] [cucumber json formatter](https://github.com/cucumber/json-formatter)
- [x] [cypress-allure-plugin](https://github.com/Shelex/cypress-allure-plugin)



### 💻 Pre-requisites

1. [Node JS with latest stable version](https://nodejs.org/en/download)
2. [Java 8 or above](https://www.java.com/en/download/manual.jsp)
3. [Allure Reporter](https://allurereport.org/docs/gettingstarted-installation/)
4. Optional: [Json-formatter](https://github.com/cucumber/json-formatter) for Native Reporter option(depends on your OS)

# 🚀 Install the project locally

  1. Git clone the repo
      - git clone git@github.com:hujunhaorobert/cypress-cucumber-automation.git
  2. Go to cypress-cucumber-automation folder
      - cd cypress-cucumber-automation
  3. Install node, npm (or yarn) if not done yet, but not mix using npm or yarn
  4. Install all dependencies by CLI
      - npm install

### How to run the test locally and open report

1. Run test in Chrome with headless, generete allure report and open report:
   - npm run cypress:run-allure:headless
2. Run test in Chrome with headed, generete cucumber report and open multiple-cucumber-html report:
   - npm run cypress:run:cucumber
3. Open traditioal Cucumber report:
   - open cucumber-report.html
4. Open Allure report:
   - allure open
5. Dig into the package.json scripts, you can find more cli to run the test in other mode/combination
   

# 😻 CircleCI Pipeline, test report & test artifacts archive, test result notification (Slack + Twilio SMS)
CircleCI has been setup for this GitHub project. When a new git commit is pushed and merged, it will trigger workflow:

   1. The run-test-and-notify job will be started automatically
   2. Test report will be generated and all test artifacts will be uploaded. You can find the [videos & test report here](https://app.circleci.com/pipelines/github/hujunhaorobert/cypress-cucumber-automation/1/workflows/ef417c8c-e025-461e-a743-6f8285d99108/jobs/2/artifacts)
   3. Test result notification will be sent to Slack and mobile phone via SMS. Some screenshots for reference.

In addition, [A cron job with regression testing](https://app.circleci.com/pipelines/github/hujunhaorobert/cypress-cucumber-automation) will be triggered with 4 times/day, this is helpful to detect web app avalibility status. It can be customised to run by requested schedule.

<img width="600" alt="Screenshot 2023-11-21 at 8 03 25 pm" src="https://github.com/hujunhaorobert/cypress-cucumber-automation/assets/10079887/870d772b-7638-4369-9971-76818571e856"> 
<img width="410" alt="Screenshot 2023-11-21 at 7 44 49 pm" src="https://github.com/hujunhaorobert/cypress-cucumber-automation/assets/10079887/e2d2b050-9766-4d56-a960-88d888f90c46">
<img width="180" alt="Screenshot 2023-11-21 at 7 57 29 pm" src="https://github.com/hujunhaorobert/cypress-cucumber-automation/assets/10079887/904b0d6c-f260-4345-bd64-de493e24e76e">

# :pencil: To do list

1. In the E2E test scenario, a user purchase journey happy path was created with the limited validation, the purpose is mainly to demo the automation framework extensibility as a PoC. We could add more validation on each page, e.g. validate the PO qty / amount /address / notification email received for PO delivery, etc
2. User detail data (email address, address, PO number, SKU number, etc) could be persisted and stored into a user-details.json file for later validation / reusing purpose.
3. Intercepted HomePage HTML response could be stored locally and working as Stubbed response in case needed. This procedure has been implemented for intercepting Search response only at the moment.
4. Common Page elements verification (e.g. page header, menus items, footer) have only been verified on home page, the same verification could be implemented on other pages if they have the same page elements rendered. Also we can create common verification methold in PageCommonElements.ts.
5. [A weird failure](https://github.com/hujunhaorobert/cypress-cucumber-automation/issues/1) Element cannot be found in Headless mode in CircleCI. Run in local headless mode, or headed mode, all successful. Need to find solution to solve it. Currently roll back to headed mode as workaround to fix the test failure in CI. 
   
