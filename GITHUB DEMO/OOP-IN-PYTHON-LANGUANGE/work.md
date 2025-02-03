# Am learnig Object Oriented Programming in Python in order to improve my problem solving skills!

# I am currently learning about classes and objects in Python.

# I am trying to create a class called "BankAccount" that has attributes for account number,

# account holder's name, and balance. I want to be able to deposit and withdraw money from

# the account, and also be able to check the balance of the account.

class BankAccount:
def **init**(self, account_number, account_holder, balance=0):
self.account_number = account_number
self.account_holder = account_holder
self.balance = balance
def deposit(self, amount):
