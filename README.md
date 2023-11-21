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
   

# 😻 CI Pipeline, test report & test artifacts archive, test result notification
CircleCI has been setup for this GitHub project. When a new git commit is pushed and merged, it will trigger workflow:

   1. The run-test-and-notify job will be started automatically
   2. Test report will be generated and all test artifacts will be uploaded. You can find the [videos & test report here](https://app.circleci.com/pipelines/github/hujunhaorobert/cypress-cucumber-automation/1/workflows/ef417c8c-e025-461e-a743-6f8285d99108/jobs/2/artifacts)
   3. Test result notification will be sent to Slack and mobile phone via SMS. Some screenshots for reference.

In addition, [A cron job with regression testing](https://app.circleci.com/pipelines/github/hujunhaorobert/cypress-cucumber-automation) will be triggered with 4 times/day, this is helpful to detect web app avalibility status. It can be customised to run by requested schedule.
   

### To do list

1. In the E2E test scenario, a user purchase journey happy path was created with the some validation, the purpose is mainly to demo the automation framework extensibility from PoC. We could add more validation on each page, e.g. validate the PO qty / amount /address / notification email received for PO delivery, etc
    
2. Persist user detail data (email address, address, PO number, SKU number, etc) and write into a json file for later validation purpose.
   
