from enum import Enum


class Regex(Enum):
    EMAIL = (
        r'^[\w\.]+@([\w]+\.)+[\w]{2,4}$',
        'Invalid email'
    )

    NAME = (
        r'^[A-Z][a-zA-Z]{1,19}$',
        'Only alphanumeric 2-20 characters.'
    )

    PASS = (
        r'[0-9a-zA-Z]{5,}',
        'Only upper and lower case letters and numbers'
    )

    def __init__(self, pattern: str, msg: str):
        self.pattern = pattern
        self.msg = msg
