from pydantic import BaseModel
from typing import List


class ChatMessage(BaseModel):
    """
    @author Michael Banck michael.banck@uni-wuerzburg.de ©
    """
    text: str
    isBot: bool


class MessageBlock(BaseModel):
    """
    @author Michael Banck michael.banck@uni-wuerzburg.de ©
    """
    systemInfo: str
    messages: List[ChatMessage]
