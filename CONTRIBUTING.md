# Contributing to Foxtail

We're thrilled that you're interested in contributing to Foxtail! This document provides a set of guidelines for contributing to the Foxtail project on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Getting Started

1. **Fork the Repository:** Click the "Fork" button on the top right of the [Foxtail repository](https://github.com/theaminuldev/foxtail/) to create your own copy of the repository.

1. **Clone Your Fork:** Clone your fork to your local machine using Git:

```bash
   git clone https://github.com/theaminuldev/foxtail/.git
```

### After Cloning

1. **Create a New Branch:** Before making your changes, switch to a new branch with a descriptive name for your work:

```bash
    git checkout -b feature/your-feature
```

2. **Make Changes:** Implement your feature or fix, adhering to the coding standards and guidelines mentioned below.

3. **Test Your Changes:** Ensure your changes do not break any existing functionality and meet the project's quality standards.

4. **Commit Your Changes:** Once your changes are ready, commit them with a clear and descriptive commit message:

```bash
    git commit -m "Add feature: a brief description of your feature"
```

5. **Push Your Changes:** Push your changes to your forked repository:

```bash
    git push origin feature/your-feature
```

## Opening a Pull Request

Once you have completed your changes and are ready to integrate them into the main project, the next step is to open a pull request. It's important to note that our project uses a specific workflow where all pull requests should be directed to the ***development*** branch, not directly to ***main/master***. Here’s how you can do this:

1. **Ensure Your Branch is Up to Date:** Before submitting your pull request, make sure your branch is up to date with the latest changes in the ***development*** branch. You can do this by pulling the changes from ***development*** into your branch:

```bash
    git checkout development
	git pull origin development
	git checkout feature/your-feature-name
	git merge development

```

Resolve any merge conflicts if there are any, commit the changes, and push them to your fork.
2. **Open a Pull Request:** Navigate to the original ***Foxtail repository*** you forked on GitHub. You should see a prompt to open a pull request based on the branch you just pushed. Click the "Compare & pull request" button next to your ***feature/your-feature-name*** branch.

3. **Target the development Branch:** When creating your pull request, ensure that the base branch is set to ***development***. This is crucial for maintaining the project's workflow and ensuring that all changes are properly tested before being merged into the main codebase.

## Code Style and Standards

To ensure consistency and maintainability of the codebase, we ask that contributors adhere to the following guidelines:

Write clean, readable, and well-documented code.
Follow the Tailwind CSS coding standards for styling.
Ensure JavaScript follows ESLint recommended practices.
Use descriptive names for variables, functions, and branches.
Include comments in your code where necessary to explain complex logic.

## Licensing

By contributing to Foxtail, you agree that your contributions will be licensed under the project's license. Please check the LICENSE file in the repository for more information on the project's licensing.

## Thank You!

Your contributions are vital to making Foxtail even better. We appreciate your efforts to improve the project and look forward to your valuable input.

Happy coding! 🚀
