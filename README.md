# Unit-Testing-Task5

**Please make sure to do each step as its own commit and make sure to follow AAA pattern and test driven development. And make sure to include all possible test cases and achieve 100% coverage:**

1. **Create a simple String calculator with a method int Add(string numbers) The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”. Start with the simplest test case of an empty string and move to 1 and two numbers. Make sure the function only support up to 2 numbers only.**
2. **Allow the Add method to handle an unknown amount of numbers**
3. **Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message.**
4. **Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2**