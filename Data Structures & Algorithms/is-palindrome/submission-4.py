class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_s = ""
        left = 0
        right = len(s) - 1
        for c in s:
            if c.isalnum():
                new_s += c
        new_s = new_s.lower()
        
        left = 0
        right = len(new_s) - 1
        while(left < right):
            if(new_s[left] != new_s[right]): return False
            left+= 1
            right-= 1
        
        return True


        '''
        params: a string 's'
        return: bool palindrome?
        examples: no special chars, only alphanumeric
        pseudo: 
            - clean up the string, remove all unecessary chars
            - using L and R look for case that returns false
            - only need ONE case where L != R and that breaks the code
            - otherwise return false
        '''