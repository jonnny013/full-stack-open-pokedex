Ruby: Linting with RuboCop seems to be the go-to linter for Ruby code, it can also be run on Ruby on Rails. It can handle naming conventions, indentation and whitespace, styling and unused variables and methods, redundant code while also having flexibility to be configured as your needs fit. 
Testing can be done with RSpec. It is better to use stubs or mocks to isolate code being tested from its dependencies rather than testing those dependencies directly. Like all testing, the more tests that can check each technique, the more robust it will be.
Builds can be done with ruby-build. It compiles ruby and verifies that the installed ruby is functional.

Other CI options include GitLab, CircleCI, Travis CI and AWES CodePipeline. GitLab is a simple to set up and offers comprehensive analytics. CircleCI gives a simple and intuitive interface to manage pipelines to get started quickly. Travis CI is known for its simplicity, often used with GitHub and open source projects.  AWS Integrates seamlessly with other AWS services, it is robust and scalable.

It seems that most of the above options would all be more suitable for cloud services as many of them run from other cloud services such as github or AWS and some seem to have prebuilt solutions available for starting immediately.